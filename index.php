<html>
  <head>
    <meta charset="utf-8">
    <title>抽水器</title>
    <link rel="stylesheet" type="text/css" href="./assets/styles/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="./assets/styles/main.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="./assets/js/main.js"></script>
    <script src="./assets/js/jscolor/jscolor.js"></script>
  </head>
  <body>
    <div class="container">
      <h3 class="text-center">抽水器</h3>
      <div id="image-list" class="center-div">
        <textarea id="textarea" class="textarea-element" rows="4" cols="50" onKeyUp='showDialog()'>
Example</textarea>
        Horizontal: <input type="number" name="x-position"
           min="0" max="10000" step="1" value="20" id="x-pos">
        </br>
        Vertical: <input type="number" name="y-position"
           min="0" max="10000" step="1" value="40" id="y-pos">
        </br>
        Font Size: <input type="number" name="font-size"
           min="0" max="200" step="1" value="40" id="font-size" onchange='changeSize()'>
        </br>
        Color: <input class="color" value="ffffff" id="color-picker" onchange='changeColor()'>
        </br>
        </br>
      </div>
      <div id="dragandrophandler" class="center-div">
        </br></br>
        <h4 class="text-center" style="color: red;">Drag image here (Best 600*800)</h4>
      </div>
    </div>
  </body>
</html>
