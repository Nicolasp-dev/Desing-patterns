import { Shape, ShapeFactory } from "./model";

// Concrete Product: Circle
class Circle implements Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

// Concrete Product: Rectangle
class Rectangle implements Shape {
  draw() {
    console.log("Drawing a rectangle");
  }
}

// Concrete Product: Triangle
class Triangle implements Shape {
  draw() {
    console.log("Drawing a triangle");
  }
}


// Concrete Factories
class CircleFactory implements ShapeFactory {
  createShape() {
    return new Circle();
  }
}

class RectangleFactory implements ShapeFactory {
  createShape() {
    return new Rectangle();
  }
}

class TriangleFactory implements ShapeFactory {
  createShape() {
    return new Triangle();
  }
}

// Client code
const circleFactory = new CircleFactory();
const rectangleFactory = new RectangleFactory();
const triangleFactory = new TriangleFactory();

const circle = circleFactory.createShape();
const rectangle = rectangleFactory.createShape();
const triangle = triangleFactory.createShape();

circle.draw(); // Output: Drawing a circle
rectangle.draw(); // Output: Drawing a rectangle
triangle.draw(); // Output: Drawing a triangle
