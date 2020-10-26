function login(){
    word=document.getElementById("name").value;
    sec=document.getElementById("section").value;
    name=word.concat(" ",sec);
    console.log(name);
    localStorage.setItem("UserName",name);
    window.location="chat.html";
}