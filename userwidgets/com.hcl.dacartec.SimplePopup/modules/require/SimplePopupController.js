define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.view.preShow = () => {
              if(!this.initDone){
                
                this.initDone = true;
                
                this.view.flxBackground.onClick = () => {
                  this.view.isVisible = false;
                  this.onClose();
                };
                this.view.flxClose.onClick = () => {
                  this.view.isVisible = false;
                  this.onClose();
                };
              }
              
            };
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      
      onClose(){}
	};
});