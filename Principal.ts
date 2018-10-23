import {Funcionario} from "./Funcionario";
import {Terc} from "./Terc";
import {Sta} from "./STA";
import {Professor} from "./Professor";

let Funcionarios : Arraylist<Funcionarios>=[];

let opcao: string = readline.question("Escolha uma opção\n"+
"addProf - Adicionar um professor\n"+
"addSTA - Adicionar um servidor tecnico administrativo\n"+
"addTerc - Adicionar um tercerizado"+
"show - mostrar funcionario\n"+
"delete - deletar funcionario");

switch(opcao){
  case "addProf":
  let nome : string = readline.question(" Digite o nome");
  let classe : string = readline.question("Digite a classe");

  let Prof : Professor = new Professor(nome,classe,0);
    Funcionarios.push(Prof);

  break;
  case "addSTA":
  let Nome : string = readline.question(" Digite o nome");
  let nv : number = readline.question("Digite o nivel");

  let STA : Sta = new Sta(nome,nivel,0);
    Funcionarios.push(STA);

  break;
  case "addTerc":
  let n : string = readline.question(" Digite o nome");
  let horasTrabalhadas: number = readline.question("Digite horas trabalhadas");

  let terc : Terc = new Terc(nome,horasTrabalhadas,0);
    Funcionarios.push(Prof);

  break;
}
