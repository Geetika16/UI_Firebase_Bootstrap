

var myFirebaseRef = new Firebase("https://demotrial.firebaseio.com/");

myFirebaseRef.child("first").on("value", function(snapshot) {
  
   document.getElementById('link1').innerHTML=snapshot.val(); 
});

myFirebaseRef.child("second").on("value", function(snapshot) {
 
  document.getElementById('link2').innerHTML=snapshot.val();
});

myFirebaseRef.child("third").on("value", function(snapshot) {
  
  document.getElementById('link3').innerHTML=snapshot.val();
});
myFirebaseRef.child("fourth").on("value", function(snapshot) {

  document.getElementById('link4').innerHTML=snapshot.val();
});
