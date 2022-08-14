// instancia jQuery e evita conflitos
// jQuery(function($){
 $(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag

    let itens = $('.featured-item') //class
    
    let features = $('#featured') //id

    console.log(titulos.first());

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
    //$('.featured-item:first h4').removeClass('active')
    //$('.featured-item:first h4').toggleClass('active')
    //$('.featured-item:first h4').hide()
    //$('.featured-item:first h4').show()
    //$('.featured-item:first h4').fadeIn(2000)
    //$('.featured-item:first h4').fadeOut()
    $('.featured-item:first h4').click(function(){
        $(this).css('color', '#f00')
    });
    //$('.featured-item:first h4').css({
    //    'color': '#f00',
    //    'background': '#ff0',
    //    'font-weight': '100'
    //})

    //$('.featured-item').mouseenter(function(){
    //  console.log($(this).find('h4').text());
    //});

    //$('.featured-item').hover(function(){
    //  console.log($(this).find('h4').text());
    //},
    //  function(){
    //      console.log($(this).find('h4').text() + ' - ' + $(this).find(h6).text());
    //});

    /* Manipulação de evento */
    $('.featured-item a').on('click', function(event){

        event.preventDefault();

        alert('Produto esgotado');

    })

});

