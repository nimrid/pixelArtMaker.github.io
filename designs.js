// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);

}) 

function makeGrid(row, column) {
// Your code goes here!
    $('tr').remove();
    for (var i = 1; i <= row; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for(var j = 1; j <= column; j++){
            $('#table' + i).append('<td></td>');
        }
    }
    //add color to cell
    $('td').click(function addColor() {
        color = $('#colorPicker').val();
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
    


