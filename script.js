var catArray = [{
    name: "Barsik",
    img: "http://www.catsofaustralia.com/images/freaked_out_kitten.jpg",
    count: 0,
    clickId: "barsikCounter",
    headerId: "barsikHeader",
    imgId: "barsikImg"
}, {
    name: "Murka",
    img: "http://www.catsofaustralia.com/images/kitten_10.jpg",
    count: 0,
    clickId: "murkaCounter",
    headerId: "murkaHeader",
    imgId: "murkaImg"
}, {
    name: "Kuzya",
    img: "http://www.catsofaustralia.com/images/cute_baby_kitten.jpg",
    count: 0,
    clickId: "kuzyaCounter",
    headerId: "kuzyaHeader",
    imgId: "kuzyaImg"
}, {
    name: "Yashka",
    img: "http://www.catsofaustralia.com/images/scary_kitten.jpg",
    count: 0,
    clickId: "yashkaCounter",
    headerId: "yashkaHeader",
    imgId: "yashkaImg"
}, {
    name: "Dymka",
    img: "http://www.catsofaustralia.com/images/monti_relaxed.jpg",
    count: 0,
    clickId: "dymkaCounter",
    headerId: "dymkaHeader",
    imgId: "dymkaImg"
}];

for (var i = 0; i < catArray.length; i++) {

    //Current number
    var cat = catArray[i];

    //Create DOM element for the number
    var elem = document.createElement('div');
    elem.id = cat.name;
    elem.className = 'catContainer';

    var list = document.createElement('li');
    list.textContent = cat.name;

    var header = document.createElement('h3');
    header.id = cat.headerId;
    header.textContent = cat.name;

    var counter = document.createElement('p');
    counter.textContent = cat.count;
    counter.id = cat.clickId;

    var img = document.createElement('img');
    img.src = cat.img;
    img.id = cat.imgId;
    img.className = 'imgContainer';

    //Click cat's name to display the cat
    list.addEventListener('click', (function(catCopy) {
        return function() {
            document.getElementById(catCopy.name).classList.toggle('hide');
            document.getElementById(catCopy.headerId).classList.toggle('hide');
            document.getElementById(catCopy.clickId).classList.toggle('hide');
            document.getElementById(catCopy.imgId).classList.toggle('hide');
        };
    })(cat));

    //Click the image to increase the counter for the cat

    img.addEventListener('click', (function(catCopy) {
        return function() {
            catCopy.count++;
            document.getElementById(catCopy.clickId).textContent = catCopy.count;
        };
    })(cat));

    //Append all the cats

    document.getElementById('cat-list').appendChild(list);
    document.getElementById('cat-picture').appendChild(elem).classList.add('hide');
    document.getElementById(cat.name).appendChild(header).classList.add('hide');
    document.getElementById(cat.name).appendChild(counter).classList.add('hide');
    document.getElementById(cat.name).appendChild(img).classList.add('hide');

}
