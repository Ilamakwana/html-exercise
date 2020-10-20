$(document).ready(function() {
    $('.preview').hover(function () {
        // console.log("hi");
        $('#image').css("background-image","url("+ this.src+ ")");
        $('#image').text(this.alt);

    });
});