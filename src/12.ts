// any and unknown

let exampleAny: any;
let exampleUnknown: unknown;

// any
exampleAny = 123;
exampleAny = 'Hello';

exampleAny.allows.anything.you.can.imaging(); // Each member is of type any
let anySetBool: boolean = exampleAny; // any can be assigned to any type
