export class Bird {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  fly() {
    console.log(`${this.name} ${this.sound} 비행중`);
  }
}

export class Eagle extends Bird {
  constructor(name, sound, prey) {
    super(name, sound);
    this.prey = prey;
  }
  hunt() {
    console.log(`${this.name} ${this.prey} 사냥중`);
  }
}
