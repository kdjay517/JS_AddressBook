const prompt = require('prompt-sync')({sigint:true});
class UserInputOutput{
    menu (){
        console.log('press 1 - to add new contact');
        console.log('press 2 - to display contact details');
        console.log('press 3 - to edit the contact by first name');
        console.log('press 4 - to delete the contact by first name');
        console.log('press 5 - to get count of contacts');
        console.log('press 6 - to serach contact by city or state');
        console.log('press 7 - to  EXIT');
        return parseInt(prompt('enter option'));
    }
}
module.exports = UserInputOutput;