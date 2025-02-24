async function fetchJoke() {
    const jokeContainer = document.querySelector('.joke-container');
    const refreshButton = document.getElementById('refresh-button');

    try {
        jokeContainer.innerHTML = `<p>Your joke is loading...</p>`;
        refreshButton.style.display = 'none';

        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();

        jokeContainer.innerHTML = `<p>${data.value}</p>`;
        refreshButton.style.display = 'inline-block';
    } catch (error) {

        console.error('Error fetching joke:', error);
        jokeContainer.innerHTML = `<p>Failed to load joke. Please try again later.</p>`;
        refreshButton.style.display = 'inline-block'; // Show the button even if there's an error
    }
}

document.addEventListener('mousemove', (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    const hue = Math.round(x * 360);
    const saturation = Math.round(y * 100);
    document.body.style.backgroundColor = `hsl(${hue}, ${saturation}%, 80%)`;
});

window.addEventListener('load', fetchJoke);

const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', fetchJoke);