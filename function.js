$(document).ready(function () {
    console.log("update v2")
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

document.getElementById("action").addEventListener('click',function(){
    alert('test click ')
    Tele_web.sendData('Test String')
})


  // $('#btn_main').on('click', function () {
  //     Tele_web.MainButton.text = "Main Button Click";
  //     Tele_web.MainButton.show();
  // });
  // $('#btn_back').on('click', function () {
  //     Tele_web.BackButton.show();
  // });

  // let re_url = uri.split('/');
  // let showBack = true;

  // $.each(re_url, function (k,v) {

  //     if (v == 'index.html') {
  //         alert("true pathname => " + window.location.pathname);
  //         showBack = false;
  //         Tele_web.BackButton.hide();
  //         return false;
  //     }
  // })

  // alert("1")
  // if(showBack){
  //     alert('ture')
  //     Tele_web.BackButton.show();
  // }

  // if ('index.html' in re_url) {
  //     alert("true pathname => " + window.location.pathname);
  //     Tele_web.BackButton.hide();
  // } else {
  //     alert("else ")
  //     Tele_web.BackButton.show();

  // }

  // if (!window.location.pathname) {
  //     Tele_web.BackButton.show();
  // }

  // window.Telegram?.WebApp.MainButton.onClick(() => {
  //     //   window.Telegram.WebApp.sendData(selectedRegions);
  //     alert("main button clicked");
  // });

  // Tele_web.BackButton.onClick(() => {
  //     history.back();
  // })
});
