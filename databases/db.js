import Database from 'better-sqlite3';
import fs from 'fs/promises'

const db=new Database('./databases/students.db')

export const initializeDb=()=>{
    const userSql=`
    CREATE TABLE IF NOT EXISTS students(
        id INTEGER PRIMARY KEY,
        name TEXT,
        rollnumber TEXT,
        section TEXT,
        course TEXT,
        phone TEXT,
        email TEXT
        )`;
        db.exec(userSql)
    }

export const importData = async () => {
    const data = await fs.readFile('./databases/students.csv', 'utf8');

    const rows = data.trim().split('\n');
    rows.shift(); // remove header

    const insert = db.prepare(`
        INSERT INTO students
        (id, name, rollnumber, section, course, phone, email)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    for (const row of rows) {
        const [id, name, rollnumber, section, course, phone, email] = row.split(',');

        insert.run(
            id,
            name,
            rollnumber,
            section,
            course,
            phone,
            email
        );
    }
};

initializeDb();
await importData();

console.log('CSV data imported successfully.');

db.close();