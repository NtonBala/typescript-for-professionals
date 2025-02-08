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

class NumberQueue extends Queue {
  push(item: number) {
    super.push(item);
  }
  pop(): number {
    return super.pop();
  }
}

const queue = new NumberQueue();
queue.push(123);
queue.push(456);

console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1));
