(function () {
    let $id = function (id) {
        return document.getElementById(id);
    };
    let relatorioLista = [];

    window.onload = function () {
        console.log("restaurando");
        relatorioLista = JSON.parse(localStorage.getItem("pessoas"));

    };

    let flecha = () => {
        for (let i = 0; i < relatorioLista.length; i++) {
            let pessoas = relatorioLista[i];
            $id('relatorios-curriculo').innerHTML = `
    <div class="container about">
    <div class="col s12 flow-text">
        <p>
            Nome: <span id="span-name">${pessoas.nome}</span> <span id="span-genre">${pessoas.genero}</span>
            Telefone: <span id="span-numero">${pessoas.telefone}</span> Cidade: <span id="span-city">${pessoas.cidade}</span>
            E-mail: <span id="span-email">${pessoas.email}</span>
        </p>
        <p>
            Área de interesse: <span id="span-areas">${pessoas.areas}</span>
        </p>
        <p>
            Mensagem: <span id="span-msg">${pessoas.mensagem}</span>
        </p>
    </div>
</div>
    `;
        }
    };
    flecha();

})();
/*
terminar relatorio
fazer metodo da array list de areas

*/