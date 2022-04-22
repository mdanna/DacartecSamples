define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
		this.view.preShow = () => {
          if(!this.initDone){
            this.onInit();
            this.initDone = true;
          }
        };
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    
    onInit(){
      this.view.onClick = () => {
        this.view.flxDot.isVisible = !this.view.flxDot.isVisible;
        this.onSelection(this.view.flxDot.isVisible);
      };
    },

    onSelection(){},
  };
});