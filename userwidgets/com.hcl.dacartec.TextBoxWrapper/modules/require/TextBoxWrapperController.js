define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.view.preShow = () => {
              if(!this.initDone){
                
                this.view.textBox.onTextChange = () => {
                  eventManager.publish('evt_textChange', this.view.textBox.text);
                };
                
                this.initDone = true;
              }
            };
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		}
	};
});