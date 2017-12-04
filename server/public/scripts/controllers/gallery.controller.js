app.controller('GalleryController', function(){
    console.log('Gallery Controller loaded');

    var self = this;
    self.greeting = "Hello!";

    self.cards = [];

    createCards();

    self.toggleDescription = function(card) {
        card.showDescription = !card.showDescription;
    }

     self.createCards = function() {
        self.cards.push(new Card('Jupiter_europa.jpg', 'Isnt this planet great!'),
    ('Castle.jpg', 'Cool castle bro!'));
    }
        

    function Card(path, description) {
        this.path = path;
        this.description = description;
        this.likes = 0;
        this.showDescription = false;
    }

    self.addLike = function() {
        
    }
});