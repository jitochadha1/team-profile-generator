const Manager = require('../lib/classes/Manager');

test('Manager has correct attributes', () => {
    const manager = new Manager('John', 78987, 'j@gmail.com', '5555');

    expect(manager.getRole()).toBe('Manager');
    expect(manager.getName()).toBe('John');
    expect(manager.getId()).toBe(78987);
    expect(manager.getEmail()).toBe('j@gmail.com');
    expect(manager.getOfficeNumber()).toBe('5555');
});

test('Manager has no attributes', () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
    expect(manager.getName()).toBe(undefined);
    expect(manager.getId()).toBe(undefined);
    expect(manager.getEmail()).toBe(undefined);
    expect(manager.getOfficeNumber()).toBe(undefined);
});
