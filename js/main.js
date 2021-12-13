// проверим, готов ли сайт к манипуляциям
$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $(".house path");
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatButton = $(".view-flat");
 
console.log('сайт готов к манипуляциям');  

// по клику на этаж
// $(".house path").on("click", function () {
//     console.log('кликнули на этаж'); 
//     console.log($(this).attr("data-floor"));
//     currentFloor = $(this).attr("data-floor");
//     $(".counter").text(currentFloor);
// })

// по наведению мышкой на этаж
floorPath.on("mouseover", function () {
    floorPath.removeClass('current-floor');
    currentFloor = $(this).attr("data-floor");
    ascurrentFloor = currentFloor.toLocaleString('en-US',{minimumIntegerDigits: 2, 
        useGrouping: false}); // форматируем в вид 03, а не просто 3
    $(".counter").text(ascurrentFloor);
    $(`[data-floor=${ascurrentFloor}]`).toggleClass("current-floor");; // назначили класс текущему path. А в стилях объявили видимость этого класса
});

// floorPath.on("click", function () {
//     modal.toggleClass("is-open");
// })

// modalCloseButton.on("click", function () {
//     modal.toggleClass("is-open");
// })

floorPath.on("click", toggleModal); // при клике на этаж вызвать окно с планом квартир
modalCloseButton.on("click", toggleModal);  // при клике на крестик закрыть окно с планом квартир
viewFlatButton.on("click", toggleModal); 

counterUp.on("click", function () {
    console.log('кликнули по кнопке выбора этажа вверх');
    if (currentFloor < 18) {
        currentFloor++;
        ascurrentFloor = currentFloor.toLocaleString('en-US',{minimumIntegerDigits: 2, 
        useGrouping: false});
        $(".counter").text(ascurrentFloor);

        floorPath.removeClass('current-floor');
        // назначили path класс current-floor
        $(`[data-floor=${ascurrentFloor}]`).toggleClass("current-floor");;
    }
});

counterDown.on("click", function () {
    console.log('кликнули по кнопке выбора этажа вниз');
    if (currentFloor > 2) {
        currentFloor--;
        ascurrentFloor = currentFloor.toLocaleString('en-US',{minimumIntegerDigits: 2, 
        useGrouping: false});
        $(".counter").text(ascurrentFloor);

        floorPath.removeClass('current-floor');
        // назначили path класс current-floor
        $(`[data-floor=${ascurrentFloor}]`).toggleClass("current-floor");;
    }
});

function toggleModal () {
    modal.toggleClass("is-open"); 
}


});