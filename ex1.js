class Pessoa {
    connstructor(nome, idade, email){
    this.nom e = nome;
    this.idade = idade;
    this.email = email;
    }
    apresentar(){
        console.log(`Ola meu nome e ${this.nome} minha idade e ${this.idade} e meu email e ${this.email}`);
    }
    FazerAniversario(){
      this.idade =+1;
      return this.idade
    }
}