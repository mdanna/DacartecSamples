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

    onInit(){
      this.view.onClick = () => {
        this.onSelection(this.key);
      };
    },

    initGettersSetters: function() {
      defineGetter(this, 'key', () => {
        return this._key;
      });
      defineSetter(this, 'key', value => {
        this._key = value;
      });
    },

    onSelection(){}
  };
});