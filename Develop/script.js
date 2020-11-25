$(".saveBtn").on("click", function () {
  var plan = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, plan);
});

for (i = 9; i <= 18; i++) {
  $(`#${i} .description`).val(localStorage.getItem(i));
}

function colorUpdate() {
  var currTime = moment().hours();
  $(".time-block").each(function () {
    var time = parseInt($(this).attr("id"));

    if (currTime === time) {
      $(this).addClass("present");
      $(this).removeClass("past");
    } else if (currTime < time) {
      $(this).addClass("past");
    } else {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }
  });
} 

var timeInterval = setInterval(colorUpdate, 60000);

colorUpdate();
