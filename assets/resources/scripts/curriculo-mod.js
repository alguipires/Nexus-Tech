(function () {
    let $ = function (id) {
        return document.getElementById(id);
    }

    var Relatorio = function (nome, genero, telefone, cidade, email, areas, mensagem) {
        this.nome = nome;
        this.genero = genero;
        this.telefone = telefone;
        this.cidade = cidade;
        this.email = email;
        this.areas = areas;
        this.mensagem = mensagem;
    }

    // funcoes de validações do onsubmit...
    var relatorio;
    $('form-curriculo').onsubmit = function() {
        if (validaGenero() && verificaAreas()){
            relatorio = new Relatorio (getNome(), getGenero(), getTelefone(), getCidade(), getEmail(), getAreas(), getMensagem());
        } else {
            return false;
        }        
        imprimeCurriculo();

        return false;
    }

    function validaGenero () {
        let elems = document.getElementsByName('gender-group');
        for (i in elems) {
            if (elems[i].checked) {
                return true;
            }
        }
        alert('O genero não foi selecionado, favor selecione um!');
        return false;
    }

    function verificaAreas () {
        let elems = document.getElementsByName('interest-group');
        for (i in elems) {
            if (elems[i].checked) {
                return true;
            }
        }
        alert('Nenhuma area foi selecionada, favor selecione uma!');
        return false;
    }


    // Funções get para coletar os dados inseridos e então adicionar ao objeto...
    function getNome() {
        return $('input-name').value;
    }

    function getGenero () {
        if ($('input-gender-masculine').checked) {
            return "Masculino";
        }
        if ($('input-gender-feminine').checked) {
            return "Feminino";
        }
    }

    function getTelefone () {
        return $('input-telefone').value;
    }

    function getCidade () {
        return $('input-city').value;
    }
    function getEmail () {
        return $('input-email').value;
    }
    function getEmail () {
        return $('input-email').value;
    }
    function getMensagem () {
        return $('input-textarea').value;
    }


    function getAreas () {
        let areas = [];
        let elems = document.getElementsByName('interest-group');
        let cont = 0;

        for (i in elems) {
            if (elems[i].checked) {
                if (cont > 0)
                    areas[cont] = " " + elems[i].value ;
                else
                    areas[cont] = elems[i].value ;
                cont++;
            }
        }
        
        return areas;
    }

    // Função para mostrar os valores do objeto...

    function imprimeCurriculo(){
        $('span-name').innerHTML = relatorio.nome;
        
        if(relatorio.genero == "Masculino"){
            $('span-genre').innerHTML = 'Ele';
        } else if (relatorio.genero == "Feminino") {
            $('span-genre').innerHTML = 'Ela';
        }

        $('span-phone').innerHTML = relatorio.telefone;
        $('span-city').innerHTML = relatorio.cidade;
        $('span-email').innerHTML = relatorio.email;
        $('span-areas').innerHTML = relatorio.areas;
        $('span-msg').innerHTML = relatorio.mensagem;

        let dataEnvio = new Date;
        $('span-now-date').innerHTML = `${ dataEnvio.getDate() }/${ dataEnvio.getMonth() }/${ dataEnvio.getFullYear() }`;

        $('span-now-hour').innerHTML = `${ dataEnvio.getHours() }:${ dataEnvio.getMinutes() }`;
    }

    function mudaFormatoDaData (date) {
        let novaData = []; 
        novaData = date.split('-');
        return `${ novaData[2] }/${ novaData[1] }/${ novaData[0] }`;
    }

})();