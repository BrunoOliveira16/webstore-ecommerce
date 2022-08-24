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

    $('.featured-item:first h4').append('<span class="badge bg-success g-2">Novo</span>')
    $('#NewItem-01 h4').append('<span class="badge bg-success g-2">Novo</span>')
    //$('.featured-item:first h4').removeClass('active')
    //$('.featured-item:first h4').toggleClass('active')
    //$('.featured-item:first h4').hide()
    //$('.featured-item:first h4').show()
    //$('.featured-item:first h4').fadeIn(2000)
    //$('.featured-item:first h4').fadeOut()
    //$('.featured-item:first h4').click(function(){
    //  $(this).css('color', '#f00') -> Manipulação de cor do h4
    //});

    //Exemplos de seleção de elementos
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

    /* 
    * Callback
    * entendendo ações que começam ao término de outra
    */
    /* $('.featured-item:nth(1)')
        .hide(2000, function(){
        //Este é o callback
        /*alert*//*console.log( $(this).find('h4').text() + ' esgotado')
        })
        .show(2000, function(){
            console.log( $(this).find('h4').text() + ' em estoque')
        })/*

    /* 
    * Animações
    */
    /* const duracao = 1000 //

    $('.featured-item:nth(0)')
        .hide(duracao)
        .show(duracao)
        .fadeOut(duracao)
        .fadeIn(duracao)
        .toggle(duracao)
        .toggle(duracao)

    $('#form-submit').on('click', function(e){

        e.preventDefault()

        if($('#email').val() != '' ){
            $('#email').animate({
                opacity: "toggle",
                top: "-50"
            }, duracao, function(){
                console.log($(this).val())
            })

        }

    })/*

    /*
    * Ouvinte de eventos .nav-modal-open
    */
    $('.nav-modal-open').on('click', function(e){

        e.preventDefault();

        let elem = $(this).attr('rel')

        $('.modal-body').html($('#'+elem).html())
        $('.modal-header h5.modal-title').html($(this).text())

        let myModal = new bootstrap.Modal($('#modelId'))

        myModal.show()

    })

    /* Validação de campos do form 
     * - Checar se o nome é válido (mais de 2 caracteres)
     * - Checar se o email é válido com ao menos um "@" e "."
     * - Checar se o CPF é válido com regex
     */
    function validate(elem) {
        if(elem.val() == ''){

            console.log('os campo de '+ elem.attr('name') + ' é obrigatório')
            elem.parent().find('.text-muted').show()
            elem.addClass('invalid')

            return false
        } else {
            elem.parent().find('text-muted').hide()
            elem.removeClass('invalid')

        }
    }

    /* Validação de submit do form */
    $('body').on('submit', '.modal-body .form', function(e){
        
        e.preventDefault()

        const inputName = $('#nome')
        const inputEmail = $('#email')

        validate(inputName)
        validate(inputEmail)

        if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
            console.log('verificar campos obrigatórios')
            return false
        } else {
            $(this).submit()
        }        

    })

    /* disparo para validação do campo por meio do blur */
    $('body').on('blur', '#nome', function(){
        validate($(this))
    })

    $('body').on('blur', '#email', function(){
        validate($(this))
    })

    /* disparos com utilização de plugin jQuery Mask */
    $('body').on('focus', '#date', function(){
        $(this).datepicker()
    })
    
    $('body').on('blur', '#date', function(){
        validate($(this))
        $(this).mask('00/00/0000');
    })

    $('body').on('blur', '#time', function(){
        validate($(this))
        $(this).mask('00:00:00');
    })
    
    $('body').on('blur', '#cep', function(){
        validate($(this))
        $(this).mask('00000-000');
    })
    
    $('body').on('blur', '#phone', function(){
        validate($(this))
        $(this).mask('(00)00000-0000');
    })
    
    $('body').on('blur', '#cpf', function(){
        validate($(this))
        $(this).mask('000.000.000-00');
    })


});