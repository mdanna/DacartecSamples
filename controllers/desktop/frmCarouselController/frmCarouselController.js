define({ 

  onViewCreated(){
    this.view.init = () => {
      let currentPicture = 0;

      this.initSegment();

      voltmx.timer.schedule('carouselTimer', () => {
        this.view.segCarousel.selectedRowIndex = [0, currentPicture % this.view.segCarousel.data.length];
        currentPicture ++;
      }, 2, true);
    };

    this.view.btnStop.onClick = () => {
      voltmx.timer.cancel('carouselTimer');
    };
  },

  initSegment(){
    this.view.segCarousel.widgetDataMap = {
      imgPicture: 'picture'
    };
    
	this.view.segCarousel.setData([{
      picture: 'angeli.jpg',
      info: 'Angeli'
    }, {
      picture: 'annunciazione.jpeg',
      info: 'Annunciazione'
    }, {
      picture: 'annunciatione2.jpg',
      info: 'Annunciazione cella numero 3'
    }, {
      picture: 'boscoparrasio.png',
      info: 'Bosco Parrasio'
    }, {
      picture: 'castelsantangelo.jpg',
      info: 'Castel S. Angelo'
    }]);
    
    this.view.segCarousel.onRowClick = () => {
      alert(this.view.segCarousel.selectedRowItems[0].info);
    };
    
  }

});