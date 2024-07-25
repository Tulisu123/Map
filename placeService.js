'use strict'

var places = getPlaces() //using var beacuse of an error 'cannot access 'places' before initialization'

function addPlace(name,lat,lng){
    places.push({
        id:getId(),
        lat,
        lng,
        name
    })
    setPlacesToLocalStorage()
}

function getPlaceById(placeId){
    console.log(places)
    return places.find(place => place.id === placeId)
}

function removePlace(placeId){
    const itemIdx = places.findIndex(place => place.id === placeId)
    places.splice(itemIdx,1)
    setPlacesToLocalStorage()
}


function getPlaces(){
    console.log('storage', loadPlacesFromLocalStorage())
    console.log('places array', places)
    return loadPlacesFromLocalStorage()
}

function setPlacesToLocalStorage(){
    localStorage.setItem('places', JSON.stringify(places));
}

function loadPlacesFromLocalStorage() {
    const placesStr = localStorage.getItem('places');
    return placesStr ? JSON.parse(placesStr) : [];
}
