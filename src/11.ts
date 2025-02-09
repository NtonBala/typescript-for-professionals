// Generics

// A FIFO collection:
class Queue {
  data: any[] = [];

  push(item: any) {
    this.data.push(item);
  }
  pop(): any {
    return this.data.shift();
  }
}

const queue = new Queue();
queue.push(123);
queue.push('Hellos world');

console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1)); // Runtime Error
