export const skillsData = [
  { category: 'Languages', description: 'Python, JavaScript', rank: '4' },
  { category: 'Web Development', description: 'React, Node.js, Express.js, MongoDB, Redux, RTK Query, Docker', rank: '3' },
  { category: 'App Development', description: 'React-Native', rank: '2' },
  { category: 'ML Concepts', description: 'Regression, Classification', rank: '4' },
  { category: 'DL Concepts', description: 'Basic NLP Techniques', rank: '1' },
  { category: 'Version Control', description: 'Git', rank: '5' },
  { category: 'Database', description: 'MongoDB, MySQL', rank: '4' },
  { category: 'CSS Frameworks', description: 'TailwindCSS, ChakraUI', rank: '5' },
  { category: 'IDE', description: 'Visual Studio, Jupyter Notebook, PopSQL, Google Colab', rank: '5' },
];


// Grafik Verileri
export const chartData = {
    labels: skillsData.map(skill => skill.category),
    datasets: [
      {
        label: 'Skill Level',
        data: skillsData.map(skill => parseInt(skill.rank, 10)),
        backgroundColor: 'rgba(153, 102, 255, 0.2)', // Mor tonlarında arka plan rengi
        borderColor: 'rgba(153, 102, 255, 1)',       // Mor tonlarında kenar rengi
        borderWidth: 2,
      }
    ],
  };
  
  // Grafik Opsiyonları
  export const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          // Özelleştirilmiş tooltip içeriği
          title: function(tooltipItem) {
            const index = tooltipItem[0].dataIndex;
            return skillsData[index].category;
          },
          label: function(tooltipItem) {
            const index = tooltipItem.dataIndex;
            const skill = skillsData[index];
            return [`${skill.category}: ${tooltipItem.raw}`, `Description: ${skill.description}`];
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        max: 5, // Maksimum sıralama değeri
      },
    },
  };
  