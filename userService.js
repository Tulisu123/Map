'use strict'

const user = {
    email: '',
    txtColor: '',
    bgColor: '',
    age: '',
    birthDate: '',
    birthTime: ''
}


function getFromLocalStorage(){
    const userSettingsObj = {
        email: localStorage.getItem('email') || '',
        txtColor: localStorage.getItem('txtColor') || '',
        bgColor: localStorage.getItem('bgColor') || '',
        age: localStorage.getItem('age') || '',
        birthDate: localStorage.getItem('birthDate') || '',
        birthTime: localStorage.getItem('birthTime') || ''
    }
    return userSettingsObj
}

function getUserSettings() {
    console.log(user)
}

function updateEmailModal(email) {
    if (email) {
        console.log('updating email in modal to ' + email)
        user.email = email
    }
    saveToLocalStorage(user)
}

function updateBgModal(bgColor){
    if(bgColor){
        console.log('updating background color in modal to ' + bgColor)
        user.bgColor = bgColor
    }
    saveToLocalStorage(user)
}

function updateAgeModal(age){
    if(age){
        console.log('updating age in modal to ' + age)
        user.age = age
    }
    saveToLocalStorage(user)
}

function updateTextColorModal(color){
    if(color){
        console.log('updating text color in modal to ' + color)
        user.txtColor = color
    }
    saveToLocalStorage(user)
}

function updateBirthDateModal(bDate){
    if(bDate){
        console.log('updating birth date in modal to ' + bDate)
        user.birthDate = bDate
    }
    saveToLocalStorage(user)
}

function updateBirthTimeModal(bTime){
    if(bTime){
        console.log('updating birth time in modal to ' + bTime)
        user.birthTime = bTime
    }
    saveToLocalStorage(user)
}

