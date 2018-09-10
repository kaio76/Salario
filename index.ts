
import{Carro} from './carro';
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

