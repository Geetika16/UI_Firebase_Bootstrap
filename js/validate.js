function validate()
{ var x = document.forms["f1"]["email"].value;
    var a = x.indexOf("@");
    var d = x.lastIndexOf(".");
    if (a<1 || d<a+2 || d+2>=x.length) {
	
        document.getElementById("demo").innerHTML="Please enter proper email";
		return false;
		
		}
		else {
		 document.getElementById("demo1").innerHTML="Details Submitted";
		return false;
		}
}