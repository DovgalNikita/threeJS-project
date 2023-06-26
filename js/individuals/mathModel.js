const data = {
    labels: [
      'Спазм, %',
      'Тонус, %',
      'Рефлекторность, %'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(172, 0, 134)',
        'rgb(42, 0, 53)',
        'rgb(172, 0, 57)'
      ],
      hoverOffset: 4
    }]
  };


const config = {
    type: 'pie',
    data: data,
    options: {
      plugins: {
          legend: {
              labels: {
                  font: {
                      size: 20
                  },
                  color: 'rgb(230,230,230)'
              }
          }
      }
  }
}

const pieChart = new Chart (
    document.getElementById('pieChart'),
    config
)