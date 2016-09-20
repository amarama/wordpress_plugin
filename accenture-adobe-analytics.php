<?php
/*
Plugin Name: Accenture Adobe Analytics
Plugin URI: https://in.accenture.com/
Description: This widget will allow you to capture your analytics for your accenture site.
Version: 0.3
Author: Amar Rama Brisco
Author URI: https://people.accenture.com/collaboration.aspx?accountname=amar.r.brisco
License: Accenture LLP
 */

// adding versioning for the styles and scripts
define('AAA_CSS_JS_VERSION', 0.3);

require_once 'classes/class-accenture-adobe-analytics.php';

new AccentureAdobeAnalytics();

register_activation_hook( __FILE__, array( 'AccentureAdobeAnalytics', 'activateScripts' ) );
