/*I have a theory that in higher latitudes, people will live in more
densely-packed cities, because it's unpleasant to travel long distances
in the cold. Let's make a graph to test this theory!*/
var svg = document.getElementById("graph");
var items =  Object.keys(latlong).length;
var width = parseFloat(svg.getAttribute("width"));
var height = parseInt(svg.getAttribute("height"));
var ratio = width / items;
var max = -Infinity;
var min = Infinity;
var info = new Array(items);

//Make axes and graph label
new Line()
    .x1(70).y1(0).x2(70).y2(height-15)
    .stroke('black').strokeWidth(2)
    .draw(svg);
new Line()
    .x1(70).y1(height-15).x2(width).y2(height-15)
    .stroke("black").strokeWidth(2)
    .draw(svg);
new Text()
    .x(width/2).y(20).text("Population density versus Latitude")
    .draw(svg);
//ascertain appropriate y-axis labels
for (i = 0; i < items; i++) {
    var density = parseFloat(playfair[i]["population"]) / area(parseFloat(playfair[i]["diameter"]));
    info[i] = Math.round(10000*parseFloat(latlong[i]["lat"]))/10000 + " " + density;
    if (density > max) {
	max = density;
    }
    if (density < min) {
	min = density;
    }
}

info.sort();
//label y-axis
for (j = 0; j < 6; j++) {
    var q = new Text().x(0).y(height - (100 + (height - 160) / 5 * j))
	.text((((max - min) * j / 5 + min) + "").substring(0, 5)).draw(svg);
}

//label x-axis and draw time series
for (k = 0; k < items-2; k++) {
    var divide = info[k].indexOf(" ");
    var thisdensity = info[k].substring(divide+1, divide + 6);
    divide = info[k+1].indexOf(" ");
    var nextdensity = info[k+1].substring(divide+1, divide+6);
    if (k % 2 == 0) {
	new Text().x((ratio - 150/items) * k + 70).y(height)
	    .text(info[k].substring(0, 4)).draw(svg);
    }
    new Line().x1(70 + k * (ratio - 150/items))
	.y1(height - 100 - (thisdensity - min) / (max - min) * (height - 160))
	.x2(70 + (k + 1) * (ratio - 150 / items))
	.y2(height - 100 - (nextdensity - min) / (max - min) * (height - 160))
	.stroke("black").strokeWidth(1).draw(svg);
}
//area of the circle with diameter x
function area(x) {
    return Math.PI * x * x * 0.25;
}
//hand-draw the last thing on the x-axis
new Text().x((ratio - 150/items) * 20 + 70).y(height)
    .text(info[20].substring(0, 4)).draw(svg);