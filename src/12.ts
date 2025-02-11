// any and unknown

let exampleAny: any;
let exampleUnknown: unknown;

// any
exampleAny = 123;
exampleAny = 'Hello';

exampleAny.allows.anything.you.can.imaging(); // Each member is of type any
let anySetBool: boolean = exampleAny; // any can be assigned to any type

// unknown
exampleUnknown = 123;
exampleUnknown = 'World';

if (typeof exampleUnknown === 'string') {
  exampleUnknown.trim();
}
if (typeof exampleUnknown === 'boolean') {
  let unknownSetBool: boolean = exampleUnknown;
}
