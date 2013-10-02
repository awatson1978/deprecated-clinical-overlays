Meteorite package to add image and tutorial overlays, using reactive spark templates.

So, after trying probably five or six libraries for creating overlays, I said to heck with it, I'm just going to write a native overlay template for Meteor.  Dead simple, super easy to use, and works like charm.  Enjoy!

------------------------
### Installation

First, install the reactive-overlays package from the command line, like so:

````
mrt add reactive-overlays
````

------------------------
### Document Model

Second, add the reactiveOverlaysTemplate to your application, which adds the nececssary overlay templates.  In theory, you should be able to add the template just about anywhere in the application, but the recommend location is at the footer of your application container.  So, something like so:  

````
<template name="appContainerTemplate">
    <div class="app-content">
        ... my application code ...
    </div>
    {{> reactiveOverlaysTemplate }}
</template>
````

------------------------
### Controllers

The beauty of using a native spark template for creating an overlay, instead of a third party library, is the only thing you need to do is set the following Session variable, and Bam! You got an overlay!
````js
    Session.set('show_reactive_overlay', true);
````

However, people usually want more than just an overlay mask.  They want to display images and templates **on top** of that overlay mask.  Fair enough.  We expose three simple functions to manage the overlay:


````js
showImageOverlay(elementId)
showTutorialOverlay(elementId)
hideOverlay()
````

So, for instance, if you want to use a thumbnail as a trigger, and display a nice big photograph, you would want to use something like the following:

````js
Template.samplePageTemplate.events({
    'click .thumbnail-image-a': function(){
        showImageOverlay('#fullsizeImageA');
    }
});
````

**Note:  the following is untested.**
The reactive overlays should also work with a block of HTML code for creating tutorial pages.  You should be able to do something like this:

````js
Template.samplePageTemplate.events({
    'click .tutorial-icon': function(){
        showImageOverlay('#currentPageTutorial');
    }
});
````

------------------------
### License

MIT License. Use as you wish, including for commercial purposes.  
See license.mit.txt for full details.  

------------------------
### Support
Found this package to be useful?  Consider tipping the package maintainer for their time!  

[![Support via Gittip](https://raw.github.com/gittip/www.gittip.com/master/www/assets/gittip.png)](https://www.gittip.com/awatson1978/)  
