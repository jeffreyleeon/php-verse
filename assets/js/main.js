function showDialog(){
  var textarea = $("#textarea");
  var text = textarea.val();
  $("#customText").text('"' + text + '"');
}

function changeColor() {
  var color = $("#color-picker").val();
  var text = $("#customText");
  text.css('color', '#'+color);
}

function changeSize() {
   var text = $("#customText");
   var x = $("#font-size").val();
   text.css('font-size', x);
}

function handleFileUpload(files, obj) {
  for (var i = 0; i < files.length; i++) {
    var fd = new FormData();
    fd.append('file', files[i]);
    var list = document.getElementById("image-list");
    var cell = document.createElement("td");
    var img = document.createElement("img");
    var customHeader = document.createElement("h1");
    customHeader.id = "customText";
    var t = document.createTextNode("Hello World");
    img.classList.add("obj");
    img.file = files[i];
    customHeader.appendChild(t);
    cell.setAttribute("valign", "bottom");
    cell.style["position"] = "relative";
    customHeader.style["position"] = "absolute";
    customHeader.style["top"] = "0px";
    customHeader.style["font-family"] = "Arial Black";
    cell.appendChild(img);
    cell.appendChild(customHeader);
    list.appendChild(cell);

    var reader = new FileReader();
    reader.onload = (function (aImg) { return function (e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(files[i]);
  }
  $("#dragandrophandler").hide();
  $("#image-list").css("height", "600px");
  showDialog();
}

$(document).ready(function () {
var obj = $("#dragandrophandler");
obj.on('dragenter', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).css('border', '2px solid #0B85A1');
});
obj.on('dragover', function (e) {
    e.stopPropagation();
    e.preventDefault();
});
obj.on('drop', function (e) {

    $(this).css('border', '2px dotted #0B85A1');
    e.preventDefault();
    var files = e.originalEvent.dataTransfer.files;

    //We need to send dropped files to Server
    handleFileUpload(files, obj);
});
$(document).on('dragenter', function (e) {
    e.stopPropagation();
    e.preventDefault();
});
$(document).on('dragover', function (e) {
    e.stopPropagation();
    e.preventDefault();
    obj.css('border', '2px dotted #0B85A1');
});
$(document).on('drop', function (e) {
    e.stopPropagation();
    e.preventDefault();
});

$(':input[type="number"]').bind("input",function () { 
   var text = $("#customText");
   var x = $("#x-pos").val();
   var y = $("#y-pos").val();
   text.css('margin-left', x);
   text.css('margin-top', y);
});

});
