//// #1
var Vector = function(x,y) {
  this.x = x;
  this.y = y;
}

Vector.prototype = {
  get length() {
    var temp = Math.pow(this.x, 2) + Math.pow(this.y, 2);
    return Math.sqrt(temp);
    //return length;
  }
}

Vector.prototype.plus = function(anotherVector) {
  return new Vector(this.x + anotherVector.x, this.y + anotherVector.y);
}

Vector.prototype.minus = function(anotherVector) {
  return new Vector(this.x - anotherVector.x, this.y - anotherVector.y);
}


console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);


// #2
var StretchCell = function(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

function TextCell(text) {
  this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width ,line) {
    return Math.max(width , line.length);
  }, 0);
};

TextCell.prototype.minHeight = function() {
  return this.text.length;
};

function repeat(string , times) {
  var result = "";
  for (var i = 0; i < times; i++)
  result += string;
  return result;
}

TextCell.prototype.draw = function(width ,height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};

StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
};

StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));

//// #3

function logFive(sequence) {
  for (var i = 0; i < 5; i++) {
    if (!sequence.next())
      break;
    console.log(sequence.current());
  }
}

function ArraySeq(array) {
  this.pos = -1;
  this.array = array;
}
ArraySeq.prototype.next = function() {
  if (this.pos >= this.array.length - 1)
    return false;
  this.pos++;
  return true;
};
ArraySeq.prototype.current = function() {
  return this.array[this.pos];
};

function RangeSeq(from, to) {
  this.pos = from - 1;
  this.to = to;
}
RangeSeq.prototype.next = function() {
  if (this.pos >= this.to)
    return false;
  this.pos++;
  return true;
};
RangeSeq.prototype.current = function() {
  return this.pos;
};

logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));
