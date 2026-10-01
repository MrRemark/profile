const sendMail = () => {
    alert("This function is called!");
    emailjs.sendForm('service_3r4bt6j', 'template_5fwkbsq', '#contactform', "user_XwUIwe5oOVr2RRG2vftDT")
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}
