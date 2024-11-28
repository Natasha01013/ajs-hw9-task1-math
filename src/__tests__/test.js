import {Daemon} from '../daemon.js';
import {Magician} from '../magician.js';

test.each([
    [100, 1, true, 100],
    [100, 2, true, 85],
    [100, 3, true, 72.07518749639422],
    [100, 4, true, 60],
    [100, 5, true, 48.39035952556319],
    [100, 1, false, 100],
    [100, 2, false, 90],
])('cheking attack Daemon', (baseAttack, distance, stoned, expected) => {
    let daemon = new Daemon();
    daemon.baseAttack = baseAttack;
    daemon.stoned = stoned;
    daemon.distance = distance;
    expect(daemon.attack).toBe(expected);
})

test.each([
    [100, 1, true, 100],
    [100, 2, true, 85],
    [100, 3, true, 72.07518749639422],
    [100, 4, true, 60],
    [100, 5, true, 48.39035952556319],
    [100, 1, false, 100],
    [100, 2, false, 90],
])('cheking attack Magician', (baseAttack, distance, stoned, expected) => {
    let magician = new Magician();
    magician.baseAttack = baseAttack;
    magician.stoned = stoned;
    magician.distance = distance;
    expect(magician.attack).toBe(expected);
})

test('cheking set attack(attack) in Daemon', () => {
    let daemon = new Daemon(100);
    expect(daemon.baseAttack).toBe(100);
    daemon.attack = 90;
    expect(daemon.baseAttack).toBe(90);
});

test('cheking set attack(attack) in Magician', () => {
    let magician = new Magician(100);
    expect(magician.baseAttack).toBe(100);
    magician.attack = 90;
    expect(magician.baseAttack).toBe(90);
});