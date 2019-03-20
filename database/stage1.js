var locationsNew = [
    {
      "id": "1-1",
      "found": false,
      "image":"images/stage1/1.jpg",
      "coords": {
         "lat": 50.96278,
         "long": 3.74286
      }
    },
    {
      "id": "1-2",
      "found": false,
      "image":"images/stage1/2.jpg",
      "coords": {
        "lat": 50.964889,
        "long": 3.751790
      }
    },    {
      "id": "1-3",
      "found": false,
      "image":"images/stage1/3.jpg",
      "coords": {
        "lat":  50.963890,
        "long": 3.754809
      }
    },    {
      "id": "1-4",
      "found": false,
      "image":"images/stage1/4.jpg",
      "coords": {
        "lat": 50.96370,
        "long": 3.74180
      }
    },    {
      "id": "1-5",
      "found": false,
      "image":"images/stage1/5.jpg",
      "coords": {
        "lat": 50.96321,
        "long": 3.73956
      }
    },    {
      "id": "1-6",
      "found": false,
      "image":"images/stage1/6.jpg",
      "coords": {
        "lat": 50.964373,
        "long": 3.754417
      }
    },    {
      "id": "1-7",
      "found": false,
      "image":"images/stage1/7.jpg",
      "coords": {
        "lat": 50.963054,
        "long": 3.747831
      }
    },    {
      "id": "1-8",
      "found": false,
      "image":"images/stage1/8.jpg",
      "coords": {
        "lat": 50.963996,
        "long": 3.752969
      }
    },    {
      "id": "1-9",
      "found": false,
      "image":"images/stage1/9.jpg",
      "coords": {
        "lat": 50.96227,
        "long": 3.74472
      }
    }
  ];

var stageId = "fase1";
var locations = JSON.parse(window.localStorage.getItem(stageId));

if(!locations){
    locations = locationsNew;
}

var order = [2,5,7,1,6,8,0,3,4];

var bgImg = "url('images/stage1/valerie.jpg')";
