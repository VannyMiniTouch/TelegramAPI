$(document).ready(function () {

  const beforeUnloadListener = (event) => {
    fetch("https://api.telegram.org/bot5786700742:AAFOFU8nL8PxXmHp4lNC2z89nm2ugIKdJmI/sendMessage?chat_id=489399945&text=Hello%20World!");
  };
  window.addEventListener("beforeunload", beforeUnloadListener);


  $("#chknumber").click(function () {
    let number = $("#mynumber").val();
    if (isNaN(number)) {
      alert("Allow Number only");
      return;
    }
    let smg = number <= 100 ? "Value <= 100" : "Value > 100";
    alert(` Value is ${number} => ${smg} `);
  });

  $(document).on("click", '.menu', function () {
    alert($(this).text());
  })

  console.log("update v1");
  const Tele_web = window.Telegram.WebApp;

  console.log("expan =>", Tele_web.isExpanded);

  console.log(Tele_web.expand());
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

  $("#close_btn").on("click", function () {
    Tele_web.close();
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
