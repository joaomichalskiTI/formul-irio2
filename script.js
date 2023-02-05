
var container = document.getElementById("container");
var containerParent = document.getElementById("container-parent");
var button = document.getElementById("action-btn");

button.addEventListener("click", function(){
    if(container.classList.contains("show")){
        container.classList.remove("show");
        containerParent.classList.remove("show");
    } else{
        container.classList.add("show");
        containerParent.classList.add("show");
    }
});

var button2 = document.getElementById("whatsapp-button");

button2.addEventListener("click", function() {
  var phoneNumber = "5547991999398";
  var message = "Olá, boa tarde.";
  var url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + message;
  window.open(url, "_blank");
});