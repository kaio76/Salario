import {Funcionario} from "./Funcionario";
export class Sta{
  private diaria : number;
  private nivel : number;

  public constructor(diaria:number, nivel:number){
    this.diaria = diaria;
    this.nivel = nivel;
  }
  public getDiaria():number{
    return this.diaria;
  }public setDiaria(diaria:number):void{
    this.diaria = diaria;
  }public getNivel():number{
    return this.nivel;
  }public setNivel(nivel:number):void{
    this.nivel = nivel;
  }
  //metodos
  public inserirNivel(nivel:number):boolean{
    let nv : number = readline.question("Digite o nivel");
      this.nivel = nv;
      return true;
  }public inserirDiaria(): bolean{
    if
  }
}
