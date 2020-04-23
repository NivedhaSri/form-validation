<?php

$servername="localhost";
$username="root";
$password="";
$dbname="register";

$name=$_POST['name'];
$email=$_POST['email'];
$password=$_POST['password'];
$phone=$_POST['phone'];
$username=$_POST['username'];
$conn=new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error)
{
	die("connection failed:".$conn->connect_error);
	
}
$sql="INSERT INTO form1(name,email,password,phone, username)values('$name','$email','$password','$phone','$username')";


if($conn->query($sql)==true)
{
	print("resgistration successful");
}

?>