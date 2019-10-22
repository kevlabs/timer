const args = process.argv.slice(2);
const numbers = new Set(args.filter(arg => +arg > 0));
// numbers.forEach(num => setTimeout(() => process.stdout.write('beep\n'), num * 1000));
numbers.forEach(num => setTimeout(() => process.stdout.write('\x07'), num * 1000));