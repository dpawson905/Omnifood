/*jslint browser: true*/
/*global $, jQuery*/

$(document).ready(function() {
  'use strict'
  const footerYear = new Date().getFullYear()
  $('#year').html(footerYear)
})
