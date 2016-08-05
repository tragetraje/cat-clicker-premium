/*========= MODEL =========*/

var model = {
    currentCat: null,
    cats: [
      {
        name: "Barsik",
        imgAttribution: "http://www.catsofaustralia.com/images/freaked_out_kitten.jpg",
        imgSrc: "img/freaked_out_kitten.jpg",
        count: 0
    }, {
        name: "Murka",
        imgAttribution: "http://www.catsofaustralia.com/images/kitten_10.jpg",
        imgSrc: "img/kitten_10.jpg",
        count: 0
    }, {
        name: "Kuzya",
        imgAttribution: "http://www.catsofaustralia.com/images/cute_baby_kitten.jpg",
        imgSrc: "img/cute_baby_kitten.jpg",
        count: 0
    }, {
        name: "Yashka",
        imgAttribution: "http://www.catsofaustralia.com/images/scary_kitten.jpg",
        imgSrc: "img/scary_kitten.jpg",
        count: 0
    }, {
        name: "Dymka",
        imgAttribution: "http://www.catsofaustralia.com/images/monti_relaxed.jpg",
        imgSrc: "img/monti_relaxed.jpg",
        count: 0
    }]
};

/* ======== OCTOPUS ========= */

var octopus = {

    init: function() {
        // Set current cat to the first one from the list
        model.currentCat = model.cats[0];

        // Tell our views to initialize
        catListView.init();
        catView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },
    //What for??!!
    getCats: function() {
        return model.cats;
    },

    // Set the currently selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // Increment the counter for the currently selected cat
    incrementCounter: function() {
        model.currentCat.count++;
        catView.render();
    }
};

/* ======== VIEW ======== */

var catView = {

    init: function() {
        // Store ids of our DOM elements for easy access later
        this.catElem = document.getElementById("cat");
        this.catNameElem = document.getElementById("cat-name");
        this.catImageElem = document.getElementById("cat-img");
        this.countElem = document.getElementById("cat-count");

        // On click, increment the current cat's counter
        this.catImageElem.addEventListener("click", function() {
            octopus.incrementCounter();
        });

        // Render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // Update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.count;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

var catListView = {

    init: function() {
        // Store ids of our DOM elements for easy access later
        this.catListElem = document.getElementById("cat-list");


        // Render this view (update the DOM elements with the right values)
        this.render();
    },


    render: function() {
        var cat, elem, i;
        // Get the cats we'll be rendering from the octopus
        var cats = octopus.getCats();

        // Clear the cat list
        this.catListElem.innerHTML = "";

        // Loop over the cats
        for (i = 0; i < cats.length; i++) {
            // This is the cat we're currently looping over
            cat = cats[i];

            // Make a new cat list item and set its textContent
            elem = document.createElement("li");
            elem.textContent = cat.name;

            // On click, setCurrentCat and render the catView
            // (this uses closure-in-a-loop trick to connect the value of the cat
            // variable to the click event function)
            elem.addEventListener("click", (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            // Add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

// Go
octopus.init();
