he.hidden = true;

function func() {
    test.style.background = !test.style.background;
    test.style.width = '100%'
    test.style.zindex = '-1'
    he.hidden = !he.hidden
    window.scrollTo(0, 0)
    let centerX = document.documentElement.clientWidth / 2;
    let centerY = document.documentElement.clientHeight / 2;

    let elem = document.elementFromPoint(centerX, centerY);

    elem.style.background = "rgb(11,22,33)";
    alert(elem.tagName);

}
input.hidden = true

function f1() {
    document.querySelector('.div').innerHTML = "HEy , I'm ADitya"
    document.querySelector('.div').style.height = '30px'
    document.querySelector('.div').style.width = '150px'
    document.querySelector('.div').style.border = '200px'
    document.querySelector('.div').style.background = 'aqua';
    he.hidden = false
    check.checked = false
}

function f2() {
    input.hidden = false
    input.placeholder = 'Insert your name in here'
    change.value = 'Submit my name..'
    change.style.background = 'blue'
    change.style.border = '0ex'
    change.style.height = '40px'
    c2.hidden = false
    c2.value = 'Click me to animate the submit button'

}


c2.hidden = true
document.body.say()
document.documentElement.say()
let i = 0

function f3() {
    document.getElementById('change').className = 'rot'
    setTimeout(() => { document.getElementById('change').className = '' }, 7000)
    let div = document.createElement('div')
    div.className = 'alert'
    div.innerHTML = '<b>Hey There</b>, you have successfully completed the animation'
    document.body.prepend(div)
    check.checked = !check.checked
        ++i
    test.insertAdjacentHTML('afterbegin', `<h2>Hello aditya ${i}</h2>`)
    setTimeout(() => div.remove(), 3000)

}

function f5() {
    click.className = 'rot'
    setTimeout(() => { click.className = '' }, 7020)
}
document.body.style.background = prompt('What background would you like?')

function f6() {
    let div = document.createElement('div')
    div.className = 'alert'
    div.innerHTML = 'You have successfully registered &#128516;'
    document.body.prepend(div)
    setTimeout(() => div.remove(), 4000)
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML += this.value;
}