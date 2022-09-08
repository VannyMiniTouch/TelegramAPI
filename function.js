
    $(document).ready(function () {

        const Tele_web = window.Telegram.WebApp;
        console.log(Tele_web)



        $('#btn_main').on('click', function () {
            Tele_web.MainButton.text = "Main Button Click";
            Tele_web.MainButton.show();
        });



        $('#btn_back').on('click', function () {
            Tele_web.BackButton.show();
        });
        
        if(!window.location.pathname){
            Tele_web.BackButton.show();
        }



        window.Telegram?.WebApp.MainButton.onClick(() => {
            //   window.Telegram.WebApp.sendData(selectedRegions);
            alert("main button clicked");
        });

        Tele_web.BackButton.onClick(() => {
            history.back();
        })



        if(!window.location.pathname){
            Tele_web.BackButton.show();
        }












        // $('#test_btn').html(JSON.stringify(Tele_web))

        // mainButton is the VIEW ORDER button in the image.
        // const mainButton = window.Telegram.WebApp.MainButton;
        // mainButton.text = `View Order, or whatever you wish`;
        // mainButton.enable();
        // mainButton.show();
        // mainButton.onClick(() => { handleClick, or handleSubmit });




        // Telegram.WebApp.onEvent('mainButtonClicked', function(){
        //     $('#test_btn').html="Main btn click"
        //     consol.log("test")
        // })


        // Tele_web.MainButton.onClick(function(){
        //     $('#test_btn').html="Main btn click"
        //     consol.log("test")
        // });

    })

