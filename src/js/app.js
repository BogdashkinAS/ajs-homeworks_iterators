import Character from './character.js';

export default class Team extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence);
    }

    [Symbol.iterator]() { // определение метода Symbol.iterator
        let index = 0;
        const properties = Object.keys(this); // получение всех свойств объекта

        return {
            next: () => {
                if (index < properties.length) {
                    const property = properties[index];
                    index += 1;
                    return { value: this[property], done: false };
                }
                    return { done: true };
            },
        };
    }
}
