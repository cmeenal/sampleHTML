function validate()
{
var id=document.getElementById("txtname").value;
   //blank id
    if(id==""||id==null)
    {
        alert("Please enter your name");
        id.focus();
        return false;
    }
}
