<?php 

 #  Basename
 $filename = explode("/",$_SERVER['SCRIPT_NAME']);
 $extension = strtolower(array_pop($filename));
 $basename = basename($extension, ".php");

?>

<!doctype html>
<html class="no-js" lang="en">
<head>
    <meta charset="utf-8">
    <title>WDIM</title>

    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="Joaquim Rosa">
    <meta name="generator" content="Manufactured Code">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="assets/dist/css/main.css" />
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css" />

    <!-- IOS -->
    <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1.0, user-scalable=no">

    <!-- Favicon -->

    <!-- Facebook -->
    <meta property="og:url" content="">
    <meta property="og:site_name" content="">
    <meta property="og:locale" content="pt_PT">
    <meta property="fb:admins" content="1658029422">
    <meta property="og:title" content="">
    <meta property="og:description" content="">
    <meta property="og:type" content="website">
    <meta property="og:image" content="">

</head>
    <body class="<?= $basename ?>">

