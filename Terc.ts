import {Funcionario} from "./Funcionario";

export class Terc{
    
    private horasTrabalhadas: number;

    public constructor( horasTrabalhadas: number){
        super(nome, diaria);
        this.horasTrabalhadas = horasTrabalhadas;
    }
    public getHorasTrabalhadas():number{
      return this.horasTrabalhadas;
    }public setHorasTrabalhadas(horasTrabalhadas:number):void{
      this.horasTrabalhadas = horasTrabalhadas;
    }

  public insalubre():boolean{
  let insal : number = readline.question("digite  se insalubre\n digite 2 se não for insalubre");
  if (insal == 2){
    insal = 0;
    return false;

  }if(insal == 1){
    insal = 500;
    return true;
  }
  }public InserirHorasTrab():void{
    
    }public calcSalario(insal:number, ):number{
      let salario:number = 4 * this.horasTrabalhadas + insal ;
      return salario; 
    }

  }
