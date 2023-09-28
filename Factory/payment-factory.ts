import { PaymentProcessor, PaymentProcessorFactory } from "./model";

// Concrete Products
class CreditCardPayment implements PaymentProcessor {
  pay(amount: number) {
    console.log(`Paid ${amount} USD via Credit Card`);
  }
}

class PayPalPayment implements PaymentProcessor {
  pay(amount: number) {
    console.log(`Paid ${amount} USD via PayPal`);
  }
}

class BitcoinPayment implements PaymentProcessor {
  pay(amount: number) {
    console.log(`Paid ${amount} USD via Bitcoin`);
  }
}

// Concrete Factories
class CreditCardPaymentFactory implements PaymentProcessorFactory {
  createPaymentProcessor() {
    return new CreditCardPayment();
  }
}

class PayPalPaymentFactory implements PaymentProcessorFactory {
  createPaymentProcessor() {
    return new PayPalPayment();
  }
}

class BitcoinPaymentFactory implements PaymentProcessorFactory {
  createPaymentProcessor() {
    return new BitcoinPayment();
  }
}

// Client code
function processPayment(factory: PaymentProcessorFactory, amount: number) {
  const paymentProcessor = factory.createPaymentProcessor();
  paymentProcessor.pay(amount);
}

// Usage
const creditCardFactory = new CreditCardPaymentFactory();
const payPalFactory = new PayPalPaymentFactory();
const bitcoinFactory = new BitcoinPaymentFactory();

processPayment(creditCardFactory, 100);
processPayment(payPalFactory, 50);
processPayment(bitcoinFactory, 200);
