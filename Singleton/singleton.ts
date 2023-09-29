class Singleton {
  private static instance: Singleton | null = null;
  private data: number;

  private constructor() {
    this.data = 0;
  }

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  getData(): number {
    return this.data;
  }

  setData(value: number): void {
    this.data = value;
  }
}

// Usage
const instance1 = Singleton.getInstance();
instance1.setData(42);

const instance2 = Singleton.getInstance();
console.log(`Data from instance2: ${instance2.getData()}`); // Output: Data from instance2: 42
