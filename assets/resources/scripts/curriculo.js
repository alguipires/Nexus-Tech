(function () {

    let $id = function (id) {
        return document.getElementById(id);
    };

    //ao carregar o dom
    window.onload = function () {

        $('#input-name').focus();

        $id('form-curriculo').addEventListener("submit", function (e) {
            e.preventDefault();
        });

    };

    //validação
    $id('input-name').addEventListener("blur", function () {
        if ($id('input-name').validity.patternMismatch){
            $id('input-name').addEventListener("invalid");
            $id('input-name').setCustomValidity("Por favor, insira um nome com inicial maiúscula e sem a inclusão de números.");
        }
    });

    $id('input-city').addEventListener("blur", function () {
        if ($id('input-city').validity.patternMismatch){
            $id('input-city').addEventListener("invalid");
            $id('input-city').setCustomValidity("Por favor, insira um nome com inicial maiúscula e sem a inclusão de números.");
        }
    });
    
    $id('input-telefone').addEventListener("blur", function () {
        if ($id('input-telefone').validity.patternMismatch){
            $id('input-telefone').addEventListener("invalid");
            $id('input-telefone').setCustomValidity("Por favor, insira um numero com 9 digitos apos o DDD");
        }
    });

    //checkbox
    // mesagem
    //radiobutton 

    //var global
    let arrayRelatorio = [];
    let arrayChecked = [];

    //chamado do onsubmit
    function envia() {
        //evento add para verificar a validação de todos os campo senão emite um alert
        $id('form-report').addEventListener("submit", function (event) {
            if (validaCamposNulos() == false) {
                window.alert("Preencha os Campos");
            } else {
                cadastra();
            }
        });
    };

    //metodos
    function removerClasseSubmit() {
        $('#btn-submit').removeClass("disabled");
    }

    function cadastra() {

        let nome = $id('input-name').value;
        let genero = $id('gender-group').value;
        let cidade = $id('input-city').value;
        let email = $id('input-email').value;
        getCheckboxArray();//array areas
        let mensagem = $id('input-mensagem').value;
    
        arrayRelatorio.push(nome, genero, cidade, email, arrayChecked, mensagem);
        //arrayRelatorio.push($id('input-name').value, $id('input-email').value, $id('input-telefone').value, $id('input-city').value, arrayChecked, $id('input-mensagem').value);
        clear();
        
        console.log(arrayRelatorio);
    };

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
    };

    //VERIFICAR
    function clear() {
        let nome = $id('input-name').value = "";
        let genero = $id('gender-group').value = "";
        let cidade = $id('input-city').value = "";
        let email = $id('input-email').value = "";
        document.querySelectorAll('checkox-areas').values = ""; //areas
        let mensagem = $id('input-mensagem').value = "";

        $('#input-name').focus();
    };

    // calsse objetos
    class Pessoa {
        constructor(nome, genero, cidade, email, areas, mensagem) {
            this.nome = nome;
            this.genero = genero;
            this.email = email;
            this.telefone = telefone;
            this.cidade = cidade;
            this.areas = areas;
            this.mensagem = mensagem;
        };
    };

})();