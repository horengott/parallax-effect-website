// parallax effect

window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
});

// section animations

let title = document.querySelector('.section_title');
let paraph = document.querySelector('.section_paraph');
let line = document.querySelector('.line_animation');

window.addEventListener('scroll', e => {
    if (window.scrollY >= 450) {
        title.style.animation = 'titleSmooth 2s forwards';
        paraph.style.animation = 'paraphSmooth 2s forwards';
        line.style.animation = 'line 2s forwards';
    } else {
        // title.style.animation = '';
        // paraph.style.animation = '';
        // line.style.animation = '';
    };
});

