function delayedLog(message, delay) {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log(message);
            resolve();
        }, delay)
    }
    )
}

delayedLog('Hello, world', 2000)
    .then(() => { console.log('The message is shown in 2 seconds') });