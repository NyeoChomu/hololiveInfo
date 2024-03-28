var Link = {
    SetColor:function(color){
        // var alist = document.querySelectorAll('#list a');
        // var i = 0;
        // while (i < alist.length){
        //     alist[i].style.color = color;
        //     ++i;
        // }
        $('#list a').css('color', color);
    }
}
var Body = {
    SetColor:function(color){
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    SetBackgroundColor:function(color){
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    },
}

function nightDayHandler(self){
    var target = document.querySelector('body');
    if (self.value === '야간모드 on'){
        Body.SetBackgroundColor('rgb(50,50,50)');
        Body.SetColor('white');
        Link.SetColor('white');

        self.value = '야간모드 off';
    }
    else {
        Body.SetBackgroundColor('white');
        Body.SetColor('black');
        Link.SetColor('black');

        self.value = '야간모드 on'
    }
}