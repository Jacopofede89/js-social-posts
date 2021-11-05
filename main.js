/*
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
nome autore,
foto profilo,
data,
testo del post,
immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
numero di likes.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.
*/


let postCont = document.getElementById('container');

// array di oggetti in cui ogni oggetto contiene un singolo post
var post = [
    {
        'name' : 'Phil Mangione',
        'pic' : 'https://unsplash.it/300/300',
        'date' : '4 mesi fa',
        'text' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        'img' : '',
        'like' : 80
    },
    {
        'name' : 'Jacopo Chessa',
        'pic' : 'https://unsplash.it/300/300',
        'date' : '6 mesi fa',
        'text' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        'img' : 'https://unsplash.it/600/300',
        'like' : 180

    },
    {
        'name' : 'Marcelo Zalayeta',
        'pic' : 'https://unsplash.it/300/300',
        'date' : '4 mesi fa',
        'text' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        'img' : 'https://unsplash.it/600/300',
        'like' : 250

    },
    {
        'name' : 'Pinco Pallino',
        'pic' : 'https://unsplash.it/300/300',
        'date' : '1 mese fa',
        'text' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        'img' : '',
        'like' : 4250

    },
    
];

function stampa(){
    for (let i = 0; i < post.length; i++) {
    
        let {name, pic, date, text, img, like} = post[i];
    
        postCont.innerHTML += `<div class="post"></div>`
    
        const prova = document.getElementsByClassName("post")[i];
    
        prova.innerHTML += `
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${pic}" alt="${name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${name}</div>
                        <div class="post-meta__time">${date}</div>
                    </div>                    
                </div>
            </div>
        `
        if (text !== '') {
            prova.innerHTML += `
                <div class="post__text">${text}</div>
            `
        }
    
        if (img !== '') {
            prova.innerHTML += `
                <div class="post__image">
                    <img src="${img}" alt="">
                </div>
            `
        }
    
    
        prova.innerHTML += `
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter" class="js-likes-counter">${like}</b> persone
                    </div>
                </div> 
            </div>
        `
    };
}

stampa();
let buttons = document.querySelectorAll(".js-like-button");
let numeroLike = document.querySelectorAll(".js-like-counter");

for(let i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function() {
        const index = this.getAttribute('data-postid');
        post[index].like = parseInt(post[index].like) +1;
        stampa();

    });
}