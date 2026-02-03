// Option 1
function generatePassword(length) {
    let password = '';

    for (let i = 0; i < length; i++) {

        let numberCode = Math.floor(Math.random() * 10) + 48;
        let lowerCaseCode = Math.floor(Math.random() * 26) + 97;
        let upperCaseCode = Math.floor(Math.random() * 26) + 65;

        let randomNumber = Math.floor(Math.random() * 3);

        switch (randomNumber) {
            case 0:
                password += String.fromCharCode(numberCode);
                break;
            case 1:
                password += String.fromCharCode(lowerCaseCode);
                break;
            case 2:
                password += String.fromCharCode(upperCaseCode);
                break;
        }
    }

    return password;
}

console.log(generatePassword(8));

// Option 2
function generatePassword2(length) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let password = '';

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];

    }

    return password;
}
console.log(generatePassword2(8));
