$('.burger').click(function(){
    $('.exit_burger div').css("background-color","transparent");
    $('.exit_burger div').removeClass('pas'); 
    $('.exit_burger div').removeClass('active');
    $('.burger_block').addClass('active');
    $('.menu_block').addClass('active');
});

$('.exit_burger').click(function(){

    $('.exit_burger div').addClass('active');
    setTimeout(()=>{
        $('.burger_block').removeClass('active');
    },500)
    setTimeout(()=>{
        $('.exit_burger div').css("background-color","rgb(230,230,230)");
        $('.exit_burger div').addClass('pas');
    },500)
    setTimeout(()=>{
        $('.menu_block').removeClass('active');
    },800)
});
