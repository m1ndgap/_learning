//
// >>>>>>>>> http://try.jquery.com <<<<<<<<<<<<
//

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


// MANIPULTING THE DOM

.append(element/var) // adds as a last child
  .appendTo('.class');
.prepend(element/var) // adds as a first child
  .prependTo('.class');
.before(element/var) // adds right before the element
.after(element/var) // adds right after the element

// example:
$('.class').append(var);
// OR
var.appendTo('.class');

$('.class').remove() // removes element


// ACTING AND INTERACTION
.on(<event>,<event handler>)

$('button').on('click', function(){
});

// using this
$(this).remove()

$(this).closest('.class').append(var) // closest looks for closest element with the given params up the DOM, very useful
