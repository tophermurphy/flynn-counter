$(document).ready(function(){
ion.sound({
    sounds: [
        { name: "me0" },
        { name: "me1" },
        { name: "me2" },
        { name: "me3" },
        { name: "me4" },
        { name: "me5" },
        { name: "me6" },
        { name: "me7" },
        { name: "me8" },
        { name: "me9" },
        { name: "me10" },
        { name: "me11" },
        { name: "me12" },
        { name: "me13" },
        { name: "me14" },
        { name: "me15" },
        { name: "me16" },
        { name: "me17" },
        { name: "me18" },
        { name: "me19" },
        { name: "me20" },
     
    ],
    volume: 0.8,
    path: "numbers/",
    preload: true
});    
    


var i = 0;
     $('h2#counter').text(i);
   
    $('#left').click(function(e){
        e.preventDefault();
        $.stopSound();
        if(i >= 1){
        i--;
    $('h2#counter').text(i);
            ion.sound.play('me' + i );
        }
    });
    
        $('#right').click(function(e){
            e.preventDefault();
            $.stopSound();
            if(i<=19){
        i++;
    $('h2#counter').text(i);
    ion.sound.play('me' + i );
            }
    });
});
    