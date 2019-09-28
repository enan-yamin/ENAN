// Firstly, the Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBsYNLxyFXyudTtbgj9fvwtwK9agsmSTz0",
    authDomain: "contactform-847ef.firebaseapp.com",
    databaseURL: "https://contactform-847ef.firebaseio.com",
    projectId: "contactform-847ef",
    storageBucket: "",
    messagingSenderId: "234922273140",
    appId: "1:234922273140:web:2c939c0c9d41e1a3802421"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  //database= firebase.database();  
  //var ref=database.ref('messages');
  //ref.on('value',gotData,errData);
  

// Reference messages collection
var messagesRef = firebase.database().ref('messages');





// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name'); //getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name,message,email,phone,company);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();

  //redirect to home page

  setTimeout(function(){
    document.location.href="./index.html";
  },3050);


}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, message,email,phone,company){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    message:message,
	company: company,
	email: email,
	phone: phone
	
  });
}
//new things
//var table1=document.getElementById("table1");
//var f1= messagesRef = firebase.database().ref().child("messages");
//f1.on('value',function(datasnapshot){
	//table1.innerText=datasnapshot.val();
	//var name=snap.child("name").val();
	//var message=snap.child("message").val();
	//$("#table_body").append("<tr>" +name <br> "<tr>" +message);
//})

//var db=messagesRef=firebase.database().ref('messages');;
//const list_div=document.querySelector(#list_div);
//db.collection("messages").get().then(function(querysnapshot){
	//querysnapshot.forEach(function(ref){
	//list_div.innerHTML+="<div class='list-item'></h3>" +ref.data().name +"</h3><p> comment:" +ref.data().message;
//})	
//})