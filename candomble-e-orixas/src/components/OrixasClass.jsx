class OrixasClass {
  constructor(id, name, description, symbol, odu, day, color, food, image, history) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.symbol = symbol;
    this.odu = odu;
    this.day = day;
    this.color = color;
    this.food = food;
    this.image = image;
    this.history = history;
  }

  getFullDescription() {
    return `${this.name} - ${this.description}`;
  }

}
// Esse componente é uma classe que define os atributos e métodos de um orixá. Criei essa classe para organizar o código e facilitar a manutenção do projeto. Mantendo a organização do código. Ele somente cria a classe que vai ser usada para criar os orixás, e exporta a classe para ser usada em outros componentes.
export default OrixasClass;