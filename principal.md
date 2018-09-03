//Principal
import{Carro} from './carro';

let car : Carro = new Carro();

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
