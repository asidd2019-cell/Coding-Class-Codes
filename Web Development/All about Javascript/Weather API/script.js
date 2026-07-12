const citySelect = document.getElementById("cities")
const findWeatherButton = document.getElementById("button")
const cityCountrySpan = document.getElementById("cityName")
const tempCelSpan = document.getElementById("temp_cels_number")
const tempFahrSpan = document.getElementById("temp_fahr_number")
const tempCelFeelsLikeSpan = document.getElementById("temp_feels_like_cels_number")
const tempFahrFeelsLikeSpan = document.getElementById("temp_feels_like_fahr_number")
const windSpeedSpan = document.getElementById("wind_speed_number")
const values = document.getElementById("values")

findWeatherButton.addEventListener('click',async ()=>{
    values.style.display = "flex"
    values.style.flexDirection = "column"
    let city = citySelect.value
    let apiUrl = `https://api.weatherapi.com/v1/current.json?key=0f9f65342419461e869235451260607&q=${city}`

    let response = await fetch(apiUrl)

    if (!response.ok){
        alert("API Failed")
    }

    let data = await response.json()

    let country = data.location.country
    let temp_c = data.current.temp_c
    let temp_f = data.current.temp_f
    let temp_c_feels_like = data.current.feelslike_c
    let temp_f_feels_like = data.current.feelslike_f
    let wind_kph = data.current.wind_kph

    cityCountrySpan.innerHTML = `${city}, ${country}`
    tempCelSpan.innerHTML = `${temp_c}`
    tempFahrSpan.innerHTML = `${temp_f}`
    tempCelFeelsLikeSpan.innerHTML = `${temp_c_feels_like}`
    tempFahrFeelsLikeSpan.innerHTML = `${temp_f_feels_like}`
    windSpeedSpan.innerHTML = `${wind_kph}`
})