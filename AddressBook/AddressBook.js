const promt = require('prompt-sync')({sigint:true});
const AddressBookService = require('./AddressBookService.js');
const UserInputOutput = require('./UserInputOutput.js')

let addressBookService = new AddressBookService();
let userInputOutput = new UserInputOutput();
let contactInfoList = new Array();

flag = true;
while(flag){
    let userChoice = userInputOutput.menu();
    switch(userChoice){
        case 1:
            contactInfoList = addressBookService.insert(contactInfoList);
            break;
        case 2:
            console.log(contactInfoList);
            break;
        case 3:
            let fName = promt('enter the first name to edit the contact details a person: ');
            contactInfoList = addressBookService.editContact(contactInfoList,fName);
            break;
        case 4:
            let dName = promt('enter the first name to delete the contact details a person: ');
            contactInfoList = addressBookService.deleteContact(contactInfoList,dName);
            break;
        case 4:
            console.log('EXITED !!!');
            flag = false;
            break;
        default:
            console.log('you have entered invalid input!');
            break;
    }
}





