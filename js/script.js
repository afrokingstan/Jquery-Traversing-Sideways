$("button").click(function() {
    //closing the p element by traversing sideways
    $(this).next().slideToggle('slow');
});