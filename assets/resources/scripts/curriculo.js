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
                if (validaCamposAll()) {
                    $("#btn-submit").removeClass("disabled");
                }
            }, 2000);
        });

        $id('form-curriculo').addEventListener("submit", function (event) {
            if (validaCamposAll()) {
                cadastra();
                console.log("validação dos campos: " + validaCamposAll());
            } else {
                window.alert("Preencha os Campos");
                console.log("validação dos campos: " + validaCamposAll());
            }
        });
    };


    //VAR GLOBAL
    let arrayRelatorio = [];

    //VALIDAÇÃO
    function validaGenero() {
        let elems = document.getElementsByName('gender-group');
        for (i in elems) {
            if (elems[i].checked) {
                return true;
            }
        }
        //alert('O genero não foi selecionado, favor selecione um!');
        return false;
    };

    function validaAreas() {
        let elems = document.getElementsByName('interest-group');
        for (i in elems) {
            if (elems[i].checked) {
                return true;
            }
        }
        // alert('Nenhuma area foi selecionada, favor selecione uma!');
        return false;
    };

    function validaCamposAll() {
        let aux = null;

        aux = validaAreas();
        aux = validaGenero();

        if ($id('input-name').value == "") {
            aux = false;
        }
        if ($id('input-telefone').value == "") {
            aux = false;
        }
        if ($id('input-city').value == "") {
            aux = false;
        }
        if ($id('input-email').value == "") {
            aux = false;
        }
        if ($id('input-textarea').value == "") {
            aux = false;
        }

        return aux;
    };

    //METODOS
    function restauraArrayObjetos() {
        console.log("restaurando");
        arrayRelatorio = new Array ();
        arrayRelatorio = JSON.parse(localStorage.getItem("pessoas"));
        console.log(typeof arrayRelatorio);
        if (arrayRelatorio == null) { // Caso não haja conteúdo, iniciamos um vetor vazio
            arrayRelatorio = [];
        }
    };

    function armazenaArrayObjetos(array) {
        console.log("armazenando");
        localStorage.setItem("pessoas", JSON.stringify(array));
        console.log("armazenado com sucesso");
    };

    function cadastra() {
        restauraArrayObjetos();
        arrayRelatorio.push(criaObjeto());
        armazenaArrayObjetos(arrayRelatorio);
        //clear();
        console.log(arrayRelatorio);
    };

    function getAreas() {
        let areas = [];
        let elems = document.getElementsByName('interest-group');
        let cont = 0;

        for (i in elems) {
            if (elems[i].checked) {
                /*if (cont > 0)
                    areas[cont] = " " + elems[i].value;
                else*/
                    areas[cont] = elems[i].value;
                cont++;
            }
        }

        return areas;
    };

    function getGenero() {
        if ($('input-gender-masculine').checked) {
            return "Masculino";
        }
        if ($('input-gender-feminine').checked) {
            return "Feminino";
        }
    };

    //VERIFICAR
    function criaObjeto() {
        let nome = $id('input-name').value;
        let genero = getGenero();
        let telefone = $id('input-telefone').value;
        let cidade = $id('input-city').value;
        let email = $id('input-email').value;
        let areas = getAreas();
        let mensagem = $id('input-textarea').value;

        let pessoaObj = new Pessoa(nome, genero, telefone, cidade, email, areas, mensagem);

        console.log(pessoaObj);

        return pessoaObj;
    };

    //VERIFICAR
    /*function clear() {
        let nome = $id('input-name').value = "";
        let genero = document.getElementsByName('gender-group').value = "";
        let telefone = $id('input-telefone').value = "";
        let cidade = $id('input-city').value = "";
        let email = $id('input-email').value = "";
        document.querySelectorAll('checkox-areas').values = ""; //areas
        let mensagem = $id('input-textarea').value = "";

        $('#input-name').focus();
    };*/

    //CLASSES OBJETOS
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

*genero e areas não esta recebendo dados  ok
*VALIDAÇÃO DOS CAMPOS COM REGEX E INVALID E TEXTO
*ARRAY DE OBJETO ESTA SAINDO VAZIA  ok
*verificar o envio, objeto, etc      /ok
*fzer pagina de relatorio       ok
*fazer consulta dos objetos salvo ok
*/