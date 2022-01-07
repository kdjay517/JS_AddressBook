const ContactDetails = require("./ContactDetails.js");
const prompt = require('prompt-sync')({sigint:true});

class AddressBookService{
    contactInfoList = new Array();
    
    insert(contactInfoList){
        let found = false;
        try {
            let contactInfo = new ContactDetails();
            contactInfo.fName = prompt('enter first name:');
            contactInfo.lName = prompt('enter last name:');
            contactInfo.addressName = prompt('enter address:');
            contactInfo.cityName = prompt('enter city:');
            contactInfo.stateName = prompt('enter state:');
            contactInfo.zipNumber = prompt('enter zipcode:');
            contactInfo.phoneNo = prompt('enter phonenumber:');
            contactInfo.emailID = prompt('enter email:');

            if (contactInfoList.length < 0) {
                contactInfoList.push(contactInfo);
            } else if (contactInfoList.length >= 0) {
                contactInfoList.forEach(element => {
                    if ((element.fName === contactInfo.fName) == true) {
                        found = true;
                        return;
                    }
                });
                if (found == true) {
                    console.log();
                    console.log("Duplicate entry exists!");
                    console.log();
                } else {
                    contactInfoList.push(contactInfo);
                }
            }
        
            return contactInfoList;
        } catch (e) {
            console.error(e);
        }
    }

    editContact(contactInfoList, fname) {
        contactInfoList.forEach(element => {
            if ((element.fName == fname) == true) {
                console.log("Press 1 to edit Last Name");
                console.log("Press 2 to edit Address");
                console.log("Press 3 to edit City");
                console.log("Press 4 to edit State");
                console.log("Press 5 to edit Zip");
                console.log("Press 6 to edit Phone Number");
                console.log("Press 7 to edit Email");
                let option = parseInt(prompt("Enter your choice : "));
                let contactInfo = new ContactDetails();

                switch (option) {
                    case 1:
                        contactInfo.lName = prompt("Enter Last Name : ");
                        element.lName = contactInfo.lName;
                        break;
                    case 2:
                        contactInfo.addressName = prompt("Enter Address : ");
                        element.addressName = contactInfo.addressName;
                        break;
                    case 3:
                        contactInfo.cityName = prompt("Enter City : ");
                        element.cityName = contactInfo.cityName;
                        break;
                    case 4:
                        contactInfo.stateName = prompt("Enter State : ");
                        element.stateName = contactInfo.stateName;
                        break;
                    case 5:
                        contactInfo.zipNumber = prompt("Enter Zip : ");
                        element.zipNumber = contactInfo.zipNumber;
                        break;
                    case 6:
                        contactInfo.phoneNo = prompt("Enter Phone Number : ");
                        element.phoneNo = contactInfo.phoneNo;
                        break;
                    case 7:
                        contactInfo.emailID = prompt("Enter Email : ");
                        element.emailID = contactInfo.emailID;
                        break;
                    default:
                        console.log("You have entered invalid input!");
                        break;
                }
            }else{
                console.log('invalid contact details !!')
            }
        })
        return contactInfoList;
    }

    deleteContact(contactInfoList,dName){
        contactInfoList.forEach(element =>{
            if(element.fName == dName){
                let index = contactInfoList.index(dName);
                contactInfoList.splice(index,1);
            }else{
                console.log('invalid contact details !!')
            }
            
        })
        return contactInfoList;     
    }

    searchContact(contactInfoList){
        console.log('press 1 - to search by city');
        console.log('press 2 - to serach by state');
        let count = 0;
        let userChoice = parseInt(prompt('enter your choice: '))
        switch(userChoice){
            case 1:
                let city = prompt('enter city name: ');
                contactInfoList.forEach(value =>{
                    if((value.cityName == city) == true){
                        console.log(value);
                        count++;
                    }
                });
                console.log('total persons from the same city are: ' + count);
                break;
            case 2:
                let state = prompt('enter state name: ');
                contactInfoList.forEach(value =>{
                    if((value.stateName == state) == true){
                        console.log(value);
                        count++;
                    }
                });
                console.log('total persons from the same state are: ' +count);
                break;
            default:
                console.log('choose correct option');
                break;
        }
    }

    sortContact(contactInfoList){
        console.log('press 1 - to sort the address book by first name');
        console.log("Press 2 - to sort the Address Book by City");
        console.log("Press 3 - to sort the Address Book by State");
        console.log("Press 4 - to sort the Address Book by Zip");
        let userChoice = parseInt(prompt('enter your choice: '));
        switch(userChoice){
            case 1:
                contactInfoList.sort((a ,b) =>{
                    if(a == b){
                        return 0;
                    }
                    return a.fName < b.fName ? -1 : 1;
                })
                console.log(contactInfoList);
                break;
            case 2:
                contactInfoList.sort((a ,b) =>{
                    if(a == b){
                        return 0;
                    }
                    return a.cityName < b.cityName ? -1 : 1;
                })
                console.log(contactInfoList);
                break;
            case 3:
                contactInfoList.sort((a ,b) =>{
                    if(a == b){
                        return 0;
                    }
                    return a.stateName < b.stateName ? -1 : 1;
                })
                console.log(contactInfoList);
                break;
            case 4:
                contactInfoList.sort((a ,b) =>{
                    if(a == b){
                        return 0;
                    }
                    return a.zipNumber < b.zipNumber ? -1 : 1;
                })
                console.log(contactInfoList);
                break;
            default:
                console.log('choose correct option !!');
                break;
        }
    }
}
module.exports = AddressBookService;