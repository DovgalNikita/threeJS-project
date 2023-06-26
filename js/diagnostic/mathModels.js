const labels = [
    'F00—F09',
    'F40—F48',
    'F70—F79',
    
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Ригидность',
      backgroundColor: ['rgba(0, 110, 31)'],
      borderColor: ['rgb(0, 110, 31)'],
      data: [100,80,60],
    },
    {
      label: 'Возбудимость',
      backgroundColor: ['rgba(168, 121, 0'],
      borderColor: ['rgb(168, 121, 0)'],
      data: [80,60,40],
    },
    {
      label: 'Сократимость',
      backgroundColor: ['rgba(168, 0, 0)'],
      borderColor: ['rgb(168, 0, 0)'],
      data: [60,40,20],
    }
  ]
  };

  const plugin = {
    id: 'mathModel_1',
    beforeDraw: (chart) => {
      const {ctx} = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = 'rgb(18,19,32)';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };

  const config = {
    type: 'bar',
    data: data,
    plugins: [plugin],
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 13
                    },
                    color: 'rgb(230,230,230)',
                }
            }
        },
        scales: {
          x: {
            grid: {
              borderColor: 'rgb(230,230,230)',
              tickColor: 'rgb(230,230,230)'
            },
            ticks: {
              color: 'rgb(230,230,230)',
              font:{
                size:13
              }
            }
          },
          y: {
            grid: {
              tickColor: 'rgb(230,230,230)'  
            },
            ticks: {
              color: 'rgb(230,230,230)',
              font:{
                size:13
              }
            }
          }
        }
    }
  };

  const myChart = new Chart(
    document.getElementById('mathModel_1'),
    config
  );





  const labels2 = [
    'F00—F09',
    'F40—F48',
    'F70—F79',
  ];

  const config2 = {
    data: {
      datasets: [
        {
          type: 'line',
          label: 'Рефрактерность',
          data: [50, 30, 40, 20],
          backgroundColor: ['rgb(168, 0, 0)'],
          borderColor: ['rgb(168, 0, 0)'],
      },{
          type: 'bar',
          label: 'Проводимость',
          data: [50, 30, 40, 20],
          backgroundColor: ['rgba(168, 121, 0'],
          borderColor: ['rgb(168, 121, 0)'],
      }],
      labels: ['Y-02', 'Y-22', 'Y-56', 'Y-87']
    },
    plugins: [plugin],
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 13
                    },
                    color: 'rgb(230,230,230)',
                }
            }
        },
        scales: {
          x: {
            grid: {
              borderColor: 'rgb(230,230,230)',
              tickColor: 'rgb(230,230,230)'
            },
            ticks: {
              color: 'rgb(230,230,230)',
              font:{
                size:13
              }
            }
          },
          y: {
            grid: {
              tickColor: 'rgb(230,230,230)'  
            },
            ticks: {
              color: 'rgb(230,230,230)',
              font:{
                size:13
              }
            }
          }
        }
    }
  };

  const myChart2 = new Chart(
    document.getElementById('mathModel_2'),
    config2
  );

