class Person {
  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }

  apresentar() {
    console.log(`Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura.`);
  }
}

class Profissional extends Person {
  constructor(nome, idade, altura, profissao) {
    super(nome, idade, altura);
    this.profissao = profissao;
  }

  apresentar() {
    console.log(`Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura e sou ${this.profissao}.`);
  }
}

//Exemplo de uso das classes
const pessoa1 = new Person('João', 30, 1.80);
pessoa1.apresentar();

const profissional1 = new Profissional('Maria', 25, 1.70, 'engenheira');
profissional1.apresentar();