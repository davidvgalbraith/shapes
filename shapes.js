function Dictionary() {}

function Shape() {
    this.attrs = 0;
    this.keys = new Array(8);
    this.values = new Array(8);
    this.dict = new Dictionary();
}
Shape.prototype.depict = function(svg, type) {
    var obj = document.createElementNS("http://www.w3.org/2000/svg", type);
  //  for (var k = 0; k < this.attrs; k++) {
//	obj.setAttribute(this.keys[k], this.values[k]);
    //}
    for (var key in this.dict) {
	obj.setAttribute(key, this.dict[key]);
    }
    svg.appendChild(obj);
};

function Line() {
    Shape.call(this);
}
Line.prototype = Object.create(Shape.prototype);
Line.prototype.constructor = Line;
Line.prototype.x1 = function(value) {
    this.keys[this.attrs] = "x1";
    this.values[this.attrs] = value;
    this.attrs += 1;
    this.dict["x1"] = value;
    return this;
};
Line.prototype.x2 = function(value) {
    this.keys[this.attrs] = "x2";
    this.values[this.attrs] = value;
    this.attrs += 1;
    this.dict["x2"] = value;
    return this;
};
Line.prototype.y1 = function(value) {
    this.keys[this.attrs] = "y1";
    this.values[this.attrs] = value;
    this.attrs += 1;
    this.dict["y1"] = value;
    return this;
};
Line.prototype.y2 = function(value) {
    this.keys[this.attrs] = "y2";
    this.values[this.attrs] = value;
    this.attrs += 1;
    this.dict["y2"] = value;
    return this;
};
Line.prototype.stroke = function(value) {
    this.keys[this.attrs] = "stroke";
    this.values[this.attrs] = value;
    this.attrs += 1;
    this.dict["stroke"] = value;
    return this;
};
Line.prototype.strokeWidth = function(value) {
    this.keys[this.attrs] = "stroke-width";
    this.values[this.attrs] = value;
    this.attrs += 1;
    this.dict["stroke-width"] = value;
    return this;
}
Line.prototype.draw = function(svg) {
    this.depict(svg, "line");
};

function Circle() {
    Shape.call(this);
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.cx = function(value) {
    this.keys[this.attrs] = "cx";
    this.values[this.attrs] = value;
    this.attrs += 1;
    return this;
};
Circle.prototype.cy = function(value) {
    this.keys[this.attrs] = "cy";
    this.values[this.attrs] = value;
    this.attrs += 1;

    return this;
};
Circle.prototype.center = function(value1, value2) {
    this.keys[this.attrs] = "y1";
    this.values[this.attrs] = value;
    this.attrs += 1;

    return this;
};
Circle.prototype.width = function(value) {
    this.keys[this.attrs] = "y2";
    this.values[this.attrs] = value;
    this.attrs += 1;

    return this;
};
Circle.prototype.stroke = function(value) {
    this.keys[this.attrs] = "stroke";
    this.values[this.attrs] = value;
    this.attrs += 1;

    return this;
};
Circle.prototype.strokeWidth = function(value) {
    this.keys[this.attrs] = "stroke-width";
    this.values[this.attrs] = value;
    this.attrs += 1;

    return this;
}

Circle.prototype.fill = function(value) {
    this.keys[this.attrs] = "fill";
    this.values[this.attrs] = value;
    this.attrs += 1;
    
    return this;
}

Circle.prototype.draw = function(svg) {
    this.depict(svg, "line");
};