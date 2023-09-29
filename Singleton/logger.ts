class Logger {
  private static instance: Logger | null = null;
  private log: string[] = [];

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  logEvent(event: string): void {
    const timestamp = new Date().toLocaleString();
    this.log.push(`[${timestamp}] ${event}`);
  }

  getLog(): string[] {
    return this.log;
  }
}

// Client code
const logger = Logger.getInstance();

// Simulate logging events from different parts of the application
logger.logEvent("User logged in");
logger.logEvent("Product added to cart");
logger.logEvent("Payment processed");

// Get and display the log
const log = logger.getLog();
console.log("Event Log:");
log.forEach((entry, index) => {
  console.log(`${index + 1}. ${entry}`);
});
