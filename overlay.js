//---------------------------------------------------------------------
// Overlay Parameters

Session.set('show_reactive_overlay', false);

Session.set('show_overlay_image', false);
Session.set('overlay_image_path', 'images/placeholder-240x240.gif');

Session.set('show_overlay_template', false);
Session.set('overlay_template_reference_id', null);


//---------------------------------------------------------------------
// TEMPLATE INPUTS


Template.reactiveOverlaysTemplate.helpers({
  isVisible: function(){
    if(Session.get('show_reactive_overlay')){
        return true;
    }else if (Session.get('show_overlay_image')){
        return true
    }else{
        return false;
    }
  },
  isImageVisible: function () {
    if(Session.get('show_overlay_image')){
        return '';
    }else{
        return 'hidden';
    }
  },
  isTemplateVisible: function () {
    if(Session.get('overlay_template_reference_id') != null){
        return '';
    }else{
        return 'hidden';
    }
  },
  imageSrc: function () {
    if(Session.get('overlay_image_path') != null){
        return Session.get('overlay_image_path');
    }else{
        return 'images/placeholder-240x240.gif';
    }
  },
});
Template.reactiveOverlaysTemplate.rendered = function(){
    if(Session.get('show_overlay_image')){
        $('.overlay-image').css('left', (window.innerWidth / 2));
        //$('.overlay-image').css('top', '50px');
    }else if(Session.get('show_overlay_template')){
        $('#overlayTemplate').append($(Session.get('overlay_template_reference_id')).html())
    }
}


//---------------------------------------------------------------------
// TEMPLATE INPUTS

Template.reactiveOverlaysTemplate.events({
    'click .overlay-mask': function(evt){
        hideOverlay();
    },
    'click .overlay-image': function(evt){
        hideOverlay();
    }
});


//---------------------------------------------------------------------
// API Functions

showImageOverlay = function(elementId){
//    $(elementId).removeClass('hidden');
//    Session.set('overlay_image_id', elementId);
    Session.set('overlay_image_path', $(elementId).attr('src'));
    Session.set('show_reactive_overlay', true);
    Session.set('show_overlay_image', true);
};
showTutorialOverlay = function(elementId){
    Session.set('overlay_template_reference_id', elementId);
    Session.set('show_reactive_overlay', true);
    Session.set('show_overlay_template', true);
};
hideOverlay = function(){
//    $(Session.get('overlay_image_id')).addClass('hidden');
    Session.set('show_overlay_image', false);
    Session.set('show_overlay_template', false);
    Session.set('show_reactive_overlay', false);
}
