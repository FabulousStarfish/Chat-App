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
room_name=localStorage.getItem("RoomName");
console.log(room_name);
document.getElementById("heading_text").innerHTML=room_name;
user_name=localStorage.getItem("UserName");
console.log(user_name);
function send(){
    msg=document.getElementById("my_input").value;
    firebase.database().ref(room_name).push({
        Message:msg,
        Name:user_name,
        Likes:0
    });
    document.getElementById("my_input").value="";
}
function getData() { 
    firebase.database().ref("/"+room_name).on('value', function(snapshot) {
         document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {
              childKey = childSnapshot.key; 
              childData = childSnapshot.val();
              if(childKey != "purpose") {
                   firebase_message_id = childKey;
                   message_data = childData; 
                   console.log(firebase_message_id);
                   console.log(message_data);
                   nameMessage=message_data['Name'];
                   textMessage=message_data['Message'];
                   likeMessage=message_data['Likes'];
                   nameOfMessager="<h4><b>"+nameMessage+"</b></h4>";
                   textOfMessager="<h3>"+textMessage+"</h4>"
                   likeOfMessager="<button class='likesButton' id="+firebase_message_id+" value"+likeMessage+" onclick='update(this.id)'><span class='glyphicon glyphicon-thumbs-up'>  Likes: "+likeMessage+"</span></button><hr>";
                   allTogether=nameOfMessager+textOfMessager+likeOfMessager;
                   document.getElementById("output").innerHTML+=allTogether; 
                } }); }); } getData();
function update(message_id){
    likeMessage=likeMessage+1;
    firebase.database().ref(room_name).child(message_id).update({
        Likes:likeMessage
    });
}

function logout(){
    window.location="chat.html";
}
