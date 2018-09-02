class carro{
  passageiros:number;
  gasolina:number;
  km:number;

  embarcar():void{
    if(this.passageiros >=2){
      alert("limite de pessoas atingido");
    }else{
      this.passageiros++;
    }
  }
  sair():void{
    if(this.passageiros <= 0){
      alert("Não ah ninguem no carro");
    }else{
      this.passageiros--;
    }
  }
  abastecer(valor:number):number{
    this.gasolina+=valor;
    if(this.gasolina > 10){
      return(this.gasolina = 10);
    }else{
      return(this.gasolina);
    }
  }
  informacao():void{
    alert("pass: "+this.passageiros+"gas: "+this.gasolina+"km: "+this.km);
  }
  andar(qtd:number):number{
    if(qtd/10 > this.gasolina){
      alert("Gasolina insuficiente");
    }if(this.passageiros < 0){
      alert("Não tem passageiros");
    }else{
      return(this.km =+qtd,this.gasolina = this.gasolina - qtd/10);
    }
  }
}
//Principal

let car : carro = new carro();

  car.passageiros = 0;
  car.gasolina = 0;
  car.km = 0;

  for(; ;){
    let comandos:string = ("show - mostrar informações\n"+"emb - embarcar uma pessoa\n"+"sai - sair uma pessoa\n"+"abastecer - abastecer o carro\n"+"andar - mover o carro"); 

  let comando: string = readline.question("DIGITE UM COMANDO");
   switch(comando){
     case "show":
      alert(car.informacao());
     break;
     case "emb":
      car.embarcar();
     break;
     case "sai":
      car.sair();
     break;
     case "abastecer":
      let valor:number = readline.question("qtd para abastecer");
      car.abastecer(valor);
     break;
     case "andar":
     let num:number = readline.question("qtd para andar");
     car.andar(num);
     break;
     default:
      alert("Comando desconhecido");
     break;
   }
  }
