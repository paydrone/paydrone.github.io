$('#navi').load('naviTemplate.html');

var filename = location.pathname.split('/').slice(-1)[0]
filename = filename.substring(0, filename.indexOf('.'))
var quantity = parseInt($('#gridItems').attr('quantity'));
console.log(quantity);

for (i=1; i<=quantity; i++) {
    $('#gridItems').append(
        `<div class='grid-item'>
          <a href='images/`+filename+`_fullsize/`+i+`.jpg' data-fancybox='`+filename+`'>
            <img src='images/`+filename+`/`+i+`.jpg' />
          </a>
        </div>`
    )
}

// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer',
  gutter: 5,
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
  $("grid-item").fadeIn(900);
});
