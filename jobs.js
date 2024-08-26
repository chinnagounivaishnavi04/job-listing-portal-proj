document.addEventListener('DOMContentLoaded', () => {
    const jobList = document.getElementById('job-list');

    fetch('http://localhost:5000/jobs')
        .then(response => response.json())
        .then(data => {
            jobList.innerHTML = data.map(job => `
                <div class="job-card">
                    <h2>${job.title}</h2>
                    <p>${job.description}</p>
                    <p><strong>Location:</strong> ${job.location}</p>
                </div>
            `).join('');
        })
        .catch(error => console.error('Error fetching jobs:', error));
});

