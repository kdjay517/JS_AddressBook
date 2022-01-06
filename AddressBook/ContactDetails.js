class ContactDetails{

    firstName;
    lastName;
    address;
    city;
    state;
    zipcode;
    phoneNumber;
    email;

    constructor(firstName,lastName,address,city,state,zipcode,phoneNumber,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    get firstName(){
        return this.firstName;
    }

    set firstName(firstName){
        this.firstName = firstName;
    }

    get lastName(){
        return this.lastName;
    }

    set lastName(lastName){
        this.lastName = lastName;
    }

    get address(){
        return this.address;
    }

    set addressa(address){
        this.address = address;
    }

    get city(){
        return this.city;
    }

    set city(city){
        this.city = city;
    }

    get state(){
        return this.state;
    }

    set state(state){
        this.state = state;
    }

    get zipcode(){
        return this.zipcode;
    }

    set zipcode(zipcode){
        this.zipcode = zipcode;
    }

    get phoneNumber(){
        return this.phoneNumber;
    }

    set phoneNumber(phoneNumber){
        this.phoneNumber = phoneNumber;
    }
    
    get email(){
        return this.email;
    }

    set email(email){
        this.email = email;
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