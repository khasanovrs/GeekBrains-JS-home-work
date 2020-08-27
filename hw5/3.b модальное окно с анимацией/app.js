// 1. получить элемент с классом .wrap и сохранить
// его в переменную
let modal = document.getElementsByClassName('wrap')[0];
// 2. получить тег span, сохранить в переменную
let closeWindow = document.getElementsByTagName('span')[0];
// 3. получить тег button, сохранить в переменную
let buttonShowModal = document.getElementsByTagName('button')[0];
modal.classList.add('animated');

// 4. на кнопку показа модального окна назначить обработку
// события клика
// 4.1 при клике функция обработчик у элемента с
// классом .wrap должна удалять классы rollOut и hidden,
// элементу с классом .wrap добавить классы animated и rollIn
buttonShowModal.addEventListener('click', function () {
    modal.classList.remove('rollOut');
    modal.classList.add('rollIn');
    modal.classList.toggle('hidden');

});


// 5. назначить обработку клика по тегу span
// 5.1 при клике у элемента с классом .wrap удалите
// класс rollIn и добавьте класс rollOut
// 5.2 используя setTimeout через секунду элементу
// .wrap добавьте класс .hidden
closeWindow.addEventListener('click', function () {
    modal.classList.remove('rollIn');
    modal.classList.add('rollOut');
    setTimeout(function () {
        modal.classList.toggle('hidden');
    }, 1000)

})

