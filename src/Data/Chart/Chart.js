export const projectDurationsInWeeks = {
    'Weirdstore': 6,
    'Weirdstore-backend': 10,      
    'GloriousFood': 2,     
    'Planet demo': 12,
    'Driver4U': 3,
    'Disease': 6,
    'Hotel Book': 3,
    'WhatsFav': 6,
    'Skillify-Backend': 7

};

export const dynamicData = Object.keys(projectDurationsInWeeks).map((projectName, index) => ({
    week: projectName, // Labels for the X-axis
    projects: projectDurationsInWeeks[projectName], // Data for the Y-axis
}));


export const chartData = {
    labels: dynamicData.map(data => data.week),
    datasets: [
        {
            label: 'Weeks to Complete',
            data: dynamicData.map(data => data.projects),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.1,
            borderWidth: 3,
        },
    ],
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Project Completion Time in Weeks', // Başlık
                font: {
                    size: 20,
                    weight: 'bold',
                },
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `Week: ${tooltipItem.label}, Projects: ${tooltipItem.raw}`;
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Weeks', // Y ekseni başlığı
                },
                ticks: {
                    stepSize: 1,
                    min: 0,
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Projects', // X ekseni başlığı
                },
            },
        },
    },
};


