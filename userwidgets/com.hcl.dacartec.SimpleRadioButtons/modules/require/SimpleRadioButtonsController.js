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
      this.view.flxButtons.removeAll();
      this.buttons.data.forEach((button) => {
        const simpleCheckButton = new com.hcl.dacartec.SimpleCheckButton({
          id: `simpleCheckButton_${button.key}`
        }, {}, {});
        simpleCheckButton.label = button.label;
        simpleCheckButton.selected = !!button.selected;
        simpleCheckButton.onSelection = (status) => {
          this.selected = button.key;
          status && this.onSelection(button.key);
        };
        if(!!button.selected){
          this.selected = button.key;
        }
        this.view.flxButtons.add(simpleCheckButton);
      });
      
      
    },


    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'buttons', () => {
        return this._buttons;
      });
      defineSetter(this, 'buttons', value => {
        this._buttons = value;
      });
      defineGetter(this, 'selected', () => {
        return this._selected;
      });
      defineSetter(this, 'selected', value => {
        this._selected = value;
        (this.view.flxButtons.widgets() || []).forEach((simpleCheckButton) => {
          simpleCheckButton.selected = simpleCheckButton.id.endsWith(`_${value}`);
        });
      });
    },
    
    onSelection(key){}
  };
});