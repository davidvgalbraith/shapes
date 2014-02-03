function Dictionary() {}

function Shape() {
    this.dict = new Dictionary();
}
Shape.prototype.depict = function(svg, type) {
    var obj = document.createElementNS("http://www.w3.org/2000/svg", type);
    for (var key in this.dict) {
	obj.setAttribute(key, this.dict[key]);
    }
    svg.appendChild(obj);
}

function Line() {
    Shape.call(this);
}
Line.prototype = Object.create(Shape.prototype);
Line.prototype.constructor = Line;
Line.prototype.x1 = function(value) {
    if (value == undefined) {
	return this.dict["x1"];
    }
    this.dict["x1"] = value;
    return this;
}
Line.prototype.x2 = function(value) {
    if (value == undefined) {
	return this.dict["x2"];
    }
    this.dict["x2"] = value;
    return this;
}
Line.prototype.y1 = function(value) {
    if (value == undefined) {
	return this.dict["y1"];
    }
    this.dict["y1"] = value;
    return this;
}
Line.prototype.y2 = function(value) {
    if (value == undefined) {
	return this.dict["y2"];
    }
    this.dict["y2"] = value;
    return this;
}
Line.prototype.stroke = function(value) {
    if (value == undefined) {
	return this.dict["stroke"];
    }
    this.dict["stroke"] = value;
    return this;
}
Line.prototype.strokeWidth = function(value) {
    if (value == undefined) {
	return this.dict["stroke-width"];
    }
    this.dict["stroke-width"] = value;
    return this;
}
Line.prototype.draw = function(svg) {
    this.depict(svg, "line");
    return this;
}

function Circle() {
    Shape.call(this);
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.cx = function(value) {
    if (value == undefined) {
	return this.dict["cx"];
    }
    this.dict["cx"] = value;
    return this;
}
Circle.prototype.cy = function(value) {
    if (value == undefined) {
	return this.dict["cy"];
    }
    this.dict["cy"] = value;
    return this;
}
Circle.prototype.center = function(value1, value2) {
    this.dict["cx"] = value1;
    this.dict["cy"] = value2;
    return this;
}
Circle.prototype.width = function(value) {
    if (value == undefined) {
	return parseInt(this.dict["r"]) * 2;
    }
    this.dict["r"] = parseInt(value) / 2;
    return this;
}
Circle.prototype.stroke = function(value) {
    if (value == undefined) {
	return this.dict["stroke"];
    }
    this.dict["stroke"] = value;
    return this;
}
Circle.prototype.strokeWidth = function(value) {
    if (value == undefined) {
	return this.dict["stroke-width"];
    }
    this.dict["stroke-width"] = value;
    return this;
}

Circle.prototype.fill = function(value) {
    if (value == undefined) {
	return this.dict["fill"];
    }
    this.dict["fill"] = value;
    return this;
}

Circle.prototype.draw = function(svg) {
    this.depict(svg, "circle");
    return this;
}


function Rectangle() {
    Shape.call(this);
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.cx = function(value) {
    if (value == undefined) {
	return this.centerx;
    }
    this.centerx = value;
    return this;
}
Rectangle.prototype.cy = function(value) {
    if (value == undefined) {
	return this.centery;
    }
    this.centery = value;
    return this;
}
Rectangle.prototype.center = function(value1, value2) {
    this.centerx = value1;
    this.centery = value2;
    return this;
}
Rectangle.prototype.width = function(value) {
    if (value == undefined) {
	return this.dict["width"];
    }
    this.dict["width"] = value;
    return this;
}

Rectangle.prototype.height = function(value) {
    if (value == undefined) {
	return this.dict["height"];
    }
    this.dict["height"] = value;
    return this;
}

Rectangle.prototype.stroke = function(value) {
    if (value == undefined) {
	return this.dict["stroke"];
    }
    this.dict["stroke"] = value;
    return this;
}
Rectangle.prototype.strokeWidth = function(value) {
    if (value == undefined) {
	return this.dict["stroke-width"];
    }
    this.dict["stroke-width"] = value;
    return this;
}

Rectangle.prototype.fill = function(value) {
    if (value == undefined) {
	return this.dict["fill"];
    }
    this.dict["fill"] = value;
    return this;
}

Rectangle.prototype.draw = function(svg) {
    this.dict["x"] = parseInt(this.centerx) - (parseInt(this.dict["width"]) / 2);
    this.dict["y"] = parseInt(this.centery) - (parseInt(this.dict["height"]) / 2);
    this.depict(svg, "rect");
    return this;
}

function Square() {
    Rectangle.call(this);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.width = function(value) {    
    if (value == undefined) {
	return this.dict["width"];
    }
    this.dict["width"] = value;
    this.dict["height"] = value;
    return this;
}

function Text() {
    Shape.call(this);
}

Text.prototype = Object.create(Shape.prototype);
Text.prototype.constructor = Text;

Text.prototype.x = function(value) {
    if (value == undefined) {
	return this.dict["x"];
    }
    this.dict["x"] = value;
    return this;
}

Text.prototype.y = function(value) {
    if (value == undefined) {
	return this.dict["y"];
    }
    this.dict["y"] = value;
    return this;
}

Text.prototype.text = function(value) {
    if (value == undefined) {
	return this.dict["text"];
    }
    this.dict["text"] = value;
    return this;
}

Text.prototype.draw = function(svg) {
    var obj = document.createElementNS("http://www.w3.org/2000/svg", "text");
    obj.setAttribute("x", this.dict["x"]);
    obj.setAttribute("y", this.dict["y"]);
    var words = document.createTextNode(this.dict["text"]);
    obj.appendChild(words);
    svg.appendChild(obj);
    return this;
}