// Functions

function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log('LOG:', message);
}

function sum(...values: number[]) {
  return values.reduce((previous, current) => {
    return previous + current;
  });
}
