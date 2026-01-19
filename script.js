// Add event listener to button
document.getElementById("btn").addEventListener("click", getData);

// Async function to fetch and display data
async function getData() {
    try {
        // Fetch data from Nekos API
        const res = await fetch("https://nekos.best/api/v2/hug?amount=1");

        // Check if response is OK
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        // Convert response to JSON
        const data = await res.json();

        // Display the gif inside the output div
        document.getElementById("output").innerHTML =
            `<img src="${data.results[0].url}" width="300" alt="Random Hug">`;

    } catch (error) {
        // Handle errors
        console.error(error);
        document.getElementById("output").textContent = "Error fetching data.";
    }
}
