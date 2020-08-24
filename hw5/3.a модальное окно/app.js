// 1. получить объект модального окна с классом .wrap
let modal = document.getElementsByClassName('wrap')[0];
// 2. получить тег span, используемый для закрытия окна
let closeWindow = document.getElementsByTagName('span')[0];
// 3. получить кнопку, используемую для показа модального окна
let buttonShowModal = document.getElementsByTagName('button')[0];

// 4. назначить обработку клика на кнопку показа модального окна
// когда функция обработчик срабатывает она должна у модального
// окна удалять класс hidden
buttonShowModal.addEventListener('click', function () {
    modal.classList.toggle('hidden');
});

// 5. назначить обработку клика на тег span, при клике
// в обработчике модальному окну должен быть добавлен
// класс hidden
closeWindow.addEventListener('click', function () {
    modal.classList.toggle('hidden');
})