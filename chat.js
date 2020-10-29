var firebaseConfig = {
    apiKey: "AIzaSyB-MFvxoBzKAs6IGsuWKK93hAPyPZ5x6B4",
    authDomain: "chat-app-c47c5.firebaseapp.com",
    databaseURL: "https://chat-app-c47c5.firebaseio.com",
    projectId: "chat-app-c47c5",
    storageBucket: "chat-app-c47c5.appspot.com",
    messagingSenderId: "491364427656",
    appId: "1:491364427656:web:89d69e43f9cedd360f3c3d"
  };
  firebase.initializeApp(firebaseConfig);
function logout(){
    window.location="index.html";
}