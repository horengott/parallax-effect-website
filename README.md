# parallax-effect-website
A responsive parallax website design on javascript.

This website was created like another project for my portfolio.

Built with some png images on layers and programmed on javascript.

// javascript code
window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
});

where --scrollTop is a css variable with document scroll value.

the animations at the section run when the variable with scroll reaches a certain value (450px).

// animations
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
