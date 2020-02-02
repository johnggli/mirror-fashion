// $('.novidades button').click(function() {
//     $('.novidades').toggleClass('painel-aberto');
// });


// $('.mais-vendidos button').click(function() {
//     $('.mais-vendidos').toggleClass('painel-aberto');
// });


$('.painel button').click(function() {
    $(this).parent().toggleClass('painel-aberto');
});