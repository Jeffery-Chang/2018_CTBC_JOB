var menuCtrl = {
    init(){
        this.menuBar();
    },
    menuBar(){
        var menu = $('#top .indexPage li');
        menu.click(function(e){
            e.preventDefault();
            var index = $(this).index();
            var active = $(this).hasClass('active');

            if(active) return;

            console.log('index:', index, 'active:', active);

            switch(index){
                case 0:
                    trackWaitJump('', 'index.html');
                    break;
                case 1:
                    break;
                case 2:
                    trackWaitJump('', 'funds.html');
                    break;
                case 3:
                    window.open('https://www.facebook.com/', '_blank');
                    break;
            }
        });
    },
    scrollPage(pos){
        var final = pos || 0;
        $('html, body').stop().animate({ scrollTop: final }, 500);
    }
}

$(function() {
    menuCtrl.init();
});