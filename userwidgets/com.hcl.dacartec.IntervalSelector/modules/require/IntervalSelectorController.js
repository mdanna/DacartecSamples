define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

      this.view.preShow = () => {

        if(!this.initDone){
          this.from = this.start;
          this.to = this.end;

          let movingLeft = false;

          this.view.flxLeft.onTouchStart = () => movingLeft = true;
          this.view.flxLeft.onTouchEnd = () => {
            this.onIntervalChanged(this.from, this.to);
            movingLeft = false;
          };
          
          let movingRight = false;

          this.view.flxRight.onTouchStart = () => movingRight = true;
          this.view.flxRight.onTouchEnd = () => {
            this.onIntervalChanged(this.from, this.to);
            movingRight = false;
          };
          
          let start = 0;
          this.view.onTouchStart = (widgetRef, x, y) => {
            start = x;
          };

          this.view.onTouchMove = (widgetRef, x, y) => {
            const delta = x - start;
            const startValue = parseInt(this.start);
            const endValue = parseInt(this.end);

            if(movingLeft){
              const left = Math.round(parseFloat((this.view.flxLeft.left + '').replace('dp', '')) + delta);
              const rightLimit = 220 - Math.round(parseFloat((this.view.flxRight.right + '').replace('dp', '')));
              if(left >= 0 && left <= rightLimit){
                this.view.flxLeft.left = left;
                this.view.flxLineLeft.width = left;
                this.view.lblFrom.text = Math.round(startValue + ((left * (endValue - startValue)) / 220)) + '';
              }
            } else if(movingRight){
              const right = Math.round(parseFloat((this.view.flxRight.right + '').replace('dp', '')) - delta);
              const leftLimit = 220 - Math.round(parseFloat((this.view.flxLeft.left + '').replace('dp', '')));
              if(right >= 0 && right <= leftLimit){
                this.view.flxRight.right = right;
                this.view.flxLineRight.width = right;
                this.view.lblTo.text = Math.round(endValue - ((right * (endValue - startValue)) / 220)) + '';
              }
            }
          };
          
          this.initDone = true;
        }
      };
    },
    
    onIntervalChanged(){},
    
    initGettersSetters() {}
  };
});