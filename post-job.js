document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('post-job-form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const jobData = {
            title: formData.get('title'),
            description: formData.get('description'),
            location: formData.get('location')
        };

        try {
            const response = await fetch('http://localhost:5000/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jobData)
            });

            if (response.ok) {
                alert('Job posted successfully!');
                form.reset();
            } else {
                alert('Failed to post job.');
            }
        } catch (error) {
            console.error('Error posting job:', error);
        }
    });
});
