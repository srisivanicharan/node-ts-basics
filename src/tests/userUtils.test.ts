import test from 'tape';
import { isValidUser, filterUsersByAge, sortUsersByName } from '../utils/userUtils.js';

const sampleUsers = [
    { name: 'Charlie', age: 30 },
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 25 },
];

test('isValidUser - valid user', (t) => {
    t.equal(isValidUser({ name: 'Alice', age: 25 }), true);
    t.end();
});

test('isValidUser - empty name is invalid', (t) => {
    t.equal(isValidUser({ name: '', age: 25 }), false);
    t.end();
});

test('isValidUser - negative age is invalid', (t) => {
    t.equal(isValidUser({ name: 'Alice', age: -1 }), false);
    t.end();
});

// test('filterUsersByAge - returns users in age range', (t) => {
//     const result = filterUsersByAge(sampleUsers, 20, 25);
//     t.equal(result.length, 2);
//     t.end();
// });

// test('filterUsersByAge - returns empty when no match', (t) => {
//     const result = filterUsersByAge(sampleUsers, 40, 50);
//     t.equal(result.length, 0);
//     t.end();
// });

// test('sortUsersByName - sorts alphabetically', (t) => {
//     const result = sortUsersByName(sampleUsers);
//     t.equal(result[0]?.name, 'Alice');
//     t.equal(result[1]?.name, 'Bob');
//     t.equal(result[2]?.name, 'Charlie');
//     t.end();
// });
