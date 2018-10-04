import { Person } from './person.model';

describe('Test for PersonModel', () => {

    describe('Test for Person.getName', () => {
        const person = new Person('Camilo', 'Concha', 22);
        it('Should return a string with name and lastname', () => {
            expect(person.getFullName()).toEqual('Camilo Concha');
        });
    });

    describe('Test for the age plus ten', () => {
        it('Shoud return the age plus ten years', () => {
            const person = new Person('Luis', 'Pérez', 43);
            const age = person.getAgeInYears(10);
            expect(age).toEqual(53);
        });
    });

    describe('Test for the age plus twenty', () => {
        it('Shoud return the age plus ten years', () => {
            const person = new Person('Carlos', 'Gomez', 42);
            const age = person.getAgeInYears(20);
            expect(age).toEqual(62);
        });
    });

    describe('Test for the age plus twenty', () => {
        it('Shoud return the age if the year is negative -', () => {
            const person = new Person('Camilo', 'Concha', 22);
            const age = person.getAgeInYears(-50);
            expect(age).toEqual(person.age);
        });
    });

});
