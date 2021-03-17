const ctx = document.querySelector('.js-chart').getContext('2d');
console.log(ctx);
function fetchData() {
    fetch("./csv/Plumetop_heights_timeseries.csv")
        .then((response) => {return response.text();})
        .then((data) => {
            
            const parsedData = window.Papa.parse(data, { header: true }).data;
            console.log(parsedData);
            const labels = parsedData.map(entry => entry.DaysFromInjection)
            console.log(labels);
            const dataFirst = parsedData.map(entry => entry.OmpsLpPlumeTopHeightsKm);
            const dataSecond = parsedData.map(entry => entry.ModelPlumeTopHeightkm);
            
            var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'OmpsLpPlumeTopHeightsKm',
            data: dataFirst,
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            borderColor: "rgba(255, 159, 64, 0.2)",
            borderWidth: 1
        },
            {
            label: 'ModelPlumeTopHeightkm',
            data: dataSecond,
            backgroundColor: "rgba(250, 159, 164, 0.2)",
            borderColor: "rgba(220, 159, 164, 0.2)",
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    //beginAtZero: true
                }
            }]
        }
    }
});
        })
    
}
fetchData();

console.log(window);

