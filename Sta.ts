import {Funcionario} from "./Funcionario";
export class Sta{
  
  private nivel : number;

  public constructor( nivel:number){
    super(nome, diaria);
    this.nivel = nivel;
  }
  public getNivel():number{
    return this.nivel;
  }public setNivel(nivel:number):void{
    this.nivel = nivel;
  }
  //metodos
  public inserirNivel(nivel:number):boolean{
    
      this.nivel = nv;
      return true;
  }public iserirDiaria(diaria : number):boolean{
      if(this.diaria > 1){
        return false;
      }else{
        this.diaria = this.diaria + 1;
        return true;
      }
    }public calcSalario(nv : number,diaria:number):number{
      let salario:number = 3000 + 300 * nv + 100 * diaria;
      return salario; 
    }

  }
