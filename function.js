
$(document).ready(function () {

    const Tele_web = window.Telegram.WebApp;
    console.log(Tele_web)
    const uri = window.location.pathname;

    // $('#btn_main').on('click', function () {
    //     Tele_web.MainButton.text = "Main Button Click";
    //     Tele_web.MainButton.show();
    // });
    // $('#btn_back').on('click', function () {
    //     Tele_web.BackButton.show();
    // });

    let re_url = uri.split('/');


    if ('index.html' in re_url) {
        alert("pathname => " + window.location.pathname);
        Tele_web.BackButton.hide();
    } else {
        Tele_web.BackButton.show();
    }

    // if (!window.location.pathname) {
    //     Tele_web.BackButton.show();
    // }


    window.Telegram?.WebApp.MainButton.onClick(() => {
        //   window.Telegram.WebApp.sendData(selectedRegions);
        alert("main button clicked");
    });

    Tele_web.BackButton.onClick(() => {
        history.back();
    })




})

