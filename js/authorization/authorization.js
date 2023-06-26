document.addEventListener('DOMContentLoaded', ()=>{
    $('.switcher').click(function(){
        $('.switcher').toggleClass('active');
        $('.switcher span').toggleClass('active');
    })

    $('button').click(async function(){
        if (Number(await eel.usersAuthCheck(document.querySelector('.inputBox-login input').value, document.querySelector('.inputBox-password input').value)())) {
            alert("Вы успешно авторизованы");
            window.location.href="diagnostic.html";
        }
        else {
            alert("Введен неправильный логин или пароль");
        }
    })
})

