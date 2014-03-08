var svg = document.getElementById("graph");
var items =  Object.keys(co2).length;
var width = parseFloat(svg.getAttribute("width"));
var height = parseInt(svg.getAttribute("height"));
var ratio = width / items;
var max = -Infinity;
var min = Infinity;
//draw axes and title
new Line()
    .x1(70).y1(0).x2(70).y2(height-15)
    .stroke('black').strokeWidth(2)
    .draw(svg);
new Line()
    .x1(70).y1(height-15).x2(width).y2(height-15)
    .stroke("black").strokeWidth(2)
    .draw(svg);
new Text()
    .x(width/2).y(20).text("CO2 over time")
    .draw(svg);
//ascertain appropriate y-axis labels
for (i = 0; i < items; i++) {
    var level = parseFloat(co2[i]["level"]);
    if (level > max) {
	max = level;
    }
    if (level < min) {
	min = level;
    }
}
//label y-axis
for (j = 0; j < 6; j++) {
    var q = new Text().x(0).y(height - (100 + (height - 160) / 5 * j))
	.text((max - min) * j / 5 + min).draw(svg);
}

//label x-axis and draw time series
for (k = 0; k < items-2; k++) {

    if (k % 38 == 0) {
	new Text().x((ratio - 150/items) * k + 70).y(height)
	    .text(co2[k]["date"].substring(2, 7)).draw(svg);
    }

    new Line().x1(70 + k * (ratio - 150/items))
	.y1(height - 100 - (parseFloat(co2[k]["level"]) - min) / (max - min) * (height - 160))
	.x2(70 + (k + 1) * (ratio - 150 / items))
	.y2(height - 100 - (parseFloat(co2[k+1]["level"]) - min) / (max - min) * (height - 160))
	.stroke("black").strokeWidth(1).draw(svg);
}