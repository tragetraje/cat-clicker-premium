var catArray = [{
  name: "Barsik",
  img: "http://www.catsofaustralia.com/images/freaked_out_kitten.jpg",
  count: 0,
  clickId: "barsikCounter"
}, {
  name: "Murka",
  img: "http://www.catsofaustralia.com/images/kitten_10.jpg",
  count: 0,
  clickId: "murkaCounter"
}, {
  name: "Kuzya",
  img: "http://www.catsofaustralia.com/images/cute_baby_kitten.jpg",
  count: 0,
  clickId: "kuzyaCounter"
}, {
  name: "Yashka",
  img: "http://www.catsofaustralia.com/images/scary_kitten.jpg",
  count: 0,
  clickId: "yashkaCounter"
}, {
  name: "Dymka",
  img: "http://www.catsofaustralia.com/images/monti_relaxed.jpg",
  count: 0,
  clickId: "dymkaCounter"
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


  var counter = document.createElement('p');
  counter.textContent = cat.count;
  counter.id = cat.clickId;

  var img = document.createElement('img');
  img.src = cat.img;
  img.className = 'imgContainer';

  //Click the image to increase the counter for the cat

  img.addEventListener('click', (function(catCopy) {
        return function() {
            catCopy.count++;
            console.log(catCopy.name + ': ' + catCopy.count);
            document.getElementById(catCopy.clickId).textContent = catCopy.count;
        };
    })(cat));

  //Append all the cats

    document.getElementById('cat-list').appendChild(list);
    document.getElementById('cat-picture').appendChild(elem);
    document.getElementById(cat.name).appendChild(counter);
    document.getElementById(cat.name).appendChild(img);

  }
