// node notificationGenerator.js

function sendNotification(email) {
    if (email.includes('@')) {

        let [userName, domainName] = email.split('@');

        const textMessage = userName + ' ' + 'sent you an email from' + ' ' + domainName;
        return textMessage;


    }
    else{
        return "Invalid Email";
    }
}

const notificationMessage = sendNotification("rafeehasan88@gmail.com");
console.log(notificationMessage);
