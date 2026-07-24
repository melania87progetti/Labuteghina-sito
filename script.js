const gallery = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let current = 0;

gallery.forEach((item,index)=>{

    item.addEventListener('click',e=>{

        e.preventDefault();

        current=index;

        lightboxImg.src=item.href;

        lightbox.classList.add('active');

    });

});

closeBtn.onclick=()=>{

    lightbox.classList.remove('active');

};

nextBtn.onclick=()=>{

    current=(current+1)%gallery.length;

    lightboxImg.src=gallery[current].href;

};

prevBtn.onclick=()=>{

    current=(current-1+gallery.length)%gallery.length;

    lightboxImg.src=gallery[current].href;

};

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove('active');

    }

};