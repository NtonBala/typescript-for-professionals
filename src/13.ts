function loadString() {}
function loadNumber() {}

let someLegacyVariable: unknown;

someLegacyVariable = loadString();
if (typeof someLegacyVariable === 'string') {
  console.log(someLegacyVariable.trim());
}

someLegacyVariable = loadNumber();
if (typeof someLegacyVariable === 'number') {
  console.log(someLegacyVariable.toFixed(2));
}
