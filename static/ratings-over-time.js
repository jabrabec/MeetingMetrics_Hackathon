"use-strict";

function ratingsOverTime (results) {

    var ctx = $('#ratings-over-time');

    var resultsLabels; // placeholder for array from results
    var resultsData; // placeholder for array from results

    var data = {
        labels: resultLabels,
        datasets: [
            {
                label: "Average Rating Per Month",
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
                data: resultData,
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
};
