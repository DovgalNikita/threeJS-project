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



//Backend-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

/////////////////////////
    function patientsClear(){
        let current_recordsArr = document.querySelectorAll(".records_block .record");
        for (record of current_recordsArr){
            record.remove();
        }
    }



/////////////////////////
    async function patientsLoading(){
        let records_block = document.querySelector(".records_block");
        let patientsArr = JSON.parse(JSON.stringify(await eel.patients_loader()()));
        let index=0;

        patientsClear();

        patientsArr.forEach(e => {
            index++;
            records_block.insertAdjacentHTML('beforeend', `
                <div class="record">
                    <div class="number_record">${index}</div>
                    <div class="fio_block">
                        <div class="caption">ФИО:</div>
                        <div class="value">${e.fio}</div>
                    </div>
                    <div class="birthday_block">
                        <div class="caption">Дата рождения:</div>
                        <div class="value">${e.birthday}</div>
                    </div> 
                    <div class="gender_block">
                        <div class="caption">Пол:</div>
                        <div class="value">${e.gender}</div>
                    </div>
                    <div class="passport_block">
                        <div class="caption">Паспорт:</div>
                        <div class="value">${e.passport_data}</div>
                    </div>
                    <div class="manipulate_block">
                        <div class="enter"></div>
                        <div class="change"></div>
                        <div class="delete"></div>
                    </div>
                </div>`
            )
        });
    };
    patientsLoading();


///////////////////////// 
    document.querySelector('.search_bar input').addEventListener('input', async function(){
        patientsClear();
        let records_block = document.querySelector(".records_block");
        let patietnsArr = JSON.parse(JSON.stringify(await eel.patients_loader()()));
        let input_value = document.querySelector('.search_bar input').value;
        let index=0;

        patietnsArr.forEach(e => {
            if (String(e.fio).includes(input_value)){
                index++;
                records_block.insertAdjacentHTML('beforeend', `
                    <div class="record">
                        <div class="number_record">${index}</div>
                        <div class="fio_block">
                            <div class="caption">ФИО:</div>
                            <div class="value">${e.fio}</div>
                        </div>
                        <div class="birthday_block">
                            <div class="caption">Дата рождения:</div>
                            <div class="value">${e.birthday}</div>
                        </div> 
                        <div class="gender_block">
                            <div class="caption">Пол:</div>
                            <div class="value">${e.gender}</div>
                        </div>
                        <div class="passport_block">
                            <div class="caption">Паспорт:</div>
                            <div class="value">${e.passport_data}</div>
                        </div>
                        <div class="manipulate_block">
                            <div class="enter"></div>
                            <div class="change"></div>
                            <div class="delete"></div>
                        </div>
                    </div>`
            )
            }
        });
    }) 

///////////////////////// Переход на страницу "Личное дело"
document.addEventListener('click', async function(e){
    if (e.target.classList.contains('enter')){
        let individuals_fio = e.target.parentNode.parentNode.querySelector('.fio_block .value').innerText;
        console.log(individuals_fio);
        console.log(await eel.status_update(individuals_fio)());
        window.location.href = 'individuals.html';
    }
})

///////////////////////// Подгрузка аватара
document.addEventListener('click', async function(e){
    let patientObj;
    if (e.target.parentNode.classList.contains('fio_block') && e.target.innerText!="ФИО:"){
        patientObj = await eel.patient_loader(e.target.innerText)();
    }
    
    document.querySelector('.avatar_fio_block .value').innerText = patientObj.fio;
    document.querySelector('.birthday_block .value').innerText = patientObj.birthday;
    document.querySelector('.gender_block .value').innerText = patientObj.gender;
    document.querySelector('.passport_block .value').innerText = patientObj.passport_data;
    document.querySelector('.avatar_person').src = patientObj.img;
})


})
 