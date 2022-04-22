define({ 

  onViewCreated(){
    this.view.init = () => {
      this.view.txtSample.onEndEditing = () => {
        this.view.lblSample.text = this.view.txtSample.text;
        if(this.view.txtSample.text.includes("0")){
          this.view.txtSample.skin = 'sknTxtError';
        } else {
          this.view.txtSample.skin = 'sknTxtOk';
        }
      };

      this.view.btnInfo.onClick = () => {
//                   voltmx.ui.Alert({
//                     message: 'Hello world',
//                     alertTitle: 'Information',
//                     alertType: constants.ALERT_TYPE_INFO,
//                     alertHandler: () => {
//                       this.view.lblSample.text = 'Goodbye';
//                     }
//                   }, {});
        
        
//         const cmpSimplePopup = new com.hcl.dacartec.SimplePopup({
//           id: 'cmpSimplePopup'
//         }, {}, {});
//         cmpSimplePopup.title = 'Hello';
//         cmpSimplePopup.message = 'This is a sample message';
        
//         cmpSimplePopup.onClickLeft = () => {
//           alert('left clicked');
//           cmpSimplePopup.isVisible = false;
//           this.view.remove(cmpSimplePopup);
//         };
        
//         cmpSimplePopup.onClickRight = () => {
//           alert('right clicked');
//           cmpSimplePopup.isVisible = false;
//           this.view.remove(cmpSimplePopup);
//         };
        
//         cmpSimplePopup.onClose = () => this.view.remove(cmpSimplePopup);
        
//         this.view.add(cmpSimplePopup);
        
//         cmpSimplePopup.isVisible = true;
        
        const title = 'hello';
        const message = 'this is a message.';
        const leftCallback = () => {
          alert('leftCallback');
        };
        const rightCallback = () => {
          alert('rightCallback');
        };
        simplePopup.show(this.view, {title, message, leftCallback, rightCallback});
        
      };

    };
  }
});