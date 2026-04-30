async function getWeather() {
  const city = document.getElementById("city").value;

  const apiKey = "aa5a89fb4cc3f2b5cb94ea3bfcbfb91a"; // replace this
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    document.getElementById("result").innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].main}</p>
    `;
  } 
  if (data.cod === 200) {
  document.getElementById("result").innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].main}</p>
  `;
  const lat = data.coord.lat;
  const lon = data.coord.lon;

  document.getElementById("map").innerHTML = `
    <iframe
      width="100%"
      height="250"
      style="border:0; border-radius:10px;"
      src="https://maps.google.com/maps?q=${lat},${lon}&output=embed">
    </iframe>
  `;
}
  else {
    document.getElementById("result").innerHTML = "City not found";
  }
}
alert("working");
function startVoice() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  recognition.lang = "en-IN"; // India English
  recognition.start();

  recognition.onresult = function(event) {
    const text = event.results[0][0].transcript;
    document.getElementById("city").value = text;
  };

  recognition.onerror = function() {
    alert("Voice error, try again");
  };
}