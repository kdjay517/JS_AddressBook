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
            console.log('EXITED !!!');
            flag = false;
            break;
        default:
            console.log('you have entered invalid input!');
            break;
    }
}





