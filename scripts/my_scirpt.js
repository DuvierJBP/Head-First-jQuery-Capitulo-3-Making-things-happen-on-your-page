$(document).ready(function () {
    //e llama ala funcion cuando el usuario hace clic en alguna de las fotos.
    $(".guess_box").click(checkForCode);
    function getRandom(num) {
        //Generador de numeros aleatorios
        var my_num = Math.floor(Math.random() * num);
        return my_num;
    }

    //Funcion que oculta la variable de descuento.
    var hideCode = function () {
        var numRand = getRandom(4);
        $(".guess_box").each(function (index, value) {
            if (numRand == index) {
                $(this).append("<span id='has_discount'></span>");
                return false;
            }
        });
    }

    hideCode();

    function checkForCode() {
        var discount;
        if ($.contains(this, document.getElementById("has_discount"))) {
            var my_num = getRandom(100);
            discount = "<p>Your Code: CODE" + my_num + "</p>";
        } else {
            discount = "<p>Sorry, no discount this time!</p>";
        }

        $(".guess_box").each(function () {
            if ($.contains(this, document.getElementById("has_discount"))) {
                $(this).addClass("discount");
            } else {
                $(this).addClass("no_discount");
            }
            $(this).unbind();
        });
        $("#result").append(discount);
    }

    $(".guess_box").hover(
        function () {
            //Agrega la clase my_hover al div sobre el cual esta el cursor
            $(this).addClass("my_hover");
        },
        function () {
            //Elimina la clase my_hover
            $(this).removeClass("my_hover");
        });

});


