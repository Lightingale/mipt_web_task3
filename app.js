


$(document).ready(function () {

    var tasks_num = 0;
    $("#root").append($("<ul id='list'></ul>"));
    $("#list").append($("<li id='element1'></li>"));
    $("#element1").append($("<span></span>").text("Сделать задание #3 по web-программированию"));
    $("#element1").append('<p><button onclick="this.parentNode.parentNode.remove()">Удалить</button></p>');

    $("#root").append($("<p>Добавить задание: <input id='add_task_input'>  </input></p>"));
    $("#root").append($("<p><button id = 'add_task'>Добавить!</button></p>"));

    $("#add_task").click(function(){
        $("#list").append($("<li id = " + tasks_num + "></li>"));
        $("#" + tasks_num).append($("<span></span>").text($("#add_task_input").val()));
        $("#" + tasks_num).append('<p><button onclick="this.parentNode.parentNode.remove()">Удалить</button></p>');
        tasks_num += 1;
    });

});
