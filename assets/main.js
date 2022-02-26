const form = document.querySelector('.contact_form'),
    name = document.querySelector('.name'),
    email = document.querySelector('.email'),
    asunto = document.querySelector('.asunto'),
    msj = document.querySelector('.msj');

function sendEmail() {
    Email.send({
        SecureToken : "390589f2-c6fe-4f39-83cf-29c747659a13",
        To : 'maquez.paloma@gmail.com',
        From : email.value,
        Subject : 'Contacto desde marciadm.com',
        Body : msj.value
    }).then(
    message => alert(message)
    );
}


