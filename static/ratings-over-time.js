"use-strict";


function ratingsOverTime (results) {

    var ctx = $('canvas#ratings-over-time');

    var results = results;

    var resultsTitle = results['title'];
    var resultsLabels = [];
    var resultsData = [];

    for (i = 0; i < results['ave_rating'].length; i++) {
        var date = results['ave_rating'][i]
        resultsLabels.push(date);
        resultsData.push(results['ave_rating'][date]);
    }

    var data = {
        labels: resultsLabels,
        datasets: [
            {
                label: 'Ratings Trend for ' + resultsTitle,
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
                data: resultsData,
                spanGaps: false,
            }
        ]
    };

    var myLineChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                showLines: true,
                responsive: false
            }
        });
};
