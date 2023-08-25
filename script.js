//Let's get all required elements

const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault();//preventing form from submitting
    statusTxt.style.color = "rgb(73, 192, 138)";
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); //Creating new xml object
    xhr.open("POST", "message.php", true); //Sending post request to message.php file
    xhr.onload = ()=>{ //once ajax loaded
        if(xhr.readyState == 4 && xhr.status == 200){
            //If ajax response status is 200 & ready status is 4 means there is
            let response = xhr.response; //storing ajax response in a response variable
            //If responce is an error like enter valid email address then we will change the alert color to red else reset the form
            if(response.indexOf("Email is required!") != -1 || response.indexOf("Please enter a valid email address!") ||response.indexOf("Sorry, Failed to send your Message!") ){
                statusTxt.style.color = "red";
            }else{
                form.reset();
                setTimeout(()=>{
                    statusTxt.style.display = "none";
                },3000);
            }
            statusTxt.innerText = response;
        }

    }
    let formData = new FormData(form)//creating new FormData obj. This obj is used to send form data
    xhr.send(formData);//sending form data
}