let weather= {

  fetchWeather: function(city){ 
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&appid=78cd7c9770fcbaf2469d0dbaa4ab79c9')
    .then(response => response.json())
    .then(data => this.displayWeather(data))
  },

  displayWeather: function(data){
    const name = data.name;
    const icon = data.weather[0].icon;
    const description = data.weather[0].description;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const speed = data.wind.speed;
 
    document.querySelector(".location").innerText = name
    document.querySelector(".image").src ="http://openweathermap.org/img/wn/"+ icon +".png"
    document.querySelector(".description").innerText = description
    document.querySelector(".temp").innerText = 'Temperature: ' + temp + '°c'
    document.querySelector(".humidity").innerText = 'Humidity: ' + humidity + ' %'
    document.querySelector(".speed").innerText = 'Wind speed: ' + speed + ' km/h'
    document.querySelector(".textContainer").classList.remove('loading');
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name + "')"
  }
}


 const test = document.querySelector(".citySearch")
 const testBut = document.querySelector(".citySearchButton")

testBut.addEventListener('click', function(e){
  e.preventDefault();
  weather.fetchWeather(test.value)
  test.value = ""
})

weather.fetchWeather('London')