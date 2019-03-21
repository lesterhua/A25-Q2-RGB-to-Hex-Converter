const input = document.querySelectorAll('[data-number="number"]')
const inputRed = document.querySelector('#color-red')
const inputGreen = document.querySelector('#color-green')
const inputBlue = document.querySelector('#color-blue')
const button = document.querySelector('.btn-primary')
const hexNum = document.querySelector('#hex-number')
const hexColor = document.querySelector('.hex-color')


//顯示輸入顏色
input.forEach(item => item.addEventListener('keyup', displayColor))
function displayColor(num) {
    let dataColor = num.target.dataset.color
    let red = 0
    let green = 0
    let blue = 0
    let changeTarget = document.querySelector(`.display-${dataColor}`)
    if (dataColor === 'red') {
        red = num.target.value
    } else if (dataColor === 'green') {
        green = num.target.value
    } else if (dataColor === 'blue') {
        blue = num.target.value
    }

    changeTarget.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

}

//判斷是否為輸入為空、0~255和非數字 , 顯非hex顏色和數字
button.addEventListener('click', function () {
    let r = inputRed.value
    let g = inputGreen.value
    let b = inputBlue.value
    console.log([r, g, b])
    checkNum([r, g, b])
})

function checkNum([r, g, b]) {
    if (r < 0 || r > 255 || r.length === 0 || isNaN(r) === true) {
        alert('請輸入0~255數字')
    } else if (g < 0 || g > 255 || g.length === 0 || isNaN(g) === true) {
        alert('請輸入0~255數字')
    } else if (b < 0 || b > 255 || b.length === 0 || isNaN(b) === true) {
        alert('請輸入0~255數字')
    } else {
        hexColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        hexNum.value = convertHex(r, g, b)
        console.log(hexNum.value)
    }
}

//轉16進制
function convertHex(r, g, b) {
    return hex(r) + hex(g) + hex(b)
}

function hex(i) {
    let hex = Number(i).toString(16)
    if (i < 16) {
        hex = '0' + hex
    }
    return hex
}