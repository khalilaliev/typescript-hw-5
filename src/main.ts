abstract class Figure {
  readonly name: string;
  readonly color: string;
  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  abstract calculateArea(): number;
  print?(): string;
}

// ---------------------------------------------------

class Circle extends Figure {
  public radius: number;

  constructor(color: string, radius: number) {
    super("Circle", color);
    this.radius = radius;
  }

  calculateArea(): number {
    const area = Math.PI * this.radius * this.radius;
    return area;
  }
}

const circle = new Circle("Red", 12);
console.log(circle.calculateArea());

// ---------------------------------------------------

class Rectangle extends Figure {
  public width: number;
  public height: number;

  constructor(color: string, width: number, height: number) {
    super("Rectangle", color);
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    const area = this.width * this.height;
    return area;
  }

  print(): string {
    return "Area of rectangle = width * height";
  }
}

const rectangle = new Rectangle("Green", 22, 11);
console.log(rectangle.calculateArea());

// ---------------------------------------------------

class Square extends Figure {
  public side: number;

  constructor(color: string, side: number) {
    super("Square", color);
    this.side = side;
  }

  calculateArea(): number {
    const squareArea = this.side * this.side;
    return squareArea;
  }

  print(): string {
    return "Area of a square = Side * Side";
  }
}

const square = new Square("Yellow", 23);
console.log(square.calculateArea());
console.log(square.print());

// ---------------------------------------------------

class Triangle extends Figure {
  public base: number;
  public height: number;

  constructor(color: string, base: number, height: number) {
    super("Triangle", color);
    this.base = base;
    this.height = height;
  }

  calculateArea(): number {
    const triangleArea = 0.5 * this.base * this.height;
    return triangleArea;
  }
}

const triangle = new Triangle("Green", 23, 11);
console.log(triangle.calculateArea());
