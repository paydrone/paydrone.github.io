
var folder = 'bronwyn';

var fileNames = new Array();
    $.ajax({
      url: "/images/" + folder,
      success: function(data){
         $(data).find("td > a").each(function(){
            if(openFile($(this).attr("href"))){
                fileNames.push($(this).attr("href"));
            }
         });
      }
    });
    console.log(fileNames);


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
});
