const myBody = document.querySelector(`body`);
const storyByP = myBody.querySelectorAll(`p`);
let index = 0;

storyByP.forEach(element => {
    element.style.position = `absolute`;
    if (element != storyByP[0]) {
        element.style.opacity = `0%`;
    }
});

switchP = (index) => {
    let element = storyByP[index];
    element.style.transition = `1s`;
    storyByP.forEach(e => {
        if (e != element) {
            e.style.opacity = `0%`;
        } else {
            e.style.opacity = `100%`;
        }
    })
}




myBody.addEventListener(`wheel`, (event) => {
    let y = event.deltaY;
    if (y > 0) {
        index++;
        if (index > storyByP.length - 1) {
            index = 0;
        }

    } else {
        index--;
        if (index < 0) {
            index = storyByP.length - 1;
        }

    }
    return switchP(index);
}, true);