define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
            defineGetter(this, 'key', () => {
                return this._key;
            });
            defineSetter(this, 'key', value => {
                this._key = value;
            });
        }
	};
});