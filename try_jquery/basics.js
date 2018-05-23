// proper way to wrap JQ code:
$(document).ready(function() {

});

// finding stuff using selectors:
$(".class > element:first")
$("#id element:odd")
$('.class, #id')

// finding stuff with traversing
$('.class').find(li)
$('li').first().next()
$('li').first().parent()
$('#id').children(li)
