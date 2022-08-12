function gotowhatsapp () {
    console.log("INITIATED")
    // var input_blanter = document.getElementById('wa_email');

    /* Whatsapp Settings */
    var walink = 'https://web.whatsapp.com/send',
        phone = '6281906006846',
        walink2 = 'Halo saya ingin memesan makanan dari catering DapoerFitri',
        text_yes = 'Terkirim.',
        text_no = 'Isi semua Formulir lalu klik Send.';

    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var walink = 'whatsapp://send';
    }

        /// get menu from checkboxes
        selected_menu=$('input[type=checkbox]:checked').map(function(_, el) {
            return $(el).val();
        }).get().join(" , ");

        /* Call Input Form */
        var 
            input_select1 = selected_menu,
            input_name1 = $("#wa_name").val(),
            input_email1 = $("#wa_email").val(),
            input_number1 = $("#wa_number").val(),
            input_url1 = $("#wa_url").val(),
            input_textarea1 = $("#wa_textarea").val();

        /* Final Whatsapp URL */
        var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
            '*Nama* : ' + input_name1 + '%0A' +
            '*Alamat* : ' + input_textarea1 + '%0A' +
            '*Pilihan menu* : ' + input_select1 + '%0A';
            // '*Email Address* : ' + input_email1 + '%0A' +
            // '*Input Number* : ' + input_number1 + '%0A' +
            // '*URL/Link* : ' + input_url1 + '%0A' +
            

        /* Whatsapp Window Open */
        window.open(blanter_whatsapp, '_blank');
};

function div_hide(){
    document.getElementById('abc').style.display='none'}