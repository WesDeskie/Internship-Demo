const boxArray = document.querySelectorAll('.box');

//Changing style properties
// boxArray[1].style.backgroundColor = 'red';


//adding event listeners
for (let i = 0; i < boxArray.length; i++) {
    boxArray[i].addEventListener('mouseover', () => {
        boxArray[i].style.backgroundColor = 'red';
    });
}
for (let i = 0; i < boxArray.length; i++) {
    boxArray[i].addEventListener('mouseout', () => {
        boxArray[i].style.backgroundColor = 'white';
    });
}

//GSAP
// gsap.to('.circle', {x:600})

const timeline = gsap.timeline({ paused: true });
timeline.to('.circle', {x:600, duration: 1.5});
timeline.to('.square', {x:600, duration: 1.5});
timeline.to('.circle', {x:0, duration: 1.5});
timeline.to('.square', {rotation:360});
timeline.to('.square', {x:0, duration: 1.5});
timeline.to(['.square', '.circle'], {opacity:0, duration: 1.5});

const playAnimation = () => {
    timeline.restart();
}