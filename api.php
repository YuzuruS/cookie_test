<?php
header("Content-Type: text/javascript; charset=utf-8");
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:Origin, X-Requested-With, Content-Type, Accept');
ini_set('log_errors', 'On');
ini_set('error_log', '~/Desktop/error.log');
error_log(print_r($_COOKIE,true));
