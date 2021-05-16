var firebaseConfig = {
  apiKey: "AIzaSyAyZGHiKINveJO9tvxsYEv1-uZvgAA0IDk",
  authDomain: "kwitter-app-c5d7a.firebaseapp.com",
  projectId: "kwitter-app-c5d7a",
  storageBucket: "kwitter-app-c5d7a.appspot.com",
  messagingSenderId: "102907091187",
  appId: "1:102907091187:web:ad3e3cfa23088dcb3cff86",
  measurementId: "G-GN6D7VQLHG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room name = " ,Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" ,room_name)
      window.location("kwitter_page.html")
}      

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

  localStorage.setItem("room_name", room_name);
  
  window.location = "kwitter_page.html";
}

