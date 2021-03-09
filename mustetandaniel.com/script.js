
function validateForm() {
    var x = document.forms.form.name.form.email.value;
    if (x == "" || x == null || x == " ") {
        alert("Please Tell Me Your Name And Your Email Before Submiting");
        return false;
    }
    else {
        var message = document.getElementById("name").value;
        alert("Thank You" + " " + message);
        return true;
    }

}