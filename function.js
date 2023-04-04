$(document).ready(function () {
  console.log("update v4");
  const Tele_web = window.Telegram.WebApp;
  //   console.log(Tele_web);
  const uri = window.location.pathname;

  if (uri) {
    Tele_web.BackButton.show();
  }
  Tele_web.BackButton.onClick(() => {
    history.back();
  });

  //   setInterval(() => {
  //     alert('test here')
  //     Tele_web.sendData('Test String')
  //   }, 5000);

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

  $("#btn_main").on("click", function () {
    Tele_web.MainButton.text = "Main Button Click";
    Tele_web.MainButton.show();
  });
  $("#btn_back").on("click", function () {
    Tele_web.BackButton.show();
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

  Tele_web.BackButton.onClick(() => {
    history.back();
  });
});
