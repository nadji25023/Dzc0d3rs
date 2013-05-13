<?php

$options = array(
    array(
        "name" => __("General Settings", "incount_admin"),
        "type" => "title",
        "sub-menu" => "Basic, Favicon"
    ),
    array(
        "name" => __("Basic", "inpress_admin"),
        "type" => "start",
    ),
    array(
        "name" => __("Responsiveness", "inpress_admin"),
        "id" => THEME_SHORTNAME . "-responsive-activator",
        "type" => "toggle",
        "default" => "true",
        "alternate" => 'alternate',
        "desc" => "Select if you want to active or not the responsive",
    ),
    array(
        "name" => __("Theme Layout", "inpress_admin"),
        "id" => THEME_SHORTNAME . "-site-layout",
        "type" => "select",
        "default" => "Stretched",
        "radio_image" => "true",
        "desc" => "Select your layout theme between Stretched view or boxed view",
        "options" => array(
            "wide" => "Stretched",
            "boxed" => "Boxed"
        ),
    ),
    array(
        "name" => __("Header Code", "inpress_admin"),
        "id" => THEME_SHORTNAME . "-header-code",
        "type" => "richtext",
        "rich" => false,
        "default" => '',
        "desc" => "The following code will add to the <head> tag. Useful if you need to add additional scripts such as CSS or JS. ",
    ),
    array(
        "name" => __("Footer Code", "inpress_admin"),
        "id" => THEME_SHORTNAME . "-footer-code",
        "type" => "richtext",
        "rich" => false,
        "default" => '',
        "desc" => "The following code will add to the footer before the closing </body> tag. Useful if you need to Javascript or tracking code like google analytics.",
    ),
    array(
        "type" => "end",
        "id" => "save_plugin_options"
    ),
    array(
        "name" => __("Favicon", "inpress_admin"),
        "type" => "start"
    ),
    array(
        "name" => __("Custom Favicon", "inpress_admin"),
        "id" => THEME_SHORTNAME . "-favicon",
        "type" => "upload",
        "default" => '',
        "size" => "50",
        "desc" => "Upload your desired favicon image."
    ),
    array(
        "name" => __("Custom Gravatar", "inpress_admin"),
        "id" => THEME_SHORTNAME . "-gravatar",
        "type" => "upload",
        "default" => '',
        "size" => "50",
        "desc" => "Upload your desired gravatar image."
    ),
    array(
        "name" => __("Apple iPhone Icon", "inpress_admin"),
        "id" => THEME_SHORTNAME . "-apple-iphone-icon",
        "type" => "upload",
        "default" => '',
        "size" => "50",
        "desc" => "Upload your desired iPhone Icon."
    ),
    array(
        "name" => __("Apple iPhone Retina Icon", "inpress_admin"),
        "id" => THEME_SHORTNAME . "-apple-iphone-retina-icon",
        "type" => "upload",
        "default" => '',
        "size" => "50",
        "desc" => "Upload your desired iPhone Retina Icon."
    ),
    array(
        "name" => __("Apple iPad Icon", "inpress_admin"),
        "id" => THEME_SHORTNAME . "-apple-ipad-icon",
        "type" => "upload",
        "default" => '',
        "size" => "50",
        "desc" => "Upload your desired iPad Icon."
    ),
    array(
        "name" => __("Apple iPad Retina Icon", "inpress_admin"),
        "id" => THEME_SHORTNAME . "-apple-ipad-retina-icon",
        "type" => "upload",
        "default" => '',
        "size" => "50",
        "desc" => "Upload your desired iPad Retina Icon."
    ),
    array(
        "type" => "end",
        "id" => "save_plugin_options"
    ),
);

return array(
    'name' => 'general',
    'options' => $options
);
?>
