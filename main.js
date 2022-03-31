/*
Eu acabei deixando a tarefa incompleta e tive um problema com export e import 
sempre que tentava dava esse erro (from origin 'null' has been blocked by 
CORS policy: Cross origin requests are only supported for protocol schemes: 
http, data, chrome, chrome-extension, https.) :(
*/

class Agua
    {
        constructor(nome, custo, manutenção, taxaDeInfluxo, poluição, poluiçãoSonora, consumoDeEnergia){
        this.nome = 
        this.custo = 0
        this.manutenção = 0
        this.taxaDeInfluxo = 0
        this.poluição = 0
        this.poluiçãoSonora = 0
        this.consumoDeEnergia = 0
        this.conexão = false
        }
    }
    function Tubulação (conexão) {
        if (conexão == true){
            console.log("Bombeamento de água em funcionamento")
        }else {
            console.log("Bombeamento de água não está em operação")
        }
    }

    class FontesDeEnergia
    {
        constructor(nome, custo, manutenção, energia, poluição, poluiçãoSonora){
        this.nome = 
        this.custo = 0
        this.manutenção = 0
        this.energia = 0
        this.poluição = 0
        this.poluiçãoSonora = 0
        this.conexão = false
        }
    }
    function RedeDeEnergia (conexão) {
        if (conexão == true){
            console.log("Rede de Energia em Funcionamento")
        }else {
            console.log("Rede de Energia não está em operação")
        }
    }
    class Estradas
    {
        constructor(NomeEstrada,custo, manutenção, velocidade, poluição, poluiçãoSonora){
            this.nome = NomeEstrada
            this.custo = 0
            this.manutenção = 0
            this.velocidade = 0
            this.poluição = 0
            this.poluiçãoSonora = 0
            this.conexão = false
        }
    }
    class EstradasPequenas extends Estradas{
        constructor(NomeEstrada){
            super(" Estrada de Duas Faixas")
        }
    }
    class EstradasMedias extends Estradas{
        constructor(NomeEstrada){
            super(" Estrada de quatro faixas com árvore decorativa")
        }
    } 
    class EstradasGrandes extends Estradas{
        constructor(NomeEstrada){
            super(" Estrada de seis faixas de mão única")
        }
    }

    class Pedagios extends Estradas{
        constructor(NomeEstrada){
            super(" Pedágio de mão única grande")
        }
    }

    function Conexão (conexão) {
        if (conexão == true){
            console.log("Estrada em funcionamento")
        }else {
            console.log("Estrada não acessível")
        }
    }
    
    let a1=new Agua ()
    a1.nome = " Estação de bombeamento de água"
    a1.custo = 2500 
    a1.manutenção = 240
    a1.taxaDeInfluxo = 120000
    a1.poluição = 0
    a1.poluiçãoSonora = 0
    a1.consumoDeEnergia = 240
    a1.conexão = true

    let en1=new FontesDeEnergia ()
    en1.nome = "Usina de Carvão"
    en1.custo = 19000
    en1.manutenção = 560
    en1.energia = 40
    en1.poluição = 50
    en1.poluiçãoSonora = 50
    en1.conexão = false

    let ep1=new EstradasPequenas ()
    ep1.custo = 40
    ep1.manutenção = 0.32
    ep1.velocidade = 40
    ep1.conexão = true

    let em1=new EstradasMedias ()
    em1.custo = 70
    em1.manutenção = 0.96
    em1.velocidade = 50
    em1.conexão = true

    let eg1=new EstradasGrandes ()
    eg1.custo = 80
    eg1.manutenção = 0.96
    eg1.velocidade = 60
    em1.conexão = true

    let p1=new Pedagios ()
    p1.custo = 35000
    p1.manutenção = 200
    p1.poluição = 0
    p1.poluiçãoSonora = 50
    p1.conexão = false

        console.log("Informações do Sistema de abastecimento de água:", a1,) 
        console.log(Tubulação(a1.conexão))
        console.log("Informação sobre o abastecimento de Energia Elétrica:", en1)
        console.log(RedeDeEnergia(en1.conexão))
        console.log("Informação Sobre Estradas:", ep1)
        console.log(Conexão(ep1))
        console.log("Informação Sobre Estradas:",em1)
        console.log(Conexão(em1))
        console.log("Informação Sobre Estradas:",eg1)
        console.log(Conexão(eg1))
        console.log("Informação Sobre Estradas:",p1)
        console.log(Conexão(p1))
