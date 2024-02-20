// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.

// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

// 5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.

// 6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

// 7. При разработке используйте Bootstrap для стилизации элементов.

let subject = `[
    {
      "id": 1,
      "subject": "Algebra",
      "time": "12:30 - 13:30",
      "current_count": 24,
      "max_count": 25
    },
    {
      "id": 2,
      "subject": "Geometry",
      "time": "10:00 - 11:00",
      "current_count": 23,
      "max_count": 25
    },
    {
      "id": 3,
      "subject": "History",
      "time": "08:45 - 09:45",
      "current_count": 10,
      "max_count": 25
    },
    {
      "id": 4,
      "subject": "Physics",
      "time": "14:00 - 15:00",
      "current_count": 13,
      "max_count": 25
    },
    {
      "id": 5,
      "subject": "Chemistry",
      "time": "11:15 - 12:15",
      "current_count": 25,
      "max_count": 25
    },
    {
      "id": 6,
      "subject": "Biology",
      "time": "15:30 - 16:30",
      "current_count": 20,
      "max_count": 25
    }
  ]`


const timetable = JSON.parse(subject)
console.log(timetable)


function renderWorkoutSchedule() {
    const scheduleBox = document.querySelector('.schedule-box');

    timetable.forEach(d => {
        scheduleBox.insertAdjacentHTML('beforeend', `
                <tr>
                    <td>${d.subject}</td>
                    <td>${d.time}</td>
                    <td data-id = "${d.id}"><span>${d.current_count}</span></td>
                    <td>${d.max_count}</td>
                    <td><button class="button-submit" id = "${d.id}">Записаться</button></td>
                    <td><button class="button-disable" data-id="${d.subject}">Отменить запись</button></td>
                </tr>
        `)
        if (Number(d.max_count) === Number(d.current_count)) {
            const submitButton = document.getElementById(`${d.id}`);
            submitButton.setAttribute('disabled', '');
        }
    });
}
renderWorkoutSchedule(timetable);


const scheduleBox = document.querySelector('.schedule-box');

scheduleBox.addEventListener('click', function (e) {
    if (e.target.classList.contains('button-submit')) {
        timetable[e.target.id - 1].current_count = Number(timetable[e.target.id - 1].current_count) + 1;
        const currentNumberOfParticipants = document.querySelector(`[data-id="${e.target.id}"]`);
        const span = currentNumberOfParticipants.querySelector('span');
        span.textContent = timetable[e.target.id - 1].current_count;

        const currentSubmitButton = document.getElementById(`${e.target.id}`);
        if(timetable[e.target.id-1].current_count === timetable[e.target.id-1].max_count){
            currentSubmitButton.setAttribute('disabled', '');
        }else{
            currentSubmitButton.removeAttribute('disabled');
        }
    }
    if (e.target.classList.contains('button-disable')) {
        let currentWorkouts = timetable.filter(d => d.subject === e.target.dataset.id);
        console.log(currentWorkouts)
        let index = Number(currentWorkouts[0].id) - 1;
        console.log(index)
        timetable[index].current_count = timetable[index].current_count - 1;
        console.log(timetable[index].current_count)
        const currentNumber = document.querySelector(`[data-id="${index + 1}"]`);
        const span = currentNumber.querySelector('span');
        span.textContent = timetable[index].current_count;

        const disableButton = document.querySelector(`[data-id="${e.target.subject}"]`);
        if (Number(timetable[index].current_count) <= 0) {
            disableButton.setAttribute('disabled', '')
        }else{
           disableButton.previousElementSibling.removeAttribute('disabled'); 
        }
    
        
    }
});
