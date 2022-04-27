define({ 

	onViewCreated(){
      this.view.init = () => {
        this.view.btnInfo.onClick = () => {
          alert(`${this.view.cmpIntervalSelector.from} - ${this.view.cmpIntervalSelector.to}`);
        };
        
        this.view.cmpIntervalSelector.onIntervalChanged = (from, to) => alert(`${from} - ${to}`);
      };
    }

});