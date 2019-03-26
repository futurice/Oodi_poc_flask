$(document).ready(function(){
  function home_signal() {
    $.ajax({
      url: '/back_home',
      cache: false,
      headers: {
        "cache-control": "no-cache"
      },
      success: function(data) {
        if (data == "home2") {
          console.log("Back home yay");
          window.location.replace("/");
        }
        else {
          console.log("Home far away");
        }
      }

    });
    setTimeout(home_signal,2000);
  }
  home_signal();
});
