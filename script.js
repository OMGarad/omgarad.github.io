async function fetchJoke() {
    console.log("Fetching joke...");
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        console.log("Response received:", response);
        const data = await response.json();
        console.log("Joke data:", data);
        const jokeContainer = document.querySelector('.joke-container');
        if (jokeContainer) {
            jokeContainer.innerHTML = `<p>${data.value}</p>`;
        } else {
            console.error("Joke container not found!");
        }
    } catch (error) {
        console.error('Error fetching joke:', error);
        const jokeContainer = document.querySelector('.joke-container');
        if (jokeContainer) {
            jokeContainer.innerHTML = `<p>Failed to load joke. Please try again later.</p>`;
        } else {
            console.error("Joke container not found!");
        }
    }
}

window.addEventListener('load', fetchJoke);