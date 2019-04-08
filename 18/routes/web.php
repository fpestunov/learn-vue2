<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/skills', function () {
    // it will be converted to JSON
    return ['Laravel', 'Vue', 'PHP', 'JavaScript', 'Tooling'];
});
