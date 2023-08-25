<?php
//let's get all form values 
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

if(!empty($email) && !empty($message)){ //If email & message field is not empty
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){ //If user entered email is valid

        $receiver = "prabir811@gmail.com"; // Enter the email address where we want to receive all email from this contact form.
        $subject = "From: $name <$email>"; //Subject of the email. Subjects looks like From: edf sarkar <abc@gmail.com>
        //Merging concating all user values inside body variables. \n is used for new line
        $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage: $message\n\nRegards, \n$name";
        $sender = "From: $email"; //Sender email
        if(mail($receiver, $subject, $body, $sender)){ //Mail() is a inbuild php function to send
            echo "Your Message has been Sent.";
        }else{
            echo "Sorry, Failed to send your Message!"; 
        }
    }else{
        echo "Please enter a valid email address!";
    }


}else{
    echo "Email field is required.";
}

?>