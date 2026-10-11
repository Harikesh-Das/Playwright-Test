import Database from 'better-sqlite3';

const db = new Database('./databases/students.db');

export const getStudent = (id) => {
    const query = `
        SELECT *
        FROM students
        WHERE id = ?
    `;

    return db.prepare(query).get(id);
};