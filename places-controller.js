'use strict'

let gMap
let gMarker

function onInit() {
    renderPlaces()
}

function renderPlaces() {
    let places = getPlaces()
    const elPlacesContainer = document.querySelector('.places-container')
    
    let strHtml = places.map(place =>
        `
        <button class='open-place-btn' onclick="openPlaceDialog('${place.id}')">${place.name}</button>
        <dialog class='place-details-dialog ${place.id}'>
            <button onclick="closePlaceDialog('${place.id}')" class='dialog-close-btn'>X</button>
            <ul>
                <li><span class='desc'>Name</span> &#8594;${place.name}</li>
                <li><span class='desc'>Id</span> &#8594; ${place.id}</li>
                <li><span class='desc'>Lat</span> &#8594; ${place.lat}</li>
                <li><span class='desc'>Lang</span> &#8594; ${place.lng}</li>
            </ul>
            <button class='action-btn' onclick="onRemovePlace()">Remove</button>
            <button class='action-btn' onclick="onDisplayPlace('${place.id}')">Display</button>
        </dialog>
        `
    ).join('')

    elPlacesContainer.innerHTML = strHtml
}


function onRemovePlace(placeId) {
    console.log('Removing place with id : ' + placeId)
    removePlace(placeId)
    renderPlaces()
}

function onAddPlace(ev) {
    ev.preventDefault()

    const name = document.querySelector('.name-input').value
    const lng = document.querySelector('.lng-input').value
    const lat = document.querySelector('.lat-input').value

    addPlace(name, lat, lng)
    renderPlaces()
}


////////////////// Map functions //////////////


function initMap() {
    // The location (latitude and longitude)
    let location = { lat: 29.550360, lng: 34.952278 };

    // Create a map object centered at the location
    gMap = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: location
    });

    // Create a marker at the location
    gMarker = new google.maps.Marker({
        position: location,
        map: gMap
    });
}

window.initMap = initMap;


function onDisplayPlace(placeId) {
    const place = getPlaceById(placeId)
    let location = { lat: parseFloat(place.lat), lng: parseFloat(place.lng) };

    gMap.setCenter(location);
    gMarker.setMap(null)
    gMarker = new google.maps.Marker({
        position: location,
        map: gMap
    });
}

function onLocalPlace() {
    navigator.geolocation.getCurrentPosition(position => {
        const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        gMarker.setMap(null)

        gMarker = new google.maps.Marker({
            position: pos,
            map: gMap,
        });

        gMap.setCenter(pos);
        gMap.setZoom(15);
    })

}

///////////Dialog functions////////////
function openDialog() {
    document.querySelector('.add-place').show()
}

function closeDialog() {
    console.log('closing-dialig')
    document.querySelector('.add-place').close()
}

function closePlaceDialog(placeId){
    document.querySelector(`.${placeId}`).close()
}

function openPlaceDialog(placeId){
    console.log(placeId)
    document.querySelector(`.${placeId}`).showModal()
}

///////////////////////////////////////
