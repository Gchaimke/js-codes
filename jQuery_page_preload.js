<style>
.loader{
	background: none repeat scroll 0 0 #ffffff;
	bottom: 0;
	height: 100%;
	left: 0;
	position: fixed;
	right: 0;
	top:0;
	width: 100%;
	z-index: 9999;
}
.loaderInner{
	background-image: url("../img/load.gif");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	background-color: #fff;
	height: 60px;
	width: 60px;
	margin-top: -30px;
	margin-right: -30px;
	left: 50%;
	right: 50%;
	position: absolute;
}
</style>

$(window).load(function(){
$(".loader_inner").fadeOut();
$(".loader").delay(400).fadeOut('slow');
});
