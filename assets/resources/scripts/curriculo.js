(function () {

    var $id = function (id) {
        return document.getElementById(id);
    };

    //ao carregar o dom
    window.onload = function () {

        $('#input-name').focus();

        $id('form-curriculo').addEventListener("submit", function (event) {
            event.preventDefault();
        });

    };

    //validação
    $id('input-name').addEventListener("invalid", function () {
        if ($id('input-name').validity.patternMismatch) {
            $id('input-name').setCustomValidity("Por favor, insira um nome com inicial maiúscula e sem a inclusão de números.");
        }
    });

    $id('input-city').addEventListener("invalid", function () {
        if ($id('input-city').validity.patternMismatch) {
            $id('input-city').setCustomValidity("Por favor, insira um nome com inicial maiúscula e sem a inclusão de números.");
        }
    });

    ///colocar tye number no input numero
    $id('input-telefone').addEventListener("invalid", function () {
        if ($id('input-telefone').validity.patternMismatch) {
            $id('input-telefone').setCustomValidity("Por favor, insira um numero com 9 digitos apos o DDD.");
        }
    });

    //checkbox
    // mesagem

    //var global
    var arrayRelatorio = [];
    let arrayChecked = [];

    //evento add para verificar a validação de todos os campo senão emite um alert
    $id('form-report').addEventListener("submit", function (event) {
        if (validaCamposNulos() == false) {
            window.alert("Preencha os Campos");
        } else {
            cadastra();
        }
    });

    //metodos

    function cadastra() {

        getCheckboxArray();
        arrayRelatorio.push($id('input-name').value, $id('input-email').value, $id('input-name').telefone, $id('input-name').cidade, arrayChecked, $id('input-mensagem').value);
        clear();
        atualizaValores();
    }

    function getCheckboxArray() {
        let arrayAll = document.querySelectorAll('checkox-areas');
        arrayAll.forEach(element => {
            if (element.checked === true) {
                arrayChecked.push(element);
            }
        });
        console.log(arrayChecked); //apagar

        if (arrayChecked > 0) {
            return true;
        }
    };

    //VERIFICAR
    function validaCamposNulos() {
        let aux = null;
        if ($id('input-name').value == "") {
            aux = false;
        }
        if (getCheckboxArray != true) {
            aux = false;
        }
        if (aux == false) {
            return false;
        } else {
            if (aux == null) {
                return true;
            }
        }
    }

    //VERIFICAR
    function clear() {
        $id('input-name').value = "";
        document.getElementsByName('gender-group').value = "";
        /*$id('input-input-gender-masculine').value = "";
        $id('input-gender-feminine').value = "";*/
        document.querySelectorAll('symptom-group').value = "";
        $('#input-name').focus();
    }

    // calsse objetos
    class Pessoa {
        constructor(nome, email, telefone, cidade, areas, mensagem) {
            this.nome = nome;
            this.email = email;
            this.telefone = telefone;
            this.cidade = cidade;
            this.areas = areas;
            this.mensagem = mensagem;
        }
    }

})();