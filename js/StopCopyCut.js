<script src="jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function () {
    //Disable cut copy paste
    $('body').bind('cut copy', function (e) {
        e.preventDefault();
    })
   
    //Disable mouse right click
    $("body").on("contextmenu",function(e){
        return false;
    })
});
</script>