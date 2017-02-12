"use-strict";

function ratingsSpread (results) {

    var ctx = $('#rating-spread');

    var resultsLabels; // placeholder for array from results
    var resultsData; // placeholder for array from results

    var data = {
        labels: resultsLabels,
        datasets: [
            {
                label: "Rating Spread",
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: resultsData,
            }
        ]
    };

    var myBarChart = new Chart(ctx, {
        type: "bar",
        data: data,
        options: {
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });

};
