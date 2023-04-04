
function reload(time){
    location.reload()
}
let y = Math.floor(Math.random() * (15 - 1 + 1)) + 1
$('#in2').val(y)
let i = 3

function guess_the_number() {

    let x = Number($('#in1').val())
    i--
    $('#in3').val(i)
    if (x < Number(y)) {
        $('#result').text('Слишком мало!')
    } else if (x > Number(y)) {
        $('#result').text('Слишком много!')
    } else {
        $('#result').text('Угадали!')
        setTimeout(reload,2000)
    }
    $('#in1').val("")
    if ((i === 0) && (x === Number(y))) {
        $('#result').text('Угадали на последней попытке!')
        setTimeout(reload,2000)

    } else if (i <= 0) {
        $('#result').text('Ваши попытки закончились!')
        setTimeout(reload,2000)
    }


}

$('#but_guess').click(guess_the_number)
