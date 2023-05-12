
let container = document.getElementById("container");
let containerParent = document.getElementById("container-parent");
let button = document.getElementById("action-btn");

button.addEventListener("click", function(){
    if(container.classList.contains("show")){
        container.classList.remove("show");
        containerParent.classList.remove("show");
    } else{
        container.classList.add("show");
        containerParent.classList.add("show");
    }
});

let button2 = document.getElementById("whatsapp-button");

button2.addEventListener("click", function() {
  let phoneNumber = "5547991999398";
  let message = "Olá, boa tarde.";
  let url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + message;
  window.open(url, "_blank");
});

let button3 =document.getElementById("projects-button");

button3.addEventListener("click", function() {
    let url = "https://jm-meus-projetos.netlify.app/";
    window.open(url, "_blank");
  });

/* <p> Tenho 22 anos e estou animado em buscar me profissionalizar na área
de desenvolvimento de software. Sou apaixonado por computação desde pequeno
e amante de esportes.Vejo que meus pontos fortes são relações com pessoas
e olhar estratégico para resolução de conflitos. 
Busco sempre aperfeiçoar meu intelecto juntamente com 
minhas habilidades interpessoais. Espero que goste do meu portifólio e nao hesite 
em entrar em contato se tiver alguma pergunta.
</p>*/