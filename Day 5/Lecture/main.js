//create class

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}


//create instance of class

const person = new Person('Spencer', 'Goodwin', '05202003');
const person2 = new Person('Dustin', 'Goodwin', '0000000');

console.log(person2);


class Customer extends Person {

    constructor(firstName, lastName, dob, phone, membership){

        super(firstName, lastName, dob);

        this.phone = phone;
        this.membership = membership
    }

    static membershipCost(){
        return '$100000';
    }
}

const customer = new Customer('Joe', 'Soap', '02321423', '2342321', 'Gold')
const customer2 = new Customer('Jane', 'Soap', '111111', '2222222', 'Platinum')

//static function work
//this works
Customer.membershipCost();
console.log(Customer.membershipCost())

//this doesn't:
//customer2.membershipCost();


const people = [
    person,
    person2,
    customer,
    customer2,
];

for (let i = 0; i < people.length; i++){
    const person = people[i];
    console.log(person.getFullName())
}

//Shortcut to loop through array
//Loops through every person in the people array
//You receive a person out of it
for(let person of people){
    console.log(person.getFullName())
}

//another way to loop through with a higher order function
people.forEach((person) => {
    console.log(person.getFullName())
})