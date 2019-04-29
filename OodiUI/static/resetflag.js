$(document).ready(function(){
  function backToStart() {
    $.ajax({
      url: '/flag_reset',
      cache: false,
      headers: {
        "cache-control": "no-cache"
      },
      success: function(data) {
        window.location.assign("/");
      },
      error: function(error) {
        console.log(error);
      }
    });
    console.log("flag reset");
  }
  setTimeout(backToStart, 300000);
});
