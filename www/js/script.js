// This is a JavaScript file
$(function() {

$('#add-button').click(
    function(){
        var count = $('li').length;
        if(count < 5){
            $('ul').append("<li class=\"animated fadeInUp\"><i class=\"material-icons prefix\">#</i><input id=\"icon_prefix\" type=\"text\" class=\"validate\" placeholder=\"タグ名\"></br></li>");
        }
        if(count > 3){
            $('#add-button').css('display','none');
        }
    });
})

    