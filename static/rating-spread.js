"use-strict";

function ratingsSpread (results) {

    var ctx = $('canvas#rating-spread');

    var results = results;

    var resultsTitle = results['title'];
    var resultsLabels = [];
    var resultsData = [];

    for (i = 0; i < results['rating'].length; i++) {
        var rating = results['rating'][i];
        resultsLabels.push(rating);
        resultsData.push(results['rating'][rating]);
    }

    var data = {
        labels: resultsLabels,
        datasets: [
            {
                label: 'Rating Spread for ' + resultsTitle,
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
        },
        responsive: false
    });

};
