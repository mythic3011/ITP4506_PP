$(document).ready(function () {
  $("#button1").click(function () {
    alert("Welcome!");
  });

  $("#button2").dblclick(function () {
    alert("Good Bye!");
  });

  $("#button3").mouseenter(function () {
    $(this).hide();
  });

  $("#button3").mouseleave(function () {
    $(this).show();
  });

  $("#input1, #input2")
    .focus(function () {
      $(this).css("background-color", "green");
    })
    .blur(function () {
      $(this).css("background-color", "red");
    });
});
