let postCont = document.getElementById('container');


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

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function() {
        const index = this.getAttribute('data-postid');
        post[index].like = parseInt(post[index].like) +1;
        stampa();

    });
}