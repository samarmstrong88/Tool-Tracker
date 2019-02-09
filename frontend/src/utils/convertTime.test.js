import convertTime from './convertTime';

test('1 hour to equal 60 min', () => {
  expect(convertTime('1:00')).toBe(60);
  expect(convertTime('1.00')).toBe(60);
  expect(convertTime('01.0')).toBe(60);
});

test('half hour to return 30 min', () => {
  expect(convertTime('0.5')).toBe(30);
  expect(convertTime('0:30')).toBe(30);
});

test('bad code to return 0 minutes', () => {
  expect(convertTime('dfvd')).toBe(0);
  expect(convertTime('0.0:05')).toBe(0);
  expect(convertTime('0:1')).toBe(0);
});
