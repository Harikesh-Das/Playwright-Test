import { test, expect } from '@playwright/test';
import { getStudent } from '../databases/getStudent.js';

test('Google Form', async ({ page }) => {

    for (let id=1;id<=3;id++){
    const student = getStudent(id);

    await page.goto('https://forms.gle/jBxQCaBVB6s8iHak9');


    await page.getByRole('textbox', { name: 'Your Name Required question' }).fill(student.name);
    await page.getByRole('textbox', { name: 'Your Roll Number: Required' }).fill(student.rollnumber);
    await page.getByRole('textbox',{name:'Your Section'}).fill(student.section)

    await page.getByRole('textbox', { name: 'Name of NPTEL course you' }).fill(student.course);
    await page.getByRole('textbox', { name: 'Your phone number Required' }).fill(student.phone);
    await page.getByRole('textbox', { name: 'Your email ID Required' }).fill(student.email);
    await page.getByRole('button', { name: 'Submit' }).click();
    

    }




});