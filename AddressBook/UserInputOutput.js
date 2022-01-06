const promt = require('prompt-sync')({sigint:true});
class UserInputOutput{
    menu (){
        console.log('press 1 - to add new contact');
        console.log('press 2 - to display contact details');
        console.log('press 3 - to  EXIT');
        return parseInt(promt('enter option'));
    }
}
module.exports = UserInputOutput;