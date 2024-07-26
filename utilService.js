function getId(length = 4) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

function saveToLocalStorage(arr){
    for (const key in arr) {
        if (user.hasOwnProperty(key)) {
            localStorage.setItem(key, user[key])
        }
    }
}

//save entire object with json parse or json stringfiy