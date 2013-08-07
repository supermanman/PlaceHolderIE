/*2013-08-07
version 0.0
Fix IE place holder. Who said no country for old men?
Only work with JQuery.
Use as your old risk. 
I am willing discussion.
https://github.com/supermanman/PlaceHolderIE
*/
function FixPlaceHolderIE_Input() {
    if ($.browser.msie) {
        $(":input[type='text'],:input[type='password']").each(function () {
            $(this).val($(this).attr("placeholder"));
            $(this).attr("realValue", '');

            $(this).focus(function () {
                $(this).val($(this).attr("realValue"));
            });

            $(this).focusout(function () {
                if ($(this).val() == '')
                    $(this).val($(this).attr("placeholder"));
            });

            $(this).change(function () {
                $(this).attr("realValue", $(this).val());
            });
        });

    }

}
function FixPlaceHolderIE_TextArea() {
    if ($.browser.msie) {
        $("textarea").each(function () {
            $(this).val($(this).attr("placeholder"));
            $(this).attr("realValue", '');

            $(this).focus(function () {
                $(this).html($(this).attr("realValue"));
            });

            $(this).focusout(function () {
                if ($(this).html() == '')
                    $(this).html($(this).attr("placeholder"));
            });

            $(this).change(function () {
                $(this).attr("realValue", $(this).html());
            });
        });

    }

}