"use-strict";

$(document).ready(function () {

    var ctx = $('#myChart');

    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                label: "Average Topic Rating Per Month",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                // sample data
                data: [3, 3.5, 3, 4, 4, 3, 4, 3, 3, 5, 4, 4],
                spanGaps: false,
            }
        ]
    };

    var myLineChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                showLines: true
            }
        });
});
