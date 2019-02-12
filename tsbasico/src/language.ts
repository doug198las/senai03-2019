export class Language {
    /* Variaveis a nivel de class
    TypeScript possui apenas 4 tipos de dados */
    private minhaVarBoolean     : boolean = false;
    private minhaVarString      : string = '';
    private minhaVarNumber      : number = 0;  // O tipo number aceita tanto números inteiros com números com casas decimais.
    private minhaVarAny         : any = null;  // Quando você não sabe o tipo de dado que vai armazenar você usa o tipo any.
    public  variavelPublica     : string = '';
    protected variavelProtegida : string = '';
  
    // Existem duas formas de declarar um array
    private arrayPrivado : Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    private outroArrayPrivado : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    /**-----------------------------------------------------------------------------------------------------------
       Construtor, é executado quando a classe é criada
       Diferente de linguagens como C++, Delphi, Object Pascal em TypeScript não existe um destructor.
       Geralmente linguagens que usam Garbage Colector não possuem um método destructor.
  
       Você pode usar o constructor para preparar as coisas para sua classe funcionar
       Obs: Se você não precisa fazer nada no constructor, não precisa declara-lo ;)
    ------------------------------------------------------------------------------------------------------------*/
    constructor(){
      console.log('Passou pelo constructor');
    }
  
    /**-----------------------------------------------------------------------------------------------------------
      Type script possui tres modificadores de acesso para variáveis e para métodos
  
      * public    - Se você não declarar o modificador de acesso, por padrao ela será public
      * private   - Métodos e variáveis privadas somente podem ser acessados pela própria classe
      * protected - Métodos protegidos, podem ser acessados pela própria classe e por seus descendentes
    ------------------------------------------------------------------------------------------------------------*/
  
    // Métodos estaticos só podem ser executados a partir da classe e não do objeto dela.
    static execute(){
      console.log('Passou pelo execute');
      new Language().run();
    }

    // Método publico e sem nenhum tipo de retorno
    public run() : void{
      console.log('Main method passed');
      
      /*
         Você deve usar a palavra reservada this para acessar os membros da classe.
         Podem ser variaveis da classe ou métodos da classe.
  
         Obs: Sempre que você chamar um método nunca esqueça de colocar os parenteses no final
         mesmo que o método não tenha parametros.
      */
      this.metodoProtejidoComRetornoOpcional();
    }
  
    // Método publico sem retorno definido, mas diferente do método acima,
    // é possivel retornar ou não alguma informação e o retorno de ser de
    // qualquer tipo
    metodoPublicoSemRetornoDefinido(){
      /*
        Operadores de comparação
        <   - Menor
        >   - Maior
        <=  - Menor ou Igual
        >=  - Maior ou Igual
        !=  - Diferente         (Apenas o valor é diferente o tipo não importa)
        ==  - Igual             (Apenas o valor é avaliado o tipo não importa)
        === - Igual literal     (O valor e o tipo de dados devem ser igual)
        !== - Diferente literal (O valor ou tipo de dados não são iguais)
      */
      if (this.minhaVarString === this.variavelPublica){
        return true;
      } else {
        return false;
      }
    }
  
    //Método publico com retorno de informação do tipo boolean.
    //Obrigatoriamente deve ser retornado alguma informação e deve ser do tipo boolean.
    metodoPublicoComRetorno() : boolean {
      // Dessa forma você pode declarar uma variável.
      let achouNumeroSete : boolean = false;
  
      // Quando é usado o forEach para percorrer um Array não é possivel usar a palavra
      // chave break. Ou seja todos os elementos do array serão percorridos.
      this.arrayPrivado.forEach(element => {
        if (element === 7){
          achouNumeroSete = true;
        }
      });
  
      return achouNumeroSete;
    }
  
    // Método privado com retorno do tipo boolean
    private metodoPrivadoComRetorno() : boolean {
      let achouNumeroQuatro : boolean = false;
  
      // Em termos de performace não existe diferença entre usar o método forEach
      // ou um for normal. A única diferença é que com um loop normal é possivel usar
      // o break como no exemplo abaixo.
      for (let i = 0; i < this.outroArrayPrivado.length; i++){
        if (this.outroArrayPrivado[i] === 4){
          achouNumeroQuatro = true;
          break;
        }
      }
  
      return achouNumeroQuatro;
    }
  
    // Metodo privado que não retorna nada
    private metodoPrivadoSemRetorno() : void {
  
    }
  
    //Metodo protegido com retorno opcional
    protected metodoProtejidoComRetornoOpcional(){
      console.log('metodoProtejidoComRetornoOpcional');
    }
  }