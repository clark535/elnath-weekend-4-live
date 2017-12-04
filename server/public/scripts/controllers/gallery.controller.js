app.controller('GalleryController', function(){
    console.log('Gallery Controller loaded');

    var self = this;
    self.greeting = "Hello!";

    self.cards = [];

    createCards();

    self.toggleDescription = function(card) {
        card.showDescription = !card.showDescription;
    }

     function createCards()  {
        self.cards.push(new Card('Jupiter_europa.jpg', 'Isnt this planet great!')),
        self.cards.push(new Card('Castle.jpg', 'Cool castle bro!'))
    };
        

    function Card(path, description) {
        this.path = path;
        this.description = description;
        this.likes = 0;
        this.showDescription = false;
    }

    self.addLike = function() {
        card.likes ++;

    }
});