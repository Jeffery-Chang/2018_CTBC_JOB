var fundsCtrl = {
    init(){
        $('#top .indexPage li:eq(1)').click(function(e){
            e.preventDefault();
            trackWaitJump('', 'index.html?from=1');
        })
    }
}

$(function() {
    fundsCtrl.init();
});