function validateform()
{
    var name=document.myform.name.value;
    var pass=document.myform.password.value;

    if(name==null || name=="")
    {
        alert("name cant be blank");
        return false;
    }
    else if(pass.length < 6)
    {
        alert("password must be atleast 6 character long");
        return false;
    }
    else if(name=="admin" && pass=="1234567")
    {
        alert("Register succesfully");
        open("./login.html");
    }
    else
    {
        alert("Invalid name and password");
    }
}