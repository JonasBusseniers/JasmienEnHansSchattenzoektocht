var locationsNew = [
    {
      "id": "2-1",
      "found": false,
      "image":"images/stage2/1.jpg",
      "coords": {
        "lat": 50.96095,
        "long": 3.73303
      }
    },
    {
      "id": "2-2",
      "found": false,
      "image":"images/stage2/2.jpg",
      "coords": {
        "lat": 50.95588,
        "long": 3.72517
      }
    },    {
      "id": "2-3",
      "found": false,
      "image":"images/stage2/3.jpg",
      "coords": {
        "lat": 50.95241,
        "long": 3.73033
      }
    },    {
      "id": "2-4",
      "found": false,
      "image":"images/stage2/4.jpg",
      "coords": {
        "lat": 50.96256,
        "long": 3.73832
      }
    },    {
      "id": "2-5",
      "found": false,
      "image":"images/stage2/5.jpg",
      "coords": {
        "lat": 50.95946,
        "long": 3.75124
      }
    },    {
      "id": "2-6",
      "found": false,
      "image":"images/stage2/6.jpg",
      "coords": {
        "lat": 50.95541,
        "long": 3.72600
      }
    },    {
      "id": "2-7",
      "found": false,
      "image":"images/stage2/7.jpg",
      "coords": {
        "lat": 50.95239,
        "long": 3.73068
      }
    },    {
      "id": "2-8",
      "found": false,
      "image":"images/stage2/8.jpg",
      "coords": {
        "lat": 50.95932,
        "long": 3.72907
      }
    },    {
      "id": "2-9",
      "found": false,
      "image":"images/stage2/9.jpg",
      "coords": {
        "lat": 50.95625,
        "long": 3.74357
      }
    }
  ];

   var stageId = "fase2";
   var locations = JSON.parse(window.localStorage.getItem(stageId));

   if(!locations){
       locations = locationsNew;
   }

var order = [3,0,7,1,5,2,6,8,4];

var bgImg = "url('images/stage2/hansenjasmien.jpg')";