// Define the Product (Shape) interface
export interface Shape {
  draw(): void;
}
// Factory interface
export interface ShapeFactory {
  createShape(): Shape;
}

// Abstract Product: PaymentProcessor
export interface PaymentProcessor {
  pay(amount: number): void;
}

// Factory interface
export interface PaymentProcessorFactory {
  createPaymentProcessor(): PaymentProcessor;
}
