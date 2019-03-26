$(document).ready(function(){
  function arrow_signal() {
    $.ajax({
      url: '/get_arrow',
      cache: false,
      type: "GET",
      headers: {
        "cache-control": "no-cache"
      },
      success: function(data) {
        $(".arrow").hide();
        $(".wayhelp").hide();
        if (data == "-") {
          console.log("empty file meh");
          $("#uparrow").show();
          $("#showtheway").show();
        }
        else if (data == "l") {
          $("#leftarrow").show();
          $("#lookleft").show();
          console.log("look to your left");
          //setTimeout(redirect, 5000);
        }
        else if (data == "r") {
          $("#rightarrow").show();
          $("#lookright").show();
          //setTimeout(redirect, 5000);
          console.log("you will be directed to right");
        }
        else if (data == "lr") {
          $("#leftrightarrow").show();
          $("#lookboth").show();
          //setTimeout(redirect, 5000);
          console.log("look at both sides");
        }
        else if (data == "home") {
          window.location.replace("/going_home");
        }
        else {
          console.log("empty file meh");
          $("#uparrow").show();
          $("#showtheway").show();
        }
      }

    });
    setTimeout(arrow_signal,2000);
  }
  arrow_signal();
});
