/*2013-08-07
version 0.1
Fix IE place holder. Who said no country for old men?
Only work with JQuery.
Use as your old risk. 
I am willing discussion.
https://github.com/supermanman/PlaceHolderIE
*/
function FixPlaceHolderIE_Input() {
    if ($.browser.msie) {
        $(":input[type='text'],:input[type='password']").each(function () {
            if ($(this).val() == '') {
                $(this).val($(this).attr("placeholder"));
                $(this).attr("realValue",'');
            }
            else $(this).attr("realValue", $(this).val());

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
            
            //Put real value back when submit.
            var parentForm = $(this).closest("form");

            parentForm.submit(function () {
                $(this).val($(this).attr("realValue"));           
            });
        });

    }

}
function FixPlaceHolderIE_TextArea() {
    if ($.browser.msie) {
        $("textarea").each(function () {
            if ($(this).html() == '') {
                $(this).html($(this).attr("placeholder"));
                $(this).attr("realValue", '');
            }
            else $(this).attr("realValue", $(this).html());
            
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
            
            //Put real value back when submit.
            var parentForm = $(this).closest("form");
            parentForm.submit(function () {
                $(this).html($(this).attr("realValue"));
            });

        });

    }

}