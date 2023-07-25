$(".menu > ul > li").click(function(e){
    // hapus class active dari yang sebelumnya sudah active
    $(this).siblings().removeClass("active");
    // menambahkan class active ke button yang di klik
    $(this).toggleClass("active");
    // jika mempunyai sub menu maka buka
    $(this).find("ul").slideToggle();
    // menutup sub menu jikaterdapat sub menu lain terbuka
    $(this).siblings().find("ul").slideUp();
    // 
    $(this).siblings().find("ul").find("li").removeClass("active");
});

$(".menu-btn").click(function(){
    $(".sidebar").toggleClass("active");
});