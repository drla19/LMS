function closeWindow(id) {
    jQuery("#"+id).fadeOut("fast");
    jQuery("#overlay").removeClass("in").addClass("out");
    jQuery("#overlay").remove();
    jQuery("#activeWindow").html("");
}

function showWindow(id) {
    jQuery("body").append('<div class="modal-backdrop fade in" id="overlay" style="opacity: 0.4"></div>');
    jQuery("#"+id).fadeIn("fast");
    afterShow(id);
}

function afterShow(id) {
    switch(id) {
        case "newproject":
            jQuery("#c_error_box").html("");
        break;
    }
    
    jQuery("#activeWindow").html(id);
}