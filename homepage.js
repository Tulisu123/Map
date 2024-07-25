'use strict'

function onInit(){
    updateHomepageSettings()
}

function updateHomepageSettings(){
    var userSettingsObj = getFromLocalStorage()
    
    document.querySelector('body').style.backgroundColor = userSettingsObj.bgColor
    document.querySelector('body').style.color = userSettingsObj.txtColor
}