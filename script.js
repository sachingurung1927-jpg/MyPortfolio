document.addEventListener('DOMContentLoaded', () => {
    // Experience data array
    const experiences = [
        {
            company: "Proseware, Inc.",
            role: "Senior UI/UX Designer",
            startDate: "Jan 2023",
            endDate: "Dec 2025",
            description: "Managed the design team and mentored junior designers to improve design quality and efficiency. Created wireframes, prototypes, and high-fidelity mockups for a variety of web and mobile projects. Worked closely with clients to understand their needs and goals and translate them into effective design solutions."
        },
        {
            company: "Proseware, Inc.",
            role: "UI/UX Designer",
            startDate: "Oct 2020",
            endDate: "Jul 2022",
            description: "Led the redesign of the company's e-commerce platform, resulting in a 25% increase in sales. Conducted user research and usability testing to inform design decisions and improve the user experience. Collaborated with development teams to ensure designs were implemented accurately and efficiently."
        },
        {
            company: "Relecloud",
            role: "UI/UX Designer",
            startDate: "Feb 2018",
            endDate: "Oct 2020",
            description: "Conducted user research and developed user personas to inform product design and development. Designed user flows, wireframes, and prototypes for a mobile app that won several industry awards. Worked closely with the development team to ensure designs were implemented accurately and efficiently."
        }
    ];

    const container = document.getElementById('experience-container');

    // Generate HTML for each experience item
    experiences.forEach(exp => {
        const div = document.createElement('div');
        div.className = 'exp-item';
        
        div.innerHTML = `
            <h3 class="exp-role">${exp.role} <span class="exp-company">@ ${exp.company}</span></h3>
            <p class="exp-date">${exp.startDate} - ${exp.endDate}</p>
            <p class="exp-desc">${exp.description}</p>
        `;
        
        container.appendChild(div);
    });
});
