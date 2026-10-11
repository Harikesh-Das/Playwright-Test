import readline from 'readline';
import { getStudent } from './databases/getStudent.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter student ID (1-5): ', (id) => {
    const student = getStudent(id);

    if (!student) {
        console.log('Student not found.');
    } else {
        console.log(student);
    }

    rl.close();
});