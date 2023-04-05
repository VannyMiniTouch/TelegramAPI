$(document).ready(function () {
    
  console.log("update v1");
  const Tele_web = window.Telegram.WebApp;
  console.log(Tele_web.expand())
  //   console.log(Tele_web);
  const uri = window.location.pathname;

  if (uri) {
    Tele_web.BackButton.show();
  }

  Tele_web.BackButton.onClick(() => {
    history.back();
  });

  document.getElementById("action").addEventListener("click", function () {
    alert("test login");
    // const obj = {
    //     name : 'vanny',
    //     id : 12345,
    //     isLogin : true
    // }
    //  myJSON = JSON.stringify(obj);
    // console.log(myJSON)

    // {"name":"vanny","id":12345,"isLogin":true}
    // Tele_web.sendData(myJSON)

    // let data = "name#vanny, id#12345, islogin#true";
    let data = "1";

    Tele_web.sendData(data);
  });
  //   $('#fullscreen').on('click', function(){
  //     Tele_web.expand();
  //   })

  $("#fullscreen").on("click", function () {
    // if (Tele_web.isExpanded()) {
    //   Tele_web.collapse();
    // } else {
      Tele_web.expand();
    // }
  });

  $("#btn_main").on("click", function () {
    if ($(this).attr("isopen") != "open") {
      Tele_web.MainButton.text = "Hello World";
      Tele_web.MainButton.show();
      $(this).attr("isopen", "open");
      $(this).html("Close MainButton");
    } else {
      Tele_web.MainButton.text = "Hello World";
      Tele_web.MainButton.hide();
      $(this).attr("isopen", "close");
      $(this).html("Open MainButton");
    }
  });

  $("#btn_back").on("click", function () {
    history.back();
  });

  let re_url = uri.split("/");
  let showBack = true;

  $.each(re_url, function (k, v) {
    if (v == "index.html") {
      showBack = false;
      Tele_web.BackButton.hide();
      return false;
    }
  });

  if (showBack) {
    Tele_web.BackButton.show();
  }

  if ("index.html" in re_url) {
    Tele_web.BackButton.hide();
  } else {
    Tele_web.BackButton.show();
  }

  if (!window.location.pathname) {
    Tele_web.BackButton.show();
  }

  window.Telegram?.WebApp.MainButton.onClick(() => {
    //   window.Telegram.WebApp.sendData(selectedRegions);
  });

  //   Tele_web.BackButton.onClick(() => {
  //     history.back();
  //   });
});
