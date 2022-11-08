
var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var pallete = ['#B0F81F', '#7CBA00', '#E5FC23', '#FFD300', '#00A100', '#00DE00','#3AD08C', '#00EC81', '#00E7E7','#0089EA', '#0752FF', '#EE01FF','#FF00BF', '#AA03FF', '#F9B446','#FF9C00', '#EC425D', '#FF0028','#F9E946', '#DAFA99', '#D2F983','#BB95E7', '#E08DE6', '#FF1800'];

const warning = confirm('WARNING: This application contains flashing/changing lights and colors that may cause nausea or seizures for some.')

$(document).on('keydown', function(event){
    var randColor = pallete[Math.floor(Math.random() * pallete.length)] ;
    if(letters.includes(event.key)) {

        $('#text-display').text(event.key);
        $('#bg').css('background-color', randColor)
    }
})

$(document).on('keyup', function(event) {
    $('#text-display').text(':)');
    $('#bg').css('background-color', 'white')
})