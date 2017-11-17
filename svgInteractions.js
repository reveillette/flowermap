//throw some globals at the top

var sig = 'cb723072f6870d58'
var key = '74838237bffa820e9242c061634ec0dd'


    $('#svg-main').load('/img/map-01.svg', null, function() { 

    	console.log("loaded");


	$("#Dahlia_cities circle").mouseenter(function(e) {
    		// var currentCity = $(e.target).attr('id');
    		// var x = +$(e.target).attr('cx') + 20;
    		// var y = +$(e.target).attr('cy') + 20;

    		// console.log(x + ", " + y);

    		$("Dahlia_labels text").show();
    		// $("#Dahlia_cities").append("<text x=" + x + " y=" + y + " fill='blue' font-size=35>" + currentCity + "</tspan>")
  	});

	var dahliaPaths = $("#Dahlia_paths g");

	var tulipPaths = $("#Tulip_paths g");

	var currentIndex = -1;

	var dahliaTextBox = $("#dahlia-text-box p");

	var tulipTextBox = $("#tulip-text-box p");

	var tulipSpread = $("#Tulip_originalSpread");

	var dahliaSpread = $("#Dahlia_originalSpread");

	var dahliaCities = $("#Dahlia_cities");

	var tulipCities = $("#Tulip_cities");

	console.log(dahliaTextBox);


	// $(dahliaPaths[currentIndex]).show();
	// $(tulipPaths[currentIndex]).show();
	// $(textBox[currentIndex]).show();

	$("#dahliaNext").click(function(){
        currentIndex++;
        // $(dahliaPaths).fadeOut(500, function() {
        // 	$(dahliaPaths[currentIndex]).fadeIn(1000);	
        // });
        $(dahliaPaths[currentIndex]).fadeIn(250);
        $(dahliaTextBox[currentIndex]).show();
        $(dahliaTextBox[currentIndex-1]).hide();	
	
        
    });

    $("#dahliaPrev").click(function(){
        if (currentIndex < 0) { currentIndex = 0; }
    	$(dahliaPaths[currentIndex]).fadeOut(250);	
    	$(dahliaTextBox[currentIndex]).hide();	

        currentIndex--;

        $(dahliaTextBox[currentIndex]).show();

    });
	
	$("#tulipNext").click(function(){
        currentIndex++;
        // $(dahliaPaths).fadeOut(500, function() {
        // 	$(dahliaPaths[currentIndex]).fadeIn(1000);	
        // });
        $(tulipPaths[currentIndex]).fadeIn(250);
        $(tulipTextBox[currentIndex-1]).hide();	
        $(tulipTextBox[currentIndex]).show();	
        
    });

    $("#tulipPrev").click(function(){
        if (currentIndex < 0) { currentIndex = 0; }
    	$(tulipPaths[currentIndex]).fadeOut(250);	
    	$(tulipTextBox[currentIndex]).hide();	

        currentIndex--;

        $(tulipTextBox[currentIndex]).show();

    });

	$("#tulipSpread").click(function(){
      	$(tulipSpread).toggle();		

    });

    $("#dahliaSpread").click(function(){
      	$(dahliaSpread).toggle();		

    });

      $("#dahliaCities").click(function(){
      	$(dahliaCities).toggle();		

    });

      $("#tulipCities").click(function(){
      	$(tulipCities).toggle();		

    });




});

	$('#dahliaInfo').on('click', function() {

	$('.dahliaInfoBox').fadeToggle();  // toggles visibility of background screen when clicked (shows if hidden, hides if visible)	                        
	
});

	$('#tulipInfo').on('click', function() {

	$('.tulipInfoBox').fadeToggle();  // toggles visibility of background screen when clicked (shows if hidden, hides if visible)	                        
	
});

// Show "About this Map" modal when clicking on button
$('#about').on('click', function() {


	$('.modal').fadeToggle();  // toggles visibility of background screen when clicked (shows if hidden, hides if visible)	                        
	
});

// Close "About this Map" modal when close button in modal is clicked
$('.modal .close-button').on('click', function() {

	$('.modal').fadeToggle();  // toggles visibility of background screen when clicked (shows if hidden, hides if visible)	                        
	
});

$('#data-world').on('click', function() {

    $('#Trade_map').toggle(); 
});

$('#data-export').on('click', function() {

    $('#pie-chart').fadeToggle(); 
});

$('#data-import').on('click', function() {

    $('#pie-chart2').fadeToggle(); 
});

// Part two - pie chart
    
 var piechart = d3.select("#exports").selectAll("#pie-chart");
    var pcWidth = +piechart.attr("width");
    var pcHeight = +piechart.attr("height");
    var radius = Math.min(pcWidth, pcHeight) / 2;
    var piechartG = piechart.append("g").attr("transform", "translate(" + pcWidth / 2 + "," + pcHeight / 2 + ")");

 var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

 var pie = d3.pie()
     .sort(null)
     .value(function(d) { return d.export; });

 var path = d3.arc()
     .outerRadius(radius - 10)
     .innerRadius(0);

 var label = d3.arc()
     .outerRadius(radius - 40)
     .innerRadius(radius + 50);

 d3.csv("piechart.csv", function(d) {
   d.export = +d.export;
   return d;
 }, function(error, data) {
   if (error) throw error;

   var arc = piechartG.selectAll(".arc")
     .data(pie(data))
     .enter().append("g")
       .attr("class", "arc");

   arc.append("path")
       .attr("d", path)
       .attr("fill", function(d) { return color(d.data.country); });

   arc.append("text")
       .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
       .attr("dy", "0.35em")
       .attr("fill","white")
       .text(function(d) { return d.data.country; });
 });


    // var piechart = d3.select("#imports").selectAll("#pie-chart2");
    // var pcWidth = +piechart.attr("width");
    // var pcHeight = +piechart.attr("height");
    // var radius = Math.min(pcWidth, pcHeight) / 2;
    // var piechartG = piechart.append("g").attr("transform", "translate(" + pcWidth / 2 + "," + pcHeight / 2 + ")");

    // var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    // var pie = d3.pie()
    //     .sort(null)
    //     .value(function(d) { return d.import; });

    // var path = d3.arc()

    //     .outerRadius(radius - 10)
    //     .innerRadius(0);

    // var label = d3.arc()
    //     .outerRadius(radius - 40)
    //     .innerRadius(radius - 40);

    // d3.csv("piechart2.csv", function(d) {
    //   d.import = +d.import;
    //   return d;
    // }, function(error, data) {
    //   if (error) throw error;

    //   var arc = piechartG.selectAll(".arc")
    //     .data(pie(data))
    //     .enter().append("g")
    //       .attr("class", "arc");

    //   arc.append("path")
    //       .attr("d", path)
    //       .attr("fill", function(d) { return color(d.data.country); });

    //   arc.append("text")
    //       .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
    //       .attr("dy", "0.35em")
    //       .text(function(d) { return d.data.country; });
    // });

