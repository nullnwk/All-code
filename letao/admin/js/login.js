/**
 * Created by Administrator on 2017/12/2.
 */
$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
})


var flag = true;
$(".header-l").on("click", function () {
    if(flag){
        $(".com-l").hide();
        $(".com-r").css("padding","10px 10px 20px 10px");
        $(".header-l").css("position","fixed");
        flag = false;
    }else{
        $(".com-l").slideDown(1000);
        $(".com-r").css("padding","10px 10px 20px 190px");
        $(".header-l").css("position","");
        flag = true;
    }
});