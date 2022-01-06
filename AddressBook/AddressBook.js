const ContactDetails = require("./ContactDetails");
const promt = require('prompt-sync')({sigint:true});

var contactInfo = new ContactDetails("dhanunjaya","kummari","bramhanapalli","puttaparthi",
                        "andhra","515134","8978041840","kdjay517@gmail.com");
console.log(contactInfo.toString());

contactInfo.firstName = "sankar";
contactInfo.lastName = "musai";
contactInfo.address = 'kothacheruvu';
contactInfo.city = 'anatapur';
contactInfo.state = 'andhra';
contactInfo.zipcode = '515134';
contactInfo.phoneNumber = '9966647923';
contactInfo.email = 'dha@gamil.com';

console.log(contactInfo.toString());

contactInfo.firstName = promt('enter first name:');
contactInfo.lastName = promt('enter last name:');
contactInfo.address = promt('enter address:');
contactInfo.city = promt('enter city:');
contactInfo.state = promt('enter state:');
contactInfo.zipcode = promt('enter zipcode:');
contactInfo.phoneNumber = promt('enter phonenumber:');
contactInfo.email = promt('enter email:');

console.log(contactInfo.toString());