class Orixas {
  constructor(name, description, symbol, image, history) {
    this.name = name;
    this.description = description;
    this.symbol = symbol;
    this.image = image;
    this.history = history;
  }

  getFullDescription() {
    return `${this.name} - ${this.description}`;
  }
}

export default Orixas;