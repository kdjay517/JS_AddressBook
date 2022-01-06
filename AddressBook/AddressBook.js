const ContactDetails = require("./ContactDetails");
const promt = require('prompt-sync')({sigint:true});

try {
    let contactInfo = new ContactDetails();
    contactInfo.fName = promt('enter first name:');
    contactInfo.lName = promt('enter last name:');
    contactInfo.addressName = promt('enter address:');
    contactInfo.cityName = promt('enter city:');
    contactInfo.stateName = promt('enter state:');
    contactInfo.zipNumber = promt('enter zipcode:');
    contactInfo.phoneNo = promt('enter phonenumber:');
    contactInfo.emailID = promt('enter email:');
    console.log(contactInfo.toString());
} catch (e) {
    console.error(e)
}


