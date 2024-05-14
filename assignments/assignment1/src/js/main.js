import { contacts } from '../data/contacts.js';

//invoke all functions with contacts.result
//////////////////////////////// ARRAYS //////////////////////////////////
// 1. Sort by last name
function sortByLastName(contacts) {
    return contacts.slice().sort((a, b) => a.name.last.localeCompare(b.name.last));
}
  
  // 2. Reverse the array without using reverse()
function reverseArray(contacts) {
const reversedArray = [];
for (let i = contacts.length - 1; i >= 0; i--) {
    reversedArray.push(contacts[i]);
}
return reversedArray;
}

// 3. Get the first 5 contacts from the sorted list
function getFirstFiveSortedContacts(contacts) {
return sortByLastName(contacts).slice(0, 5);
}

// 4. Get array of all unique first names
function uniqueFirstNames(contacts) {
const uniqueNames = new Set();
contacts.forEach(contact => {
    uniqueNames.add(contact.firstName);
});
return Array.from(uniqueNames);
}

// 5. Concatenate first and last names into an array of full names
function getFullNames(contacts) {
return contacts.map(contact => `${contact.firstName} ${contact.lastName}`);
}



//////////////////////////////// LOOPS //////////////////////////////////
// 1. Log each contact's email to the console
function logContactEmails(contacts) {
for (let contact of contacts) {
    console.log(contact.email);
}
}

// 2. Get contact by ID
function getContactById(id) {
return contacts.find(contact => contact.id.value === id.value);
}

// 3. Count contacts from a specific country
function countContactsFromCountry(country) {
return contacts.filter(contact => contact.location.country === country).length;
}

// 4. Get contacts within an age range
function getContactsInAgeRange(minAge, maxAge) {
return contacts.filter(contact => contact.age >= minAge && contact.age <= maxAge);
}
