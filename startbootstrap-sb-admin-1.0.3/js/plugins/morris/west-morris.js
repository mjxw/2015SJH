 var westGraph = Morris.Donut({
        element : 'morris-donut-chart-west',
        data: [{
            label: "% Of Calls Not Reported On",
            value: 63.82  
        }, {
            label: "% Of Calls Reported On",
            value: 36.18
        }],
        resize: true
    });

 $document.on('load', function(event) {
    westGraph.redraw();
 });
    //westGraph.redraw();