$(document).ready(function(){

    //Javascript for specials page
    var date = new Date();
    var todaydate = date.getDay()-1;
    //move the item that matches the day to the front
    $(".container").children().eq(todaydate).css("order",-1);
    //end of specials page

    //javascript for contest page
    var clicks = 0;
    var order = [1,2,3,4,5,6,7,8,9,10,11,12];

    //hide play again button 
    $('.playagain').hide();

    var counter = 3;
    
    //start game click function
    $('.startgame').click(function(){
        //disable the start game button
        $('.startgame').attr("disabled",true);

        //sort the order array into a random order
        order.sort(function(a,b){return 0.5 - Math.random()});

        //for each element of the now random array do a function
        order.forEach(orderthethings);

        //for each item add the css property order with a value from the array
        function orderthethings(item,index){
            $('.card').eq(index).css('order',item);
        }//end oderthethings function

        //variable to set the timer to this number
        var num = 300;

        //countdown function
        function countdown()
        {
            //if the timer reaches 0 stop the interval and stop them from 
            if(num <= 0){
                clearInterval(timer);
                
                $('.card').off('click');
                $('.output').html("OUT OF TIME!");
                $('.playagain').show();
                return;

            }//end if
            
            num--;

            //display timer on screen and convert ms to seconds
            $('#numbers').html(parseInt(num)/100);
        }//end countdown function

        //timer variable
        var timer = setInterval(countdown,10);

        //for every card that is clicked add the animation
        $('.card').click(function(){
            $(this).addClass("animate");
            //disable the click function for this card 
            $(this).off('click');
            clicks ++;
        
            //if the user clicks a total of two times
            if(clicks === 2){
                $('.card').off('click');
                $('.output').html("OUT OF CLICKS!");
                clearInterval(timer);
                $('.playagain').show();
            }//end if
        });   
            
        //if user clicks the correct card
        $('#correct-click').click(function(){
            $('.card').off('click');
            $('.output').html("Correct! Play again to find the second one!");
            //stop timer
            clearInterval(timer);
            //show the playagain button
            $('.playagain').show();
        });//end correct click 

        $('.playagain').click(function(){
            $('.output').html("");
            //disable playagain button
            $('.playagain').attr("disabled",true);
            //change correct image to wrong image
            $('#correct-img').attr('src','images/jungle-pic.svg');
            //animate card if clicked
            $('.card').click(function(){
                $(this).addClass("animate");
            });
            //new timer is for 5 seconds
            num = 500;

            timer = setInterval(countdown,10);

        });//end play again click
    });//end start game click
        
    
});//end on load