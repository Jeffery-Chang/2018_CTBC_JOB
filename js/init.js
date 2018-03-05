$(function() {
    $("#slider").slider();

    $('.indexPage').on('click', 'li.inactive', function() {

    })


});

function changePage(ele, param) {
    console.log(ele);
    window.location = ele + ".html" + param;
}