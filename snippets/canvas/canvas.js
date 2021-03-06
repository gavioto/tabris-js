tabris.load(function() {

  var page = tabris.create("Page", {
    title: "Canvas",
    topLevel: true
  });

  var canvas = tabris.create("Canvas", {
    layoutData: {left: 10, top: 10, right: 10, bottom: 10}
  }).on("change:bounds", function() {
    var bounds = this.get("bounds");
    var ctx = tabris.getContext(canvas, bounds.width, bounds.height);
    ctx.strokeStyle = "rgb(78, 154, 217)";
    ctx.lineWidth = 10;
    ctx.moveTo(20, 20);
    ctx.lineTo(bounds.width - 40, bounds.height - 40);
    ctx.stroke();
  }).appendTo(page);

  page.open();

});
