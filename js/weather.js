var input = document.querySelector(".input_text");
var main = document.querySelector("#name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var button = document.querySelector(".submit");

button.addEventListener("click", function (name) {
	fetch(
		"https://api.openweathermap.org/data/2.5/weather?q=" +
			input.value +
			"&appid=0b6552890aa9e1999221b026542ac196&units=metric"
	)
		.then((response) => response.json())
		.then((data) => {
			var tempValue = data["main"]["temp"];
			var nameValue = data["name"];
			var descValue = data["weather"][0]["description"];

			main.innerHTML = nameValue;
			desc.innerHTML = "Desc. : " + descValue;
			temp.innerHTML = "Temp. : " + tempValue + "°C";
			input.value = "";
		})

		.catch((err) => alert("Wrong city name!"));
});
