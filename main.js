function generatePasswords() {
    let passwordLength = document.getElementById('length').value;

    function getRandomNumber() {
        let randNum = Math.floor(Math.random() * 94) + 33; //getting random number between 33 and 126 (inclusive)
        return randNum;
    }

    function getPassword( length ) {
        let passwordStr = "";
        length || (length = 16);
        for( let i = 0; i < length; i++ ) {
            passwordStr += String.fromCharCode(getRandomNumber())
        }
        return passwordStr;
    }

    let passwordFields = document.querySelectorAll('.password-field');

    passwordFields.forEach( field => {
        field.value = getPassword( passwordLength );
        field.classList.contains('filled') || field.classList.add('filled');
    });
}

function showMsg() {
    let msg = document.querySelector('.msg');
    msg.classList.contains('show') && msg.classList.remove('show');
    msg.classList.contains('show') && clearTimeout( timeOut );
    msg.classList.add('show');
    const timeOut = setTimeout( () => {
        msg.classList.remove('show');
    }, 700 );
}