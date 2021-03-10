
function validateForm() {
    var x = document.forms.form.name.value;
    var y = document.forms.form.email.value;
    if (x == "" || x == null || x == " ") {

        document.getElementById("error").innerHTML = "Please Tell Me Your Name So It's Easier For Me To Contact You Back!"
        return false;
    }
    else if (y == "" || y == null || y == " ") {

        document.getElementById("error1").innerHTML = "Please Tell Me Your E-Mail So It's Easier For Me To Contact You Back!"
        return false;
    }
    else {
        var uname = document.getElementById("name").value;
        alert("Thank You" + " " + uname.charAt(0).toUpperCase() + uname.slice(1));

        return true;
    }

}