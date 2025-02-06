// Functions

function log(message: string): void {
  console.log('LOG:', message);
}

function sum(...values: number[]) {
  return values.reduce((previous, current) => {
    return previous + current;
  });
}

// First class functions
let add: (a: number, b: number) => number;

add = function (a: number, b: number): number {
  return a + b;
};
