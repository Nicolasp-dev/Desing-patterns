// Prototype interface
interface Cloneable {
  clone(): Cloneable;
}

// Concrete prototype
class ConcretePrototype implements Cloneable {
  private data: string;

  constructor(data: string) {
    this.data = data;
  }

  clone(): Cloneable {
    // Perform a shallow copy
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  getData(): string {
    return this.data;
  }

  setData(data: string): void {
    this.data = data;
  }
}

// Client code
const prototype = new ConcretePrototype("Initial Data");
const object1 = prototype.clone() as ConcretePrototype;
const object2 = prototype.clone() as ConcretePrototype;

object1.setData("Modified Data 1");
object2.setData("Modified Data 2");

console.log(`Prototype Data: ${prototype.getData()}`);
console.log(`Object 1 Data: ${object1.getData()}`);
console.log(`Object 2 Data: ${object2.getData()}`);
