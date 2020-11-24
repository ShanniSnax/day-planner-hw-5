$(".saveBtn").on("click", function(){
    var plan = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, plan);
    console.log(time);
    console.log(plan);

})


$("#12 .description").val(localStorage.getItem("12"))
