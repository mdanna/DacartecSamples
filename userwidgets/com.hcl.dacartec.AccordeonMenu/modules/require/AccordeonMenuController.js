define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        if(!this.initDone){
          this.loadMenuItems();
          
          this.view.flxIcon.onClick = () => {
            this.toggleMenu(!this.view.lblDown.isVisible);
          };
          this.initDone = true;
        }
        
        this.view.lblUp.isVisible = true;
        this.view.lblDown.isVisible = false;
        this.view.flxItems.height = 0;
      };

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'menuItems', () => {
        return this._menuItems;
      });
      defineSetter(this, 'menuItems', value => {
        this._menuItems = value;
      });
    },

    loadMenuItems(){
      this.view.flxItems.removeAll();
      this.menuItems.data.forEach((menuItem, index) => {
        const accordeonMenuItem = new com.hcl.dacartec.AccordeonMenuItem({
          id: `accordeonMenuItem_${index}`
        }, {}, {});
        accordeonMenuItem.key = menuItem.key;
        accordeonMenuItem.icon = menuItem.icon;
        accordeonMenuItem.label = menuItem.label;
        accordeonMenuItem.onClick = () => this.onItemSelection(menuItem.key);
        this.view.flxItems.add(accordeonMenuItem);
      });
    },
    
    toggleMenu(open){
      this.view.lblUp.isVisible = !open;
      this.view.lblDown.isVisible = open;
      
      const menuHeight = 50 * this.menuItems.data.length;
      
      const self = this;
      this.view.flxItems.animate(voltmx.ui.createAnimation({
        "0": {
          height: open ? 0 : menuHeight
        },
        "100": {
          height: open ? menuHeight : 0
        }
      }), {
        "duration": 0.5,
        "iterationCount": 1,
        "delay": 0,
        "fillMode": kony.anim.FILL_MODE_FORWARDS
      }, {
        animationStart: function() {},
        animationEnd: function() {}
      });

      
      
    },
    
    onItemSelection(){}
  };
});