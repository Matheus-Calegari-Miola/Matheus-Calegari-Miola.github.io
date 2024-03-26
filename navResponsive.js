// Seleciona elementos do DOM
const navBar = document.querySelector(".nav_menu_bars");
const navUl = document.querySelector(".nav_ul");
const navLinks = document.querySelectorAll(".nav_ul li");

// Função para adicionar ou remover classes para meu responsivo
function add_removeClass(){
    navBar.classList.toggle("nav_menu_bars_active");
    navUl.classList.toggle("nav_ul_active");
}

// Adiciona evento de clique ao botão de menu
navBar.addEventListener("click", ()=>{
    add_removeClass();
});

// Adiciona eventos de clique para fechar o menu ao clicar em um link
navLinks.forEach((e)=>{
    e.addEventListener("click", ()=>{
        add_removeClass()
    });
});

// Função para ajustar o menu ao redimensionar a janela
function widthSize(){
    let ancho = window.innerWidth;
    if (ancho > 750){
        navBar.classList.remove("nav_menu_bars_active");
        navUl.classList.remove("nav_ul_active");
    };
};

// Adiciona evento de redimensionamento da janela
window.addEventListener("resize", widthSize);

// Código abaixo utiliza a API de animação para criar um efeito de digitação
"use strict";

// Variável para controlar se a animação já foi reproduzida
let animationPlayed = false;

// Função para simular digitação em um elemento HTML
function typeWriter(elementId) {
    const informationAnimation = document.getElementById(elementId);
    const textArray = informationAnimation.innerHTML.split("");
    informationAnimation.innerHTML = "";

    // Itera sobre cada letra no array
    textArray.forEach((letter, i) => {
        setTimeout(() =>{informationAnimation.innerHTML += letter;}, 30 * i);
});
}

// Função para verificar se o elemento está na visão da tela ao rolar
function checkIfInView() {
    const informationAnimation = document.getElementById("information-animation");
    const elementPosition = informationAnimation.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Se o elemento estiver na visão da tela e a animação não foi reproduzida, inicia a animação
    if (elementPosition < windowHeight && !animationPlayed) {
        animationPlayed = true;
        typeWriter("information-animation");

    }
}

// Adiciona evento de rolagem para verificar se o elemento está na visão da tela
window.addEventListener("scroll", () => {
    checkIfInView();
});

// Adiciona evento de carregamento da página para verificar se o elemento está na visão da tela
window.addEventListener("load", () => {
    checkIfInView();
});

// Código abaixo altera dinâmicamente o texto de uma descrição com efeito de animação

// Array de textos a serem exibidos
let textArray = ["Desenvolvedor Front-End", "Desenvolvedor Web"];
let index = 0;


// Função para alterar o texto com efeito de animação
function changeText () {
    let p = document.querySelector(".small-description");
    p.innerHTML = "";
    let text = textArray[index];

    // Itera sobre cada letra no texto para criar efeito de animação
    for(let i = 0; i < text.length; i++) {
        let span = document.createElement("span");
        span.textContent = text[i];
span.style.animationDelay = `${i * 0.25}s`;
p.appendChild(span);
    }
    index++;

    // Reinicia o índice se todos os textos foram exibidos
    if(index >= textArray.length) {
        index= 0;
    }
}

// Chama a função inicialmente e a configura para ser chamada periodicamente
changeText();
setInterval(changeText, textArray[0].length * 0.25 * 1000 + 5000);