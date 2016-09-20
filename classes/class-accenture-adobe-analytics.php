<?php
/**
 * Initial class to call the plugin
 * actions and functions
 *
 * @version 1.0
 * @author amar.r.brisco
 */
class AccentureAdobeAnalytics {
	/**
     * Widget constructor
     */
    public function __construct() {
        add_action( 'wp_enqueue_scripts', array( $this, 'activateScripts' ), 3 );
        add_action( 'plugins_loaded', function(){
            add_filter( 'site_transient_update_plugins', function ( $value )
            {
                if( isset( $value->response['accenture-adobe-analytics/accenture-adobe-analytics.php'] ) )
                    unset( $value->response['accenture-adobe-analytics/accenture-adobe-analytics.php'] );
                return $value;
            });
        });
	}
    /**
     * Loads the assets needed for the plugin to run.
     *
     */
    public function activateScripts() {
        wp_register_script('s-code-js', plugins_url() . '/accenture-adobe-analytics/js/s_code.js', array(), AAA_CSS_JS_VERSION, true);
        wp_enqueue_script('s-code-js');        
        wp_register_script('accenture-adobe-analytics-config-js', plugins_url() . '/accenture-adobe-analytics/js/accenture-adobe-analytics-config.js', array('s-code-js'), AAA_CSS_JS_VERSION, true);
        wp_enqueue_script('accenture-adobe-analytics-config-js');        

        $EID = wp_get_current_user();
        $userID = explode("@", $EID->user_email);
        $postType = get_post_type();
        $sitePath = get_site_url();
        $accConfig = ACN_ADOBE_ANALYTICS;

        wp_localize_script('s-code-js', 'aaaOmnitureConfig', array('account' => $accConfig));

        wp_localize_script( 'accenture-adobe-analytics-config-js', 'aaaServerConfigs',
                array(
                    'sitePath' => $sitePath,
                    'pageType' => $postType,
                    'userName' => $userID[0]                    
                    )
        );        
    }
}