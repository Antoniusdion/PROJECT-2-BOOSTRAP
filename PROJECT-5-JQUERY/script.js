$(document).ready(function(){
    //Using ID
    $('#one-click').click(function(){
        $(this).hide();
    });

    //Using Class
    $('.double-click').dblclick(function(){
        $(this).hide();
    })

    //Change
    $('.input-name').change(function(){
        $('.alert-name').show();
    })  
    
     //Blur
     $('.input-address').blur(function(){
        $('.alert-address').show();
    })
    
    //Event Result
    $('button').click(function(){
        return "Hello World" 
    }) 
    $('button').click(function(event){
        $('h5').html(event.result)
    })

    //Event Data
    // $('li').each(function(i){
    //     $(this).on('click', {x:i}, function(event){
    //         alert("List" + $(this).index() + ". adalah date ke: " + event.data.x)
    //     })
    // })

    // Event pageX pageY
    $(document).mousemove(function(event){
        $('.pointer-count').text('X:' + event.pageX + ",Y:" + event.pageY)
    })

    // Event prevenDefault
    $('.link-disabled').click(function(event){
        event.preventDefault()
    })

    // Event Type
    // $('h4').on('click dblclick mouseover mousecount', function(event){
    //     $('div').html('Event: ' + event.type)
    // })

    // Show Hide
    $('#show').click(function(){
        $('.text').show()
    })

    $('#hide').click(function(){
        $('.text').hide()
    })
    
    $('#toggle').click(function(){
        $('.text').toggle()
    })  

    $('.clickToSmall').click(function(){
        $('.box').animate({
            width: "100px",
            height: "100px",
            marginLeft: "500px"
        }, 500)
    })

    $('.clickToBig').click(function(){
        $('.box').animate({
            width: "300px",
            height: "300px",
            marginLeft: "0px"
        }, 500)
    }) 
    
    $('.fadeOut').click(function(){
        $('.boxFadeTo').fadeOut(500)
    })

    $('.fadeIn').click(function(){
        $('.boxFadeTo').fadeIn(500)
    })

    //Product Tabs
    $('.product-showcase-item').hide()
    $('.product-showcase-item:first').show()

    $('#options li a:not(:first)').addClass('inactive')
    $('#options li a').click(function(){
        const n = $(this).attr('id')
        if($(this).hasClass('inactive')){
            $('#options li a').addClass('inactive')
            $(this).removeClass('inactive')

            $('product-showcase-item').hide()
            $('#' + n + 'content').fadeIn(500)
        }
    })
});