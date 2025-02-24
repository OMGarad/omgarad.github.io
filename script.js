async function fetchJoke() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        const jokeContainer = document.querySelector('.joke-container');
        jokeContainer.innerHTML = `<p>${data.value}</p>`;
    } catch (error) {
        console.error('Error fetching joke:', error);
        const jokeContainer = document.querySelector('.joke-container');
        jokeContainer.innerHTML = `<p>Failed to load joke. Please try again later.</p>`;
    }
}

window.addEventListener('load', fetchJoke);