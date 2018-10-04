import { Person } from './person.model';

describe('Test for PersonModel', () => {
    const person = new Person('Camilo', 'Concha', 22);

    describe('Test for Person.getName', () => {
        it('Should return a string with name and lastname', () => {
            expect(person.getFullName()).toEqual('Camilo Concha');
        });
    });

    describe('Test for the age plus ten', () => {
        it('Shoud return the age plus ten years', () => {
            const age = person.getAgeInYears(10);
            expect(age).toEqual(32);
        });
    });

});
