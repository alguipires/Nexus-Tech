(function () {

    let $id = function (id) {
        return document.getElementById(id);
    };

    //ao carregar o dom
    window.onload = function () {

        $('#input-name').focus();

        (function () {
            $("#btn-submit").addClass("disabled");
        })();

        $id('form-curriculo').addEventListener("submit", function (e) {
            e.preventDefault();
        });

        //validação
        $id('input-name').addEventListener("blur", function (event) {
            if ($id('input-name').validity.patternMismatch) {
                $id('input-name').addEventListener("invalid", function (event) {
                    $id('input-name').setCustomValidity("Por favor, insira um nome com inicial maiúscula e sem a inclusão de números.");
                });
            }
        });

        $id('input-city').addEventListener("blur", function () {
            if ($id('input-city').validity.patternMismatch) {
                $id('input-city').addEventListener("invalid");
                $id('input-city').setCustomValidity("Por favor, insira um nome com inicial maiúscula e sem a inclusão de números.");
            }
        });

        $id('input-telefone').addEventListener("blur", function () {
            if ($id('input-telefone').validity.patternMismatch) {
                $id('input-telefone').addEventListener("invalid");
                $id('input-telefone').setCustomValidity("Por favor, insira um numero com 9 digitos apos o DDD");
            }
        });

        $id('input-textarea').addEventListener("focus", () => {
            window.setTimeout(() => {
                $("#btn-submit").removeClass("disabled");
            }, 1000);
        });

        $id('form-curriculo').addEventListener("submit", function (event) {
            cadastra();
            console.log("FOIII, tam array: " + arrayRelatorio.length);
            /*if (validaCamposNulos() == false) {
                window.alert("Preencha os Campos");
            } else {
                cadastra();
            }*/
        });

        //checkbox
        // mesagem
        //radiobutton

    };

    //var global
    let arrayRelatorio = [];
    //let arrayChecked = [];
    //let pessoaObj;



    //metodos

    function restauraArrayObjetos(){
        console.log("restaurando");
        let arrayRelatorio = JSON.parse(localStorage.getItem("pessoas"));
        /*if(arrayRelatorio.length > 0){
            console.log("dados encontrados");
        }else{
            console.log("array vazia ou não encontrada");
        }*/
    }

    function armazenaArrayObjetos(array){
        console.log("armazenando");
        localStorage.setItem("pessoas", JSON.stringify(array));
        console.log("armazenado sucess");
    }

    function cadastra() {
        restauraArrayObjetos();
        arrayRelatorio.push(criaObjeto());
        armazenaArrayObjetos(arrayRelatorio);

        clear();
        console.log(arrayRelatorio);
    };



    //VERIFICAR
    function getCheckboxArray() {
        let arrayChecked = [];
        let arrayAll = document.querySelectorAll('interest-group');
        console.log(arrayAll + "tam: " + arrayAll.length);
        for(let i = 0; i < arrayAll.length; i++){
            console.log("for checkbox");
            if(arrayAll[i].checked){
                arrayChecked.push(element);
                console.log("passando for eementos checkbox");
            }
        }
        /*
        arrayAll.forEach(element => {
            if (element.checked) {
                arrayChecked.push(element);
            }
            console.log("passando for eementos checkbox");
        });
        */
        console.log("array dos checked" + arrayChecked); //apagar
        return arrayChecked;
        /*//verificação se esta prenchido
        if (arrayChecked > 0) {
            return true;
        }*/
    };

    //VERIFICAR     METODO PARA GENDER 
    function getRadioValor() {
        var generosAll = document.getElementsByName('gender-group');
        generosAll.forEach(e => {
            if (e.checked) {
                return e.value;
            }
        });
    };

    //VERIFICAR
    //genero e areas
    function criaObjeto() {
        let nome = $id('input-name').value;
        let genero = document.getElementsByName('gender-group').value;
        let telefone = $id('input-telefone').value;
        let cidade = $id('input-city').value;
        let email = $id('input-email').value;
        let areas = getCheckboxArray(); //array areas
        let mensagem = $id('input-textarea').value;

        let pessoaObj = new Pessoa(nome, genero, telefone, cidade, email, areas, mensagem);

        return pessoaObj;
    }

    //VERIFICAR
    function validaCamposNulos() {
        let aux = null;
        if ($id('input-name').value == "") {
            aux = false;
        }
        /*
                if (getCheckboxArray() != true) {
                    aux = false;
                }*/
        if (aux == false) {
            return false;
        } else {
            if (aux == null) {
                return true;
            }
        }
    };

    //VERIFICAR
    function clear() {
        let nome = $id('input-name').value = "";
        let genero = document.getElementsByName('gender-group').value = "";
        let telefone = $id('input-telefone').value = "";
        let cidade = $id('input-city').value = "";
        let email = $id('input-email').value = "";
        document.querySelectorAll('checkox-areas').values = ""; //areas
        let mensagem = $id('input-textarea').value = "";

        $('#input-name').focus();
    };

    // calsse objetos
    class Pessoa {
        constructor(nome, genero, telefone, cidade, email, areas, mensagem) {
            this.nome = nome;
            this.genero = genero;
            this.telefone = telefone;
            this.cidade = cidade;
            this.email = email;
            this.areas = areas;
            this.mensagem = mensagem;
        };
    }

})();

/*
A FAZER

*genero e areas não esta recebendo dados
*VALIDAÇÃO DOS CAMPOS COM REGEX E INVALID E TEXTO
*ARRAY DE OBJETO ESTA SAINDO VAZIA 
*verificar o envio, objeto, etc      /ok
*fzer pagina de relatorio       
*fazer consulta dos objetos salvo
*/