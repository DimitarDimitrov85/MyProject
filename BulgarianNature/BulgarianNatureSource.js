 //-----AUDIO-------
       
        var mysong = new Audio('02-Rodopa.mp3');
        mysong.loop = true;
        mysong.autoplay = true;
       
        
             $(".mute").click(function(){
                  mysong.play();
                $(".mute").addClass('PausePlayHidden');
                $(".play").removeClass('PausePlayHidden');
             })
               

             $(".play").click(function(){
                mysong.pause();
                $(".mute").removeClass('PausePlayHidden');
                $(".play").addClass('PausePlayHidden');
             })
              
     
        //----------DROP MENU IN HEADER--------
        $('ul li ul li').mousedown(function(){$(this).attr('style', 'transform:  scale(0.95)')})
                        .mouseup(function(){$(this).attr('style', 'transform:  scale(1.06)')})
                        .mouseover(function(){ $(this).attr('style', 'transform:  scale(1.06)')})    
                        .mouseleave(function(){$(this).attr('style', 'transform:  scale(1)') });
                             
        
           
        
            
        
        //------------PICTURE SCROLLING IN HEADER------
        
       
        function ar(){
        setTimeout(function(){
         document.querySelector('.Picture_3').setAttribute("style", "opacity: 0; position: absolute;");  
         document.querySelector('.Picture_2').setAttribute("style", "opacity: 1; position: absolute;");          
        },2500);

        setTimeout(function(){
         document.querySelector('.Picture_2').setAttribute("style", "opacity: 0; position: absolute;") ;           
        },5000);

        setTimeout(function(){
         document.querySelector('.Picture_3').setAttribute("style", "opacity: 1; position: absolute;") ;           
        
         ar();            
        },7500);
        }; 
        ar();
        //--------VIDEO SCROLLING----------
        var move = 0;
       $('.move_left').click(function(){
            move += -1120;
            if (move ==  -2240){
                $('.move_left').attr('style', 'left: -100px');
            }
            document.querySelector('.move_right').setAttribute('style','left: 1060px')
             document.querySelector('.video_inside').setAttribute('style','margin-left: '+ move + 'px')
        }) ;  
           

       
        $('.move_right').click(function(){
              move += 1120;
            if (move == 0){
                document.querySelector('.move_right').setAttribute('style','margin-left: 100px');
            }
            document.querySelector('.move_left').setAttribute('style', 'left:5px');
            document.querySelector('.video_inside').setAttribute('style','margin-left:' + move + 'px')
        })
            
         //------------COROSEL BILKI-------
         var corosel_circle = document.querySelectorAll('.circle');
         var bilki = document.querySelectorAll('.bilka');
         var i = 0;
        
        var scroll =  setInterval(Corosel,3000);
         
         function Corosel(){
             i += 1;
             if( i == corosel_circle.length){
                 i = 0;
             }
             document.querySelector('.bilka_active').classList.remove('bilka_active');
             bilki[i].classList.add('bilka_active');
           document.querySelector('.circle_active').classList.remove('circle_active');
           corosel_circle[i].classList.add('circle_active');
         } 
         
          $('.circle').click(function(){
              i = Number($(this).attr("id"));
              $('.circle_active').removeClass('circle_active');
              $(this).addClass('circle_active');
              $(".bilka_active").removeClass("bilka_active");
             $(bilki[i]).addClass("bilka_active")
              
             
              clearInterval(scroll);
              
              scroll =  setInterval(Corosel,3000);
          })