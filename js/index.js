"use strict";

class Reply {
    constructor(btn){
        this.btn = document.querySelectorAll(btn);
    }

    init(){
        let reply = document.querySelectorAll('.reply');
        this.btn.forEach( btn =>{
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                reply[btn.id].classList.toggle('reply-active');
            })
        });
    }
}

let reply = new Reply('.reply-button');
    reply.init();