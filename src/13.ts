function loadString() {}
function loadNumber() {}

let someLegacyVariable: any;

someLegacyVariable = loadString();
console.log(someLegacyVariable.trim());

someLegacyVariable = loadNumber();
console.log(someLegacyVariable.toFixed(2));
