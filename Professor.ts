import {Funcionario} from "./Funcionario";

export class professor{
    private diaria : number;
    private classe : string;

    public constructor(diaria : number, classe : string){
        this.diaria = diaria;
        this.classe = classe;
    }
    public getClasse(): string{
      return this.classe;
    }public setClasse(classe:string):void{
      this.classe = classe;
    } public getDiaria(): number{
      return this.diaria;
    }public setDiaria(diaria:number):void{
      this.diaria = diaria;
    }
    //Métodos
    public calcSalario(classe : string,diaria:number):number{
      if( this.classe == "a"){
        let Salario = 3000 + 100 * diaria;
          return Salario;
      }else if( this.classe == "b"){
        let Salario = 5000 + 100 * diaria;
          return Salario;
      }else if( this.classe == "c"){
        let Salario = 7000 + 100 * diaria;
          return Salario;
      }else if( this.classe == "d"){
        let Salario = 9000 + 100 * diaria;
          return Salario;
      }else if( this.classe == "e"){
        let Salario = 11000 + 100 * diaria;
          return Salario;
      }
    }public iserirDiaria(diaria : number):boolean{
      if(this.diaria > 2){
        return false;
      }else{
        this.diaria = this.diaria + 1;
        return true;
      }
    }
}
