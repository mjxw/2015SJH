 var southwestGraph = Morris.Donut({
        element : 'morris-donut-chart-southwest',
        data: [{
            label: "% Of Calls Not Reported On",
            value: 65.66
        }, {
            label: "% Of Calls Reported On",
            value: 34.34
        }],
        resize: true
    });

 $document.on('load', function(event) {
    southwestGraph.redraw();
 });
    //westGraph.redraw();