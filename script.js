async function fetchData() {
    try {
        const response = await fetch('https://eae11d00-9972-4185-ab96-7f8b1c62bf93-00-v9i6v80gr6zl.sisko.replit.dev/api/stats');
        const data = await response.json();

        document.getElementById('guildsCount').innerText = data.guilds;
        document.getElementById('usersCount').innerText = data.users;
    } catch (error) {
        console.error('Error fetching data:', error);
        displayError();
    }
}

function displayError() {
    document.getElementById('guildsCount').innerText = '50+';
    document.getElementById('usersCount').innerText = '1400+';
}

window.onload = fetchData;
