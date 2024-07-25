'use strict'

function onInit(){
    updateUserSettingsDOM()
}

function showAge(age){
    document.querySelector('.sAge').innerText = age
}

function loadUserSettings(){
    getUserSettings()
}

function onSubmit(event){
    event.preventDefault()
    updateModalFunctions()
}

function updateModalFunctions(){
    const elEmailValue = document.querySelector('.email input').value
    const elAgeValue = document.querySelector('.age input').value
    const elBgColorValue = document.querySelector('.background-color input').value
    const elTextColorValue = document.querySelector('.text-color input').value
    const elBirthDateValue = document.querySelector('.birth-date input').value
    const elBirthTimeValue = document.querySelector('.birth-time input').value

    updateEmailModal(elEmailValue)
    updateAgeModal(elAgeValue)
    updateBgModal(elBgColorValue)
    updateTextColorModal(elTextColorValue)
    updateBirthDateModal(elBirthDateValue)
    updateBirthTimeModal(elBirthTimeValue)
}

function updateUserSettingsDOM(){
    var userSettingsObj = getFromLocalStorage()
    console.log('seetings from storage', userSettingsObj)

    //loading local storage to form
    const elEmail = document.querySelector('.email input').value = userSettingsObj.email
    const elAge = document.querySelector('.age input').value = userSettingsObj.age
    const elBgColor = document.querySelector('.background-color input').value = userSettingsObj.bgColor
    const elTextColor = document.querySelector('.text-color input').value = userSettingsObj.txtColor
    const elBirthDate = document.querySelector('.birth-date input').value = userSettingsObj.birthDate
    const elBirthTime = document.querySelector('.birth-time input').value = userSettingsObj.birthTime
    showAge(userSettingsObj.age)
}
