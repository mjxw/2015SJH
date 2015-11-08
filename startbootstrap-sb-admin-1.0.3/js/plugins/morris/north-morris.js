 var northGraph = Morris.Donut({
        element : 'morris-donut-chart-north',
        data: [{
            label: "% Of Calls Not Reported On",
            value: 58.63  
        }, {
            label: "% Of Calls Reported On",
            value: 41.37
        }],
        resize: true
    });

 $document.on('load', function(event) {
    northGraph.redraw();
 });
    //westGraph.redraw();