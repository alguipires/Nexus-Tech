let $$ = function (id) {
    return document.getElementById(id);
}

window.onload = function () {

    function adicionaClasse() {
        $("#btn-submit").addClass("disabled");
    }

    adicionaClasse();

    $$('form-cadastra').addEventListener("submit", function (event) {
        event.preventDefault();
    });

    $$('input-name').addEventListener("invalid", function (event) {
        if ($$('input-name').validity.patternMismatch) {
            $$('input-name').setCustomValidity("preencha corretamente o nome ex: João da Silva")
        }
    });

    $$('input-telefone').addEventListener("invalid", function (event) {
        if ($$('input-telefone').validity.patternMismatch) {
            $$('input-telefone').setCustomValidity("preencha corretamente o numero ex: (42) 99999-9999")
        }
    });

    $$('input-email').addEventListener("invalid", function (event) {
        if ($$('input-email').validity.patternMismatch) {
            $$('input-email').setCustomValidity("preencha corretamente o e-mail ex: seuemail@gmail.com")
        }
    });

    $$('input-textarea').addEventListener("invalid", function (event) {
        if ($$('input-textarea').validity.patternMismatch) {
            $$('input-textarea').setCustomValidity("insira uma mensagem")
        }
    });
}

function removerClasse() {
    $("#btn-submit").removeClass("disabled");
}

$(document).ready(function () {
    $('#modal2').modal();
});

function ganhaFocus(id) {
    let text = $$(id);
    if (text.value == "Digite aqui!") {
        text.value = "";
    }

}

function perdeFocus(id) {
    let text = $$(id);
    if (text.value == "") {
        text.value = "Digite aqui!";
    }
}


let Usuario = {
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
    insereDados: function (nome, telefone, email, mensagem) {
        this.nome = nome,
            this.telefone = telefone,
            this.email = email,
            this.mensagem = mensagem;
    }
}

let usuario = Object.create(Usuario);

function salvaReclamacao() {

    usuario.insereDados(
        $$("input-name").value,
        $$("input-telefone").value,
        $$("input-email").value,
        $$("input-textarea").value
    );

    // Armazena no LocalStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));



    retornaUsuarioLocal();

    //Retira Refresh da pagina
    return false;
}

function retornaUsuarioLocal() {

    //Esconde corpo da pagina
    $('#content-page').hide();

    //Retorna Usuario da sessao
    let user = localStorage.getItem('usuario');
    let usuario = JSON.parse(user);

    $('#nome_mostrar').text(usuario.nome);

    $('#modal2').show();
}



/*
    console.log(usuario.nome);
    $$("p-name").innerHTML = usuario.nome;
    
        let nomeUser = JSON.parse(localStorage.getItem('usuario'));
        console.log(nomeUser.nome);

   $$("p-name").textContent = nomeUser.nome;*/
