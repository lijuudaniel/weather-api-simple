async function getWeather() {
  const res = await fetch("http://localhost:3000/weather");
  const data = await res.json();

  document.getElementById("output").innerText = data.message;
}
