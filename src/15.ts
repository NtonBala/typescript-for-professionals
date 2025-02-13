// Type assertions
function load(): unknown {
  return 'Hello world';
}

let helloMessage = load();

// Main syntax:
// const trimmed = (helloMessage as string).trim();

// Additional syntax:
// const trimmed = (<string>helloMessage).trim();

// Ideal approach:
if (typeof helloMessage === 'string') {
  const trimmed = helloMessage.trim();
}
