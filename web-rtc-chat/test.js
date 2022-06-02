//make a for loop for 100 times
for (var i = 0; i < 100; i++) {
    //create a new message
    var message = new Message();
    //set the message to the message
    message.message = "Hello World";
    //set the user to the user
    message.user = "User" + i;
    //send the message
    sendMessage(message);
}