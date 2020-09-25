$(document).ready(function() {
    $('#check').click(function() {
        $(this).hide(2000)
        document.querySelector('strong').style.color = 'blanchedalmond'
    })

    $('#test').click(function() {
        $('button').hide('slow')
        $('#div').fadeIn(2000);
        document.querySelector('strong').style.color = 'white'

    })

    $('strong').on({
        mouseenter: function() {
            $(this).animate({

                opacity: '0.8',
                color: 'red'
            });
        },
        mouseleave: function() {
            $(this).animate({

                opacity: '0.5',
                color: 'white'
            });
        },
        click: function() {

            document.body.innerHTML += '<strong>Hey! Successfully clicked.. <em>good job</em></strong>'
        }
    })

    $("#hide").click(function() {
        $("p").slideToggle(2000);
    });

    $('#button').on({
        click: function() {
            $("#div1").slideToggle(1000);
            $("#div2").slideToggle(2000);
            $("#div3").slideToggle(3000);
        },
        mouseenter: function() {
            $('#card1').animate({ top: '-=30px', left: '-=350px', opacity: '1' }, 3000)
        },
        mouseleave: function() {
            $('#card1').animate({ top: '+=30px', left: '+=350px', opacity: '0.7', width: 'toggle', height: 'toggle' }, 3000)
        }
    })

    $('#card2').mouseenter(function() {
        $(this).animate({
            transform: 'scale(1.5)',
            transition: '1.5s'
        });
    })

    $('#card1').mouseenter(function() {
        $(this).animate({
            transform: 'scale(1.5)',
            transition: '3s'
        }, 4000);
    })
    $('#game').hide()
    $('#card3').mouseenter(function() {
        $(this).hide(1550)
        $('#game').fadeIn(1500)
    })
    let i = 0
    var game = document.getElementById('count')
    $('#game').click(function() {
        $('#card3').show(1500, function() {
            game.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You have finished the game " + i + " times.</div>"
        })
        $('#game').fadeOut()
        i++
    })

    $('#stop').click(function() {
        $('#div1').stop()
        $('#div2').stop()
        $('#div3').stop()
    })

    $('#card4').mouseenter(function() {
        $(this).css('background-color', '#a12eff').slideUp(1500).slideDown(1500)
    })
    $('#card4').mouseleave(function() {
        $(this).css('background-color', '#f03232').slideUp(1500).slideDown(1500)
    })
    let j = 0
    $('#infosubmit').click(function() {
        ++j
        $('#writeinhere').append(j + '&nbsp' + $('#info').val() + '<br>')
        $('#writeinhere').parent().css({ 'color': 'black', 'border': '0' })
    })
    $('#emptyinput').click(function() {
        $('#writeinhere').empty()
        $('#writeinhere').parent().css({ 'color': 'red', 'border': '0.3em solid black' })
        j = 0
    })
    $('#ajax').click(function() {
        $.get('http://127.0.0.1:8080/test.txt', function(data, status) {
            alert(data + '\n' + status)
        });
    })
    $("#testajaxbutton").click(function() {
        $.get("http://127.0.0.1:8080/demo_test.asp", function(data, status) {
            alert(data + '\n' + status)
        });
    });

})