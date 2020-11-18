var firebaseConfig = {
  apiKey: "AIzaSyA-9L8tfE7OopjnNGyt5a2SYpLKOEIV-J0",
  authDomain: "chatapp-c7596.firebaseapp.com",
  databaseURL: "https://chatapp-c7596.firebaseio.com",
  projectId: "chatapp-c7596",
  storageBucket: "chatapp-c7596.appspot.com",
  messagingSenderId: "232987217474",
  appId: "1:232987217474:web:de4a42ced20749092827db"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

name_Of_User = localStorage.getItem("UserName");
console.log(name_Of_User);
document.getElementById("heading").innerHTML="Hello " + name_Of_User + " !";
function room(){
  room_of_name = document.getElementById("roomName").value;
  localStorage.setItem("RoomName",room_of_name);
  firebase.database().ref("/").child(room_of_name).update({
    purpose:"Adding Of Rooms"
  });
  window.location = "page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {
  document.getElementById("allRooms").innerHTML ="";
  snapshot.forEach(function(childSnapshot) {childKey =
  childSnapshot.key;
  Room_names = childKey;
 //Start code
 row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>"+Room_names+"</div><br>"
 document.getElementById("allRooms").innerHTML+=row;
 //End code
 });});}
getData();
function redirect(name){
  localStorage.setItem("RoomName",name);
  window.location="page.html";
}
function logout(){
  localStorage.removeItem("RoomName");
  localStorage.removeItem("UserName");
  window.location="index.html";
}