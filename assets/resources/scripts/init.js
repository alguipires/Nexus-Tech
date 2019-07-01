(function ($) {
    $(function () {
        $("#menu").load("menu.html");
        $("#footer").load("footer.html");
        //$(".dropdown-trigger").dropdown();  // ja esta sendo carregado no menu.html com uma tag <script>
        $('.parallax').parallax();

        //inicialização carousel secundario logos
        $('.carousel').carousel();

        //inicialização carousel principal superior
        $('.carousel.carousel-slider').carousel({
            fullWidth: true,
            indicators: true
        });             

        //set inteval
        window.setInterval(function () {
            $('.carousel').carousel('next', 1);
        }, 4000);

        /*
        $('#modal1').modal();
        $('#modal1').modal('open');*/

        $("#input-telefone").mask('(00) 00000-0000', {
            reverse: false
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space


function mudaCorIconOver(id) {
    $("#" + id).removeClass("grey-text");
    $("#" + id).addClass("light-green-text darken-1");
}

function mudaCorIconOut(id) {
    $("#" + id).removeClass("light-green-text darken-1");
    $("#" + id).addClass("grey-text");
}

