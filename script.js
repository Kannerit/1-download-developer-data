console.log('script is running');
$(document).ready(function () {
    $('#button').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            let info = $('<div>');
            info.html(`
                Name: ${data.imie} <br>
                Job: ${data.zawod} <br>
                Firma: ${data.firma} <br>
            `)
            $('body').append(info);
        })
    });
})


