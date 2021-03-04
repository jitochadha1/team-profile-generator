const Intern = require('../lib/classes/Intern');

test('Intern has correct attributes', () => {
    const intern = new Intern('John', 78987, 'j@gmail.com', 'MIT');

    expect(intern.getRole()).toBe('Intern');
    expect(intern.getName()).toBe('John');
    expect(intern.getId()).toBe(78987);
    expect(intern.getEmail()).toBe('j@gmail.com');
    expect(intern.getSchool()).toBe('MIT');
});

test('Intern has no attributes', () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
    expect(intern.getName()).toBe(undefined);
    expect(intern.getId()).toBe(undefined);
    expect(intern.getEmail()).toBe(undefined);
    expect(intern.getSchool()).toBe(undefined);
});
