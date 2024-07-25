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
            // Save each property in localStorage
            localStorage.setItem(key, user[key])
        }
    }
}