$(function() {

    "use strict";

    var form = $("#request_form"),
        successMessage = "You successfully registered!", // success message
        warningMessage = "Fill up the form, please!", // warning message
        errorMessage = "Something go wrong. Try again later!";  // error message

    form.on("submit", function(event) {
        event.preventDefault();

        $.ajax({
            url: "form.php",
            type: "POST",
            data: form.serialize(),
            success: function(response) {
                var data = JSON.parse(response),
                    message;

                if(data.status == 'success') {
                    message = successMessage;
                }

                if(data.status == 'warning') {
                    message = warningMessage;
                }

                if(data.status == 'error') {
                    message = errorMessage;
                }

                callAlert(message, data.status);
            },
            error: function(response) {
                callAlert(errorMessage, "error");
            }
        });
    });






    /**
    *** Show alert
    **/

    var alertTimeout,
    delay = 5000; // Delay to alert fade out

    function removeAlert() {
        clearTimeout(alertTimeout);
        alertTimeout = setTimeout(function() {
            $(".alert").stop().fadeOut(function() {
                $(this).remove();
            });
        }, delay);
    }

    function callAlert(message, type) {
        $(".alert").stop().remove();

        var alertClass;

        if(type == "success") {
            alertClass = "light-green";
        }
        if(type == "error") {
            alertClass = "red";
        }
        if(type == "warning") {
            alertClass = "orange";
        }

        var alert = '<div class="alert  alert--shadow  alert--'+ alertClass + '"><button class="alert__button" type="button"><i class="fa fa-close"></i></button>' + message + '</div>';
        $("body").append(alert);

        removeAlert();
    }


    $(function() {
        $("body").on("click", ".alert__button", function(event) {
            event.preventDefault();

            var $this = $(this),
                alert = $this.parents(".alert");

            alert.fadeOut("fast", function() {
                $(this).remove();
                clearTimeout(alertTimeout);
            });
        });
    });

});
