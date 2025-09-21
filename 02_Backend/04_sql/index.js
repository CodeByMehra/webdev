import { faker } from '@faker-js/faker';

// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

let getUser = () => {
return{
    "userid": faker.string.uuid(),
    // "username": faker.person.user_name(),
    "email": faker.internet.email(),
    // "password": faker.password()
}
}

console.log(getUser());