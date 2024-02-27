
if('geolocation' in navigator) {
navigator.geolocation.getCurrentPosition((position) => {
  let lat = position.coords.latitude
  let lon = position.coords.longitude
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat+ '&lon=' + lon + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric'
  console.log(url);
  axios.get(url)
  .then((response) => {
    document.getElementById('temperature_label').textContent = response.data.main.temp
    document.querySelector('#ville').textContent = response.data.name;
    
  })
  .catch(error => {
    console.log(error);
  })
}, error => {
  villeChoisie = 'Paris'
  trouverLaTemp(villeChoisie)
}, options)
}else {
  let villeChoisie = 'liege'

  trouverLaTemp(villeChoisie)

}

var options = {
  enableHighAccuracy: true
}

let button = document.getElementById('changer');



button.addEventListener('click', () => {
  let nouvelleVille = prompt('nouvelle ville ?')
  trouverLaTemp(nouvelleVille)
})


function trouverLaTemp (ville) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';
  console.log(url);
  axios.get(url)
  .then((response) => {
    document.getElementById('temperature_label').textContent = response.data.main.temp
    document.querySelector('#ville').textContent = response.data.name;
    
  })
  .catch(error => {
    console.log(error);
  })
  
} 

