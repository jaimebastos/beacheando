let map


function initMap() {

  map = new google.maps.Map(
    document.querySelector('#placesMap'),
    { zoom: 14, center: { lat: 40.392499, lng: -3.698214  }, styles: mapStyles.yellowParks }  
  )
  getApiPlace()
}

 function getApiPlace() {
   const id = document.querySelector("#id").value
   axios
    .get(`/api/beach/info/${id}`)
    .then(res => placeBeachesInMap(res.data))
    .catch(err => console.log('ERROR EN CLIENTE OBTENIENDO LAS PLAYAS', err))
}



function placeBeachesInMap(beach) {

  beach.forEach(elm => {
   
    const position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
    const title = elm.name
    new google.maps.Marker({ title, position, map })
    
  })

  map.setCenter({ lat: beach[0].location.coordinates[0], lng: beach[0].location.coordinates[1] })
}


// function placeOneBeach(beach) {
 
//     const position = { lat: location.coordinates[0], lng: location.coordinates[1] }

//     console.log('Estamos aquiiii', position)

//     const title = { name }

//     new google.maps.Marker({ title, position, map })
    
//   map.setCenter({ lat: beach.location.coordinates[0], lng: beach.location.coordinates[1] })
// }

