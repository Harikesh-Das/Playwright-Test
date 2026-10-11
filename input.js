import readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { writeFile } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'
import XLSX from 'xlsx'

const rl = readline.createInterface({ input, output })
const excelPath = await rl.question('Path to Excel file (sheets: Orders, Items): ')
rl.close()

const workbook = XLSX.readFile(excelPath)

const orderRows = XLSX.utils.sheet_to_json(workbook.Sheets['SalesOrders'])
const itemRows = XLSX.utils.sheet_to_json(workbook.Sheets['Items'])

const orders = orderRows.map(orderRow => {
    const orderId = String(orderRow['Order ID']).trim()

    const items = itemRows
        .filter(item => String(item['Order ID']).trim() === orderId)
        .map(item => ({
            itemId: String(item['Item ID']).trim(),
            quantity: String(item['Quantity']).trim()
        }))

    return {
        orderId,
        customerId: String(orderRow['Customer ID']).trim(),
        customerLatitude: String(orderRow['Customer Latitude']).trim(),
        customerLongitude: String(orderRow['Customer Longitude']).trim(),
        items
    }
})

console.log(`Read ${orders.length} order(s) from ${excelPath}`)
orders.forEach(o => console.log(`  ${o.orderId} / ${o.customerId} — ${o.items.length} item(s)`))

await writeFile('order-input.json', JSON.stringify(orders, null, 2))

console.log('Running: npx playwright test smartwarehouse.spec.js --headed\n')

const result = spawnSync(
    'npx',
    ['playwright', 'test', 'smartwarehouse.spec.js', '--headed'],
    { stdio: 'inherit', cwd: process.cwd(), shell: true }
)

if (result.error) {
    console.error('Failed to launch Playwright:', result.error)
    process.exit(1)
}

console.log('\nPlaywright exited with status:', result.status)
process.exit(result.status ?? 1)





































































/* import readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { writeFile } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'
import XLSX from 'xlsx'

const rl = readline.createInterface({ input, output })
const excelPath = await rl.question('Path to Excel file (sheets: Order, Items): ')
rl.close()

const workbook = XLSX.readFile(excelPath)

const orderSheet = workbook.Sheets['SalesOrders']
const [orderRow] = XLSX.utils.sheet_to_json(orderSheet)

const itemsSheet = workbook.Sheets['Items']
const itemRows = XLSX.utils.sheet_to_json(itemsSheet)

const items = itemRows.map(row => ({
    itemId: String(row['Item ID']).trim(),
    quantity: String(row['Quantity']).trim()
}))

const order = {
    orderId: String(orderRow['Order ID']).trim(),
    customerId: String(orderRow['Customer ID']).trim(),
    customerLatitude: String(orderRow['Customer Latitude']).trim(),
    customerLongitude: String(orderRow['Customer Longitude']).trim(),
    items
}

console.log(`Order ${order.orderId} / ${order.customerId} with ${items.length} item(s) read from ${excelPath}`)

await writeFile('order-input.json', JSON.stringify(order, null, 2))


console.log('Running: npx playwright test smartwarehouse.spec.js\n')

const result = spawnSync(
    'npx',
    ['playwright', 'test', 'smartwarehouse.spec.js'],
    { stdio: 'inherit', cwd: process.cwd(), shell: true }
)

if (result.error) {
    console.error('Failed to launch Playwright:', result.error)
    process.exit(1)
}

console.log('\nPlaywright exited with status:', result.status)
process.exit(result.status ?? 1)


 */










/* import readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { writeFile } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'
import XLSX from 'xlsx'

const rl = readline.createInterface({ input, output })

const orderId = await rl.question('Order ID: ')
const customerId = await rl.question('Customer ID: ')
const customerLatitude = await rl.question('Customer Latitude: ')
const customerLongitude = await rl.question('Customer Longitude: ')
const excelPath = await rl.question('Path to Excel file (columns: Item ID, Quantity): ')

rl.close()

const workbook = XLSX.readFile(excelPath)
const sheet = workbook.Sheets[workbook.SheetNames[0]]
const rows = XLSX.utils.sheet_to_json(sheet) // [{ 'Item ID': 'P001', Quantity: 5 }, ...]

const items = rows.map(row => ({
    itemId: String(row['Item ID']).trim(),
    quantity: String(row['Quantity']).trim()
}))

console.log(`Read ${items.length} item(s) from ${excelPath}`)

const order = { orderId, customerId, customerLatitude, customerLongitude, items }
await writeFile('order-input.json', JSON.stringify(order, null, 2))
console.log('Saved to order-input.json\n')


console.log('Running: npx playwright test smartwarehouse.spec.js\n')

const result = spawnSync(
    'npx',
    ['playwright', 'test', 'smartwarehouse.spec.js'],
    { stdio: 'inherit', cwd: process.cwd(), shell: true }
)

if (result.error) {
    console.error('Failed to launch Playwright:', result.error)
    process.exit(1)
}

console.log('\nPlaywright exited with status:', result.status)
process.exit(result.status ?? 1)

/* import readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { writeFile } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'

const rl = readline.createInterface({ input, output })

const orderId = await rl.question('Order ID: ')
const customerId = await rl.question('Customer ID: ')
const customerLatitude = await rl.question('Customer Latitude: ')
const customerLongitude = await rl.question('Customer Longitude: ')
const itemCount = parseInt(await rl.question('Number of Items: '), 10)

const items = []
for (let i = 1; i <= itemCount; i++) {
    const itemId = await rl.question(`Item ${i} ID: `)
    const quantity = await rl.question(`Item ${i} Quantity: `)
    items.push({ itemId, quantity })
}

rl.close()

const order = { orderId, customerId, customerLatitude, customerLongitude, items }
await writeFile('order-input.json', JSON.stringify(order, null, 2))


console.log('Running: npx playwright test smartwarehouse.spec.js\n')

const result = spawnSync(
    'npx',
    ['playwright', 'test', 'smartwarehouse.spec.js'],
    { stdio: 'inherit', cwd: process.cwd(), shell: true }
)

if (result.error) {
    console.error('Failed to launch Playwright:', result.error)
    process.exit(1)
}

console.log('\nPlaywright exited with status:', result.status)
process.exit(result.status ?? 1) */