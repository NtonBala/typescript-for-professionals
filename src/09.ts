// Classes

class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public move(distanceInMeters: number): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

let cat = new Animal('Cat');
cat.move(10);

class Bird extends Animal {
  fly(distanceInMeters: number) {
    console.log(`${this.name} flew ${distanceInMeters}m.`);
  }
}

class Vehicle {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  move(distanceInKm: number) {
    console.log(`${this.#name} moved ${distanceInKm}`);
  }
}
