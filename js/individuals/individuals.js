document.addEventListener('DOMContentLoaded',()=>{
//Frontend-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
//Меню
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

var offset=0;
//Слайдер влево
document.querySelector('.previous_slide').addEventListener('click',()=>{
    offset+=100;
    document.querySelector('.visit_card_line').style.left = offset + "px";
})

//Слайдер вправо
document.querySelector('.next_slide').addEventListener('click',()=>{
    offset-=100;
    document.querySelector('.visit_card_line').style.left = offset + "px";
})



//Backend-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
//Загрузка данных
async function individuals_loader(){
    let status_fio = JSON.parse(JSON.stringify(await eel.status_loader()()));
    let patientObj = JSON.parse(JSON.stringify(await eel.patient_loader(status_fio.individuals_fio)()));
    document.getElementById('fio_input').innerText = patientObj.fio;
    document.getElementById('gender_input').innerText = patientObj.gender;
    document.getElementById('weight_input').innerText = patientObj.weight;
    document.getElementById('height_input').innerText = patientObj.height;
    document.getElementById('snils_input').innerText = patientObj.snils;
    document.getElementById('birthday_input').innerText = patientObj.birthday;
    document.getElementById('passport_data_input').innerText = patientObj.passport_data;
    if (patientObj.img) document.querySelector('#avatar img').src = patientObj.img;

    console.log(patientObj);
    let visitsPatientList = await eel.visits_loader(patientObj["_id"])();
    console.log(visitsPatientList);
    // document.querySelector('.visit_card_line').insertAdjacentHTML
}

individuals_loader();

//Диаграмма
window.addEventListener('afterprint', () => {
    myChart.resize(30,30);
  });


})
