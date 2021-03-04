const Engineer = require('../lib/classes/Engineer');

test('Engineer has correct attributes', () => {
    const engineer = new Engineer('John', 78987, 'j@gmail.com', 'johnz');

    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getName()).toBe('John');
    expect(engineer.getId()).toBe(78987);
    expect(engineer.getEmail()).toBe('j@gmail.com');
    expect(engineer.getGithub()).toBe('johnz');
});

test('Engineer has no attributes', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getName()).toBe(undefined);
    expect(engineer.getId()).toBe(undefined);
    expect(engineer.getEmail()).toBe(undefined);
    expect(engineer.getGithub()).toBe(undefined);
});
