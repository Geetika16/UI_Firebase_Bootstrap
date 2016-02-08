

// getting id of element after hash(#)
var t=window.location.hash.substring(1);

var myFirebaseRef = new Firebase("https://demotrial.firebaseio.com/");

  if(t=="link1")
  {
	myFirebaseRef.child("first").on("value", function(snapshot) {
    document.getElementById("t").innerHTML=snapshot.val(); 
  });
  }
  else if(t=="link2")
  {
    myFirebaseRef.child("second").on("value", function(snapshot) {
   document.getElementById("t").innerHTML=snapshot.val(); 
  });
  } else if(t=='link3')
  {
	myFirebaseRef.child("third").on("value", function(snapshot) {
    document.getElementById('t').innerHTML=snapshot.val(); 
  });
  }
  else
  {
  myFirebaseRef.child("fourth").on("value", function(snapshot) {
    document.getElementById('t').innerHTML=snapshot.val(); 
	});
  }
  
