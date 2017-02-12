$(document).ready(function () {
    var radarChart = $("#radar-chart").get(0).getContext("2d");
    var optionsRadar = {
        responsive: true,
        title: {
            display: true,
            text: 'UFO Reports per 100,000 People by State',
            fontSize: 20,
            fontFamily: "'Open Sans', sans-serif",
        },
    }; //end of var optionsDonut

     // make a chart
    function showRadarChart(data){
        var donutChart = new Chart(ctx_donut, {
                                                  type: 'radar',
                                                  data: data,
                                                  options: optionsRadar,
                                                }); //end of var donutChart
    } //end of showCharts function

    
    }); //end of .ready()
    

    // get the data!
    $.get('/radar.json', showRadarChart);

}); //end of document.ready function