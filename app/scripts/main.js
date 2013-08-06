require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'
    }
});

require(['app', 'jquery'], function (app, $) {
    'use strict';
    // use app here

    var date = new Date();
    var year = date.getFullYear();
    $('#copy-year').html(year);
});
