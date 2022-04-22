const simplePopup = {
  show(view, {title, message, leftCallback, rightCallback}){
        const cmpSimplePopup = new com.hcl.dacartec.SimplePopup({
          id: 'cmpSimplePopup'
        }, {}, {});
        cmpSimplePopup.title = title;
        cmpSimplePopup.message = message;
        
        cmpSimplePopup.onClickLeft = () => {
          leftCallback && leftCallback();
          cmpSimplePopup.isVisible = false;
          view.remove(cmpSimplePopup);
        };
        
        cmpSimplePopup.onClickRight = () => {
          rightCallback && rightCallback();
          cmpSimplePopup.isVisible = false;
          view.remove(cmpSimplePopup);
        };
        
        cmpSimplePopup.onClose = () => view.remove(cmpSimplePopup);
        
        view.add(cmpSimplePopup);
        
        cmpSimplePopup.isVisible = true;
    
  }
};