/* Task 0 */

$('#carouselExampleControls').hide()

$.ajax({
  url: 'https://smileschool-api.hbtn.info/quotes',
  type: 'GET',
  dataType: 'json',
  success: function (res) {
    console.log(res[0].name)
    $('.div-loader').remove();
    $('#carouselExampleControls').show()
    $(".carousel-image-1").attr("src", res[0].pic_url);
    $(".carousel-p-1").text(res[0].text);
    $(".carousel-name-1").text(res[0].name);
    $(".carousel-title-1").text(res[0].title);
    $(".carousel-image-2").attr("src", res[1].pic_url);
    $(".carousel-p-2").text(res[1].text);
    $(".carousel-name-2").text(res[1].name);
    $(".carousel-title-2").text(res[1].title);
  }
});

/* Task 1 */