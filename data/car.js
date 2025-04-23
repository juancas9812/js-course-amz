class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carProperties){
    this.#brand = carProperties.brand;
    this.#model = carProperties.model;
  }

  displayInfo() {
    console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk open: ${this.isTrunkOpen}`);
  }

  go() {
    if (!this.isTrunkOpen && this.speed < 200){
      this.speed += 5;
    }
  }

  brake() {
    this.speed >= 5 ? this.speed -= 5 : this.speed = 0;
  }

  openTrunk() {
    if (this.speed === 0) {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
};

class RaceCar extends Car{
  acceleration;

  constructor(carDetails){
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    if (this.speed < 300){
      this.speed += this.acceleration;
    }
  }

  openTrunk(){
    return
  }

  closeTrunk(){
    return
  }

};

const car1 = new Car({brand: 'Toyota', model: 'Corolla'});
const car2 = new Car({brand: 'Tesla', model: 'Model 3'});
const car3 = new RaceCar({brand: 'McLaren', model:'F1', acceleration: 20});

console.log(car1);
console.log(car2);
console.log(car3);

car1.displayInfo();
car1.openTrunk();
car1.displayInfo();
car1.go();
car1.displayInfo();
car1.go();
car1.displayInfo();
car1.brake();
car1.displayInfo();
car1.closeTrunk();
car1.displayInfo();
car1.go();
car1.displayInfo();
car1.go();
car1.displayInfo();
car1.openTrunk();
car1.displayInfo();


// car2.displayInfo();
// car2.go();
// car2.go();
// car2.brake();
// car2.go();
// car2.go();
// car2.brake();
// car2.displayInfo();


car3.displayInfo();
car3.openTrunk();
car3.displayInfo();
car3.go();
car3.displayInfo();
car3.go();
car3.displayInfo();
car3.brake();
car3.displayInfo();
car3.closeTrunk();
car3.displayInfo();
car3.go();
car3.displayInfo();
car3.go();
car3.displayInfo();
car3.openTrunk();
car3.displayInfo();


