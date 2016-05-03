define(function (require,exports,module) {
  var $ = require('$')
  var store = require('store')
  function bindDrop(){
    var dropbox = document.getElementById("todoapp");
    dropbox = $('.dropdown')[0];
    dropbox.addEventListener("dragenter", dragenter, false);
    dropbox.addEventListener("dragover", dragover, false);
    dropbox.addEventListener("drop", drop, false);
  }
  function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  function dragover(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  function drop(e) {
    e.stopPropagation();
    e.preventDefault();
    var dt = e.dataTransfer;
    var files = dt.files;
    if(files.length)
    {
      var file = files[0];
      var reader = new FileReader();
      reader.onload = function()
      {
        var store = require('store')
        store.set('urls', eval("(" + this.result + ")"));
        window.location.reload();
      };
      reader.readAsText(file);
    }
  }
  bindDrop();
});
