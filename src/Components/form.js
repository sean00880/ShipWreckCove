const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var text1 = document.getElementById("name").value;
    var text2 = document.getElementById("email").value;
    var my_text = `Result is: %0A - Text1: ${text1} %0A - Text2: ${text2}`
    var token = "5591745560:AAELIJiqvX3W82JvdVb3W5SG2ddrCVoZ1xo"
    var chat = 1788019123
    var url = `https://api.telegram.org/bot[your_token]/sendMessage?chat_id=${chat_id}&text=${my_text}/`

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    console.log("Message sent successfully")
})