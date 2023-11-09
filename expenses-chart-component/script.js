let data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]


function renderChart() { 

    const spendingChart = document.querySelector('.chart-days')
    let biggestAmount = 0; // Initialize the biggest amount to 0


    data.forEach(chart => {
        const day = chart.day;
        const amount = chart.amount;
        const chartDays = document.createElement('div')
        chartDays.classList.add('chart')

        const height = amount * 2.5;

        const stringToInject = `
            <span style="height: ${height}px;" data-amount="${amount}"></span> 
            <p>${day}</p>
         `
         chartDays.innerHTML = stringToInject
        spendingChart.append(chartDays)

              // Check if the current amount is bigger than the previously found biggest amount
              if (amount > biggestAmount) {
                biggestAmount = amount;
            }
    })
        // Set the background of the chart representing the biggest amount to blue
        data.forEach((chart, index) => {
            if (chart.amount === biggestAmount) {
                const chartElements = document.querySelectorAll('span');
                chartElements[index].style.backgroundColor = 'hsl(186, 34%, 60%)';
            }
        });

            // Add event listeners to show/hide the tooltip
    const spanElements = document.querySelectorAll('.chart span');
    spanElements.forEach(span => {
        span.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.textContent = `$${span.getAttribute('data-amount')}`;
            span.appendChild(tooltip);
        });

        span.addEventListener('mouseleave', () => {
            const tooltip = span.querySelector('.tooltip');
            if (tooltip) {
                span.removeChild(tooltip);
            }
        });
    });
 }

 renderChart()