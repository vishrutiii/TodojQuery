//check of the to-do's
$("ul").on("click", "li", function(){
    // $(this).css("color", "gray");
    // $(this).css("text-decoration", "line-through")
    $(this).toggleClass("done");
});

//to delete the item when X is clicked
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(1000, () => {
        $(this).remove();
    });
    event.stopPropagation();
})

$(".fa-calendar-plus").click(function(){
    $("input[type = 'text']").toggleClass("rem");
})

$("input[type ='text']").keypress(function(event){
    if(event.which === 13){
        //alert("enter");
        var newTodo = $(this).val();
        console.log(newTodo);
        //create new li
        $("ul").append(`<li><span class="del"> <i class="fas fa-trash-alt"></i> </span> ${newTodo}</li>`);
    }
});

