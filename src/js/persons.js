import Team from './app.js';

const persons = [];

persons.push(new Team('Лучник', 'Bowman', 50, 1, 40, 10));
persons.push(new Team('Мечник', 'Daemon', 100, 2, 10, 40));
persons.push(new Team('Стражник', 'Magician', 60, 6, 10, 40));
persons.push(new Team('Командир', 'Swordsman', 70, 5, 40, 10));
persons.push(new Team('Сотник', 'Undead', 80, 4, 25, 25));
persons.push(new Team('Повозчик', 'Zombie', 90, 3, 25, 25));

const iterator = persons[Symbol.iterator]();

console.log(iterator.next()); // Выдается: value: Team {name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10}, done: false}
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); // Выдается: { value: undefined, done: true }
