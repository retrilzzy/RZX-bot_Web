async function fetchData() {
    try {
        const response = await fetch('https://dash.rzx-bot.top/api/stats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });

        const data = await response.json();

        document.getElementById('guildsCount').innerText = data.guilds;
        document.getElementById('usersCount').innerText = data.users;
        document.getElementById('cmdUsage').innerText = data.cmd_usage;
        
    } catch (error) {
        console.error('Error fetching data:', error);
        displayError();
    }
}

function displayError() {
    document.getElementById('guildsCount').innerText = '50+';
    document.getElementById('usersCount').innerText = '1400+';
    document.getElementById('cmdUsage').innerText = 'API Down';
}

window.onload = fetchData;


window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add('small');
    } else {
        navbar.classList.remove('small');
    }
});
