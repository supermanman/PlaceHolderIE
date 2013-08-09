/*2013-08-09
version 0.3
Fix IE place holder. Who said no country for old men?
Only work with JQuery.
Use as your old risk. 
I am open for discussion.
https://github.com/supermanman/PlaceHolderIE
*/
function FixPlaceHolderIE() {
    FixPlaceHolderIE_Input();
    FixPlaceHolderIE_TextArea();
}
function FixPlaceHolderIE_Input() {
    if ($.browser.msie) {
        $(":input[type='text'],:input[type='password']").each(function () {
            if ($(this).val() == '') {
                $(this).val($(this).attr("placeholder"));
                $(this).attr("realValue", '');
                if ($(this).attr("type").toLowerCase() == 'password') {
                    $(this).attr("isPassword",'1');
                    $(this).attr("type", 'text');
                }
                else $(this).attr("isPassword", '0');
            }
            else $(this).attr("realValue", $(this).val());

            $(this).focus(function () {
                $(this).val($(this).attr("realValue"));
                if ($(this).attr("isPassword")==true) 
                    $(this).attr("type", 'password');
            });

            $(this).focusout(function () {
                if ($(this).val() == '') {
                    $(this).val($(this).attr("placeholder"));
                    if ($(this).attr("isPassword")=='1')
                        $(this).attr("type", 'text');
                }
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