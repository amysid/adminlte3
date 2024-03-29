// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require_tree ../common
// require jquery3
// require jquery_ujs
//= require jquery_nested_form
//= require popper.min.js
//= require app
//= require jquery.slimscroll.js
//= require popper.min.js
//= require_tree ../../../../vendor/assets/javascripts
//= require_tree .

var ready = function () {
  var o;
  o = $.AdminLTE.options;
  if (o.sidebarPushMenu) {
    $.AdminLTE.pushMenu.activate(o.sidebarToggleSelector);
  }
  return $.AdminLTE.layout.activate();
};
document.addEventListener('turbolinks:load', ready);
document.addEventListener('turbolinks:reload', ready);
$(document).ready(ready);