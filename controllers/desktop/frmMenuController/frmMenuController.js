define({ 

  onViewCreated(){

    this.view.init = () => {
      this.loadMenuItems();
      
      this.view.cmpAccordeonMenu.onItemSelection = (key) => alert(`${key} selected`);
    };
  },

  loadMenuItems(){
    this.view.cmpAccordeonMenu.menuItems.data = [{
      key: 'one',
      icon: '1',
      label: 'One'
    }, {
      key: 'two',
      icon: '2',
      label: 'Two'
    }, {
      key: 'three',
      icon: '3',
      label: 'Three'
    }];
  }

});