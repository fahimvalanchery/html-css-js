function bt_submit()
{
var f_name = document.getElementById("first_name").value;
var l_name = document.getElementById("last_name").value;
var gender = document.getElementById("gend").value;
var dob    = document.getElementById("date_of_birth").value;
var ph     = document.getElementById("phone_number").value;
var place  = document.getElementById("place").value;
var dt     = document.getElementById("district").value;
var email  = document.getElementById("e_mail").value;
var uname  = document.getElementById("user_name").value;
var pwd    = document.getElementById("passwrd").value;
var cpwd   = document.getElementById("c_passwrd").value;



if(f_name.length==0 && l_name.length==0 )
{
    
    alert("Enter the Details");
}
else if(ph.length==0 && place.length==0)
    {   
    }
    else if(email.length==0 && uname.length==0)
        {   
        }
        else if(pwd.length==0 )
            {  
            }
            else if(cpwd.length==0)
                {
                }
                else if(pwd==cpwd)
                    {
                alert("Registered Successfully");
                    }
                    else
                    {
                        alert("Password and confirm password doesnot match")
                    }
                

}