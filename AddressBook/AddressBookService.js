const ContactDetails = require("./ContactDetails.js");
const promt = require('prompt-sync')({sigint:true});

class AddressBookService{
    contactInfoList = new Array();
    insert(contactInfoList){
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
            
            contactInfoList.push(contactInfo);

            return contactInfoList;
        } catch (e) {
            console.error(e);
        }
    }
}
module.exports = AddressBookService;