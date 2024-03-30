// Function to create the pie chart
function createPieChart() {
    var chart = am4core.create("chartdiv", am4charts.PieChart);
    
    chart.logo.disabled = true;
    
    chart.data = [{
      "TOKEN": "Financial Overhead",
      "SALE": 73
    }, {
      "TOKEN": "Bonus & found",
      "SALE": 55
    }, {
      "TOKEN": "it infrastructure",
      "SALE": 38
    }, {
      "TOKEN": "Gift Code Inventory",
      "SALE": 20.93 
    }];
    
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "SALE";
    pieSeries.dataFields.category = "TOKEN";
    
    chart.innerRadius = am4core.percent(40);
    
    pieSeries.slices.template.fillOpacity = 1;

    // Setting up custom colors
    pieSeries.colors.list = [
      am4core.color("#242F9B"), // Financial Overhead - Red
      am4core.color("#646FD4"), // Bonus & found - Yellow
      am4core.color("#9BA3EB"), // it infrastructure - Blue
      am4core.color("#DBDFFD")  // Gift Code Inventory - Green
    ];

    var hs = pieSeries.slices.template.states.getKey("hover");
    hs.properties.scale = 1;
    hs.properties.fillOpacity = 0.5;
    
    // Remove labels
    pieSeries.labels.template.disabled = true;
    
    // Create a new side list
    var container = chart.chartContainer.createChild(am4core.Container);
    container.width = am4core.percent(80);
    container.align = "right";
    container.valign = "top";
    
    var list = container.createChild(am4core.List);
    list.data = chart.data;
    list.fontSize = 12;
    list.align = "right";
    list.valign = "top";
    list.itemContainers.template.valign = "middle";
    list.itemContainers.template.padding(0, 10, 0, 10);
    list.itemContainers.template.events.on("hit", function(ev) {
      var dataItem = ev.target.dataItem;
      pieSeries.slices.each(function(slice) {
        if (slice.dataItem == dataItem) {
          slice.isActive = !slice.isActive;
        } else {
          slice.isActive = false;
        }
      });
    });

    var title = container.createChild(am4core.Label);
    title.text = "Categories";
    title.align = "center";
    title.fontSize = 14;
    title.fontWeight = "bold";
  }
  
  // Create the chart
  createPieChart();
  
  // Attach resize handler to make the chart responsive
  window.addEventListener("resize", function() {
    createPieChart();
  });
