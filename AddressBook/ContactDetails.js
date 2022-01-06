class ContactDetails{

    firstName;
    lastName;
    address;
    city;
    state;
    zipcode;
    phoneNumber;
    email;

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zipcode = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get fName(){
        return this.firstName;
    }

    set fName(firstName){
        let fnameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(fnameRegex.test(firstName)){
            this.firstName = firstName;
        }else{
            throw 'Name is incorrect!'
        }
        
    }

    get lName(){
        return this.lastName;
    }

    set lName(lastName){
        let lnameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(lnameRegex.test(lastName)){
            this.lastName = lastName;
        }else{
            throw 'Name is incorrect!'
        }
        
    }

    get addressName(){
        return this.address;
    }

    set addressName(address){
        let addressRegex = RegExp("^[A-Z0-9a-z]*$");
        if(address.test(address)){
            this.address = address;
        }else{
            throw 'Address is incorrect!'
        }
        
    }

    get cityName(){
        return this.city;
    }

    set cityName(city){
        let cityRegex = RegExp('^[A-Za-z]*$');
        if(cityRegex.test(city)){
            this.city = city;
        }else{
            throw 'City is incorrect!'
        }
        
    }

    get stateName(){
        return this.state;
    }

    set stateName(state){
        let stateRegex = RegExp('^[A-Za-z]*$');
        if(stateRegex.test(state)){
            this.state = state;
        }else{
            throw 'State is incorrect!'
        }
        
    }

    get zipNumber(){
        return this.zipcode;
    }

    set zipNumber(zipcode){
        let zipRegex = RegExp("^[1-9]{6}$");
        if(zipRegex.test(zipcode)){
            this.zipcode = zipcode;
        }else{
            throw 'zipcode is incorrect!'
        }
        
    }

    get phoneNo(){
        return this.phoneNumber;
    }

    set phoneNo(phoneNumber){
        let phoneRegex = RegExp("^([+])?([91]{2})?[\\s]?[6-9][0-9]{9}$");
        if(phoneRegex.test(phoneNumber)){
            this.phoneNumber = phoneNumber;
        }else{
            throw 'Phone Number is incorrect!'
        }
        
    }
    
    get emailID(){
        return this.email;
    }

    set emailID(email){
        let emailRegex = RegExp("^[A-Za-z0-9]+([.+-_][0-9a-zA-Z])*[@]([0-9a-zA-Z])+[.][a-zA-z]{2,3}([.][a-zA-z]{2,3})?$");
        if(emailRegex.test(email)){
            this.email = email;
        }else{
            throw 'email is incorrect!'
        }
        
    }

    toString(){
        return "\n firstName = " +this.firstName +
                "\n lastName = " +this.lastName +
                "\n address = " +this.address +
                "\n state = " +this.state +
                "\n city = " +this.city +
                "\n zipcode = " +this.zipcode +
                "\n phoneNumber = " +this.phoneNumber +
                "\n email = " +this.email;
    }
}
module.exports = ContactDetails;