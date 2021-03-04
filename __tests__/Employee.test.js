const Employee = require('../lib/classes/Employee');

test('Employee has correct attributes', () => {
    const employee = new Employee('John', 78987, 'j@gmail.com');

    expect(employee.getName()).toBe('John');
    expect(employee.getId()).toBe(78987);
    expect(employee.getEmail()).toBe('j@gmail.com');
});

test('Employee has no attributes', () => {
    const employee = new Employee();

    expect(employee.getName()).toBe(undefined);
    expect(employee.getId()).toBe(undefined);
    expect(employee.getEmail()).toBe(undefined);
});
