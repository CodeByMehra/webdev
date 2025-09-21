import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

let createUser = () => {
const randomName = faker.person.fullName(); 
const randomEmail = faker.internet.email(); 
}

console.log(createUser);