function heightDetect(){
$(".head_height").css("height",$(window).height());
};

$(document).ready(function(){
heightDetect();
});
$(window).resize(function(){
heightDetect();
});
