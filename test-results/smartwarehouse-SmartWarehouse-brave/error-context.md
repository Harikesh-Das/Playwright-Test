# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smartwarehouse.spec.js >> SmartWarehouse
- Location: tests\smartwarehouse.spec.js:5:1

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('row', { name: 'Item Selection 1032 CUST032' }).getByLabel('Navigation') resolved to 2 elements:
    1) <button data-sap-ui-render="" data-ui5-accesskey="" aria-label="Navigation" aria-keyshortcuts="Enter" class="sapMBtnBase sapMBtn sapMLIBType sapMLIBImgNav" id="smartwarehouse::SalesOrderListReport--fe::table::SalesOrder::LineItem-innerTableRow-__clone12-imgNav" data-sap-ui="smartwarehouse::SalesOrderListReport--fe::table::SalesOrder::LineItem-innerTableRow-__clone12-imgNav">…</button> aka locator('[id="smartwarehouse::SalesOrderListReport--fe::table::SalesOrder::LineItem-innerTableRow-__clone12-imgNav"]')
    2) <button data-sap-ui-render="" data-ui5-accesskey="" aria-label="Navigation" aria-keyshortcuts="Enter" class="sapMBtnBase sapMBtn sapMLIBType sapMLIBImgNav" id="smartwarehouse::SalesOrderListReport--fe::table::SalesOrder::LineItem-innerTableRow-__clone35-imgNav" data-sap-ui="smartwarehouse::SalesOrderListReport--fe::table::SalesOrder::LineItem-innerTableRow-__clone35-imgNav">…</button> aka locator('[id="smartwarehouse::SalesOrderListReport--fe::table::SalesOrder::LineItem-innerTableRow-__clone35-imgNav"]')

Call log:
  - waiting for getByRole('row', { name: 'Item Selection 1032 CUST032' }).getByLabel('Navigation')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic:
    - status
    - status
    - alert [ref=e18]: Sales Order created successfully
  - article [ref=e27]:
    - banner "List Report Header" [ref=e28]:
      - generic [ref=e29]:
        - button "Standard"
        - generic [ref=e31]:
          - generic [ref=e36]:
            - heading "Standard" [level=2] [ref=e38]
            - button "View Standard" [ref=e40] [cursor=pointer]:
              - generic [aria-hidden] [ref=e42]: 
          - generic [ref=e44]:
            - button "Create Sales Order" [active] [ref=e46] [cursor=pointer]
            - button "Share (Ctrl+Shift+S)" [ref=e50] [cursor=pointer]:
              - generic [ref=e51]:
                - generic [aria-hidden] [ref=e52]: 
                - text: 
        - generic [ref=e53]: No filters active
        - button "Expand Header" [ref=e56] [cursor=pointer]:
          - generic [aria-hidden] [ref=e58]: 
    - generic [ref=e64]:
      - toolbar "Sales Orders (36)" [ref=e65]:
        - generic [ref=e66]:
          - heading "Sales Orders" [level=3] [ref=e67]
          - generic [ref=e68]: (36)
        - button "Delete" [disabled] [ref=e70]
        - separator [ref=e73]
        - button "Copy to Clipboard" [disabled] [ref=e74]:
          - generic [aria-hidden] [ref=e76]: 
        - listbox [ref=e77]:
          - option "Show More per Row" [ref=e78] [cursor=pointer]:
            - generic [aria-hidden] [ref=e81]: 
          - option "Show Less per Row" [selected] [ref=e82] [cursor=pointer]:
            - generic [aria-hidden] [ref=e85]: 
        - button "Settings" [ref=e86] [cursor=pointer]:
          - generic [aria-hidden] [ref=e88]: 
        - group "Export Table Split Button Press Enter to trigger action and Arrow Down to open menu" [ref=e90]:
          - generic [ref=e91]:
            - button "excel-attachment" [ref=e92] [cursor=pointer]:
              - generic [aria-hidden] [ref=e94]: 
            - button "Open Menu" [ref=e95] [cursor=pointer]:
              - generic [aria-hidden] [ref=e97]: 
      - grid "Sales Orders (36)" [ref=e98]:
        - rowgroup [ref=e99]:
          - row [ref=e100]:
            - columnheader "Selection" [ref=e101]:
              - checkbox "Select All" [ref=e102]
            - columnheader "Order ID" [ref=e104]:
              - generic "Order ID" [ref=e108]
            - columnheader "Customer ID" [ref=e111]:
              - generic "Customer ID" [ref=e115]
            - columnheader "Status" [ref=e118]:
              - generic "Status" [ref=e122]
            - columnheader "Row Actions" [ref=e125]
        - rowgroup [ref=e126]:
          - row [ref=e127] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e128]:
              - checkbox "Item Selection" [ref=e129]
            - gridcell "1009" [ref=e131]
            - gridcell "CUST009" [ref=e133]
            - gridcell "allocated" [ref=e135]
            - gridcell [ref=e137]:
              - button "Navigation" [ref=e138]:
                - generic [aria-hidden] [ref=e140]: 
          - row [ref=e141] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e142]:
              - checkbox "Item Selection" [ref=e143]
            - gridcell "1016" [ref=e145]
            - gridcell "CUST016" [ref=e147]
            - gridcell "open" [ref=e149]
            - gridcell [ref=e151]:
              - button "Navigation" [ref=e152]:
                - generic [aria-hidden] [ref=e154]: 
          - row [ref=e155] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e156]:
              - checkbox "Item Selection" [ref=e157]
            - gridcell "1031" [ref=e159]
            - gridcell "CUST031" [ref=e161]
            - gridcell "open" [ref=e163]
            - gridcell [ref=e165]:
              - button "Navigation" [ref=e166]:
                - generic [aria-hidden] [ref=e168]: 
          - row [ref=e169] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e170]:
              - checkbox "Item Selection" [ref=e171]
            - gridcell "67867" [ref=e173]
            - gridcell "jhgjh" [ref=e175]
            - gridcell "open" [ref=e177]
            - gridcell [ref=e179]:
              - button "Navigation" [ref=e180]:
                - generic [aria-hidden] [ref=e182]: 
          - row [ref=e183] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e184]:
              - checkbox "Item Selection" [ref=e185]
            - gridcell "1012" [ref=e187]
            - gridcell "CUST012" [ref=e189]
            - gridcell "open" [ref=e191]
            - gridcell [ref=e193]:
              - button "Navigation" [ref=e194]:
                - generic [aria-hidden] [ref=e196]: 
          - row [ref=e197] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e198]:
              - checkbox "Item Selection" [ref=e199]
            - gridcell "1007" [ref=e201]
            - gridcell "CUST007" [ref=e203]
            - gridcell "open" [ref=e205]
            - gridcell [ref=e207]:
              - button "Navigation" [ref=e208]:
                - generic [aria-hidden] [ref=e210]: 
          - row [ref=e211] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e212]:
              - checkbox "Item Selection" [ref=e213]
            - gridcell "1027" [ref=e215]
            - gridcell "CUST027" [ref=e217]
            - gridcell "open" [ref=e219]
            - gridcell [ref=e221]:
              - button "Navigation" [ref=e222]:
                - generic [aria-hidden] [ref=e224]: 
          - row [ref=e225] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e226]:
              - checkbox "Item Selection" [ref=e227]
            - gridcell "1026" [ref=e229]
            - gridcell "CUST026" [ref=e231]
            - gridcell "open" [ref=e233]
            - gridcell [ref=e235]:
              - button "Navigation" [ref=e236]:
                - generic [aria-hidden] [ref=e238]: 
          - row [ref=e239] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e240]:
              - checkbox "Item Selection" [ref=e241]
            - gridcell "1032" [ref=e243]
            - gridcell "CUST032" [ref=e245]
            - gridcell "allocated" [ref=e247]
            - gridcell [ref=e249]:
              - button "Navigation" [ref=e250]:
                - generic [aria-hidden] [ref=e252]: 
          - row [ref=e253] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e254]:
              - checkbox "Item Selection" [ref=e255]
            - gridcell "1033" [ref=e257]
            - gridcell "JHKHKJ" [ref=e259]
            - gridcell "open" [ref=e261]
            - gridcell [ref=e263]:
              - button "Navigation" [ref=e264]:
                - generic [aria-hidden] [ref=e266]: 
          - row [ref=e267] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e268]:
              - checkbox "Item Selection" [ref=e269]
            - gridcell "1005" [ref=e271]
            - gridcell "CUST005" [ref=e273]
            - gridcell "open" [ref=e275]
            - gridcell [ref=e277]:
              - button "Navigation" [ref=e278]:
                - generic [aria-hidden] [ref=e280]: 
          - row [ref=e281] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e282]:
              - checkbox "Item Selection" [ref=e283]
            - gridcell "1017" [ref=e285]
            - gridcell "CUST017" [ref=e287]
            - gridcell "open" [ref=e289]
            - gridcell [ref=e291]:
              - button "Navigation" [ref=e292]:
                - generic [aria-hidden] [ref=e294]: 
          - row [ref=e295] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e296]:
              - checkbox "Item Selection" [ref=e297]
            - gridcell "1015" [ref=e299]
            - gridcell "CUST015" [ref=e301]
            - gridcell "open" [ref=e303]
            - gridcell [ref=e305]:
              - button "Navigation" [ref=e306]:
                - generic [aria-hidden] [ref=e308]: 
          - row [ref=e309] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e310]:
              - checkbox "Item Selection" [ref=e311]
            - gridcell "1020" [ref=e313]
            - gridcell "CUST020" [ref=e315]
            - gridcell "open" [ref=e317]
            - gridcell [ref=e319]:
              - button "Navigation" [ref=e320]:
                - generic [aria-hidden] [ref=e322]: 
          - row [ref=e323] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e324]:
              - checkbox "Item Selection" [ref=e325]
            - gridcell "1022" [ref=e327]
            - gridcell "CUST022" [ref=e329]
            - gridcell "open" [ref=e331]
            - gridcell [ref=e333]:
              - button "Navigation" [ref=e334]:
                - generic [aria-hidden] [ref=e336]: 
          - row [ref=e337] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e338]:
              - checkbox "Item Selection" [ref=e339]
            - gridcell "1028" [ref=e341]
            - gridcell "CUST028" [ref=e343]
            - gridcell "open" [ref=e345]
            - gridcell [ref=e347]:
              - button "Navigation" [ref=e348]:
                - generic [aria-hidden] [ref=e350]: 
          - row [ref=e351] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e352]:
              - checkbox "Item Selection" [ref=e353]
            - gridcell "1033" [ref=e355]
            - gridcell "JHKHKJ" [ref=e357]
            - gridcell "open" [ref=e359]
            - gridcell [ref=e361]:
              - button "Navigation" [ref=e362]:
                - generic [aria-hidden] [ref=e364]: 
          - row [ref=e365] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e366]:
              - checkbox "Item Selection" [ref=e367]
            - gridcell "1002" [ref=e369]
            - gridcell "CUST002" [ref=e371]
            - gridcell "open" [ref=e373]
            - gridcell [ref=e375]:
              - button "Navigation" [ref=e376]:
                - generic [aria-hidden] [ref=e378]: 
          - row [ref=e379] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e380]:
              - checkbox "Item Selection" [ref=e381]
            - gridcell "1003" [ref=e383]
            - gridcell "CUST003" [ref=e385]
            - gridcell "open" [ref=e387]
            - gridcell [ref=e389]:
              - button "Navigation" [ref=e390]:
                - generic [aria-hidden] [ref=e392]: 
          - row [ref=e393] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e394]:
              - checkbox "Item Selection" [ref=e395]
            - gridcell "1032" [ref=e397]
            - gridcell "CUST032" [ref=e399]
            - gridcell "open" [ref=e401]
            - gridcell [ref=e403]:
              - button "Navigation" [ref=e404]:
                - generic [aria-hidden] [ref=e406]: 
          - row [ref=e407] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e408]:
              - checkbox "Item Selection" [ref=e409]
            - gridcell "1010" [ref=e411]
            - gridcell "CUST010" [ref=e413]
            - gridcell "open" [ref=e415]
            - gridcell [ref=e417]:
              - button "Navigation" [ref=e418]:
                - generic [aria-hidden] [ref=e420]: 
          - row [ref=e421] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e422]:
              - checkbox "Item Selection" [ref=e423]
            - gridcell "1004" [ref=e425]
            - gridcell "CUST004" [ref=e427]
            - gridcell "open" [ref=e429]
            - gridcell [ref=e431]:
              - button "Navigation" [ref=e432]:
                - generic [aria-hidden] [ref=e434]: 
          - row [ref=e435] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e436]:
              - checkbox "Item Selection" [ref=e437]
            - gridcell "1024" [ref=e439]
            - gridcell "CUST024" [ref=e441]
            - gridcell "open" [ref=e443]
            - gridcell [ref=e445]:
              - button "Navigation" [ref=e446]:
                - generic [aria-hidden] [ref=e448]: 
          - row [ref=e449] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e450]:
              - checkbox "Item Selection" [ref=e451]
            - gridcell "1030" [ref=e453]
            - gridcell "CUST030" [ref=e455]
            - gridcell "open" [ref=e457]
            - gridcell [ref=e459]:
              - button "Navigation" [ref=e460]:
                - generic [aria-hidden] [ref=e462]: 
          - row [ref=e463] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e464]:
              - checkbox "Item Selection" [ref=e465]
            - gridcell "1014" [ref=e467]
            - gridcell "CUST014" [ref=e469]
            - gridcell "open" [ref=e471]
            - gridcell [ref=e473]:
              - button "Navigation" [ref=e474]:
                - generic [aria-hidden] [ref=e476]: 
          - row [ref=e477] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e478]:
              - checkbox "Item Selection" [ref=e479]
            - gridcell "1019" [ref=e481]
            - gridcell "CUST019" [ref=e483]
            - gridcell "open" [ref=e485]
            - gridcell [ref=e487]:
              - button "Navigation" [ref=e488]:
                - generic [aria-hidden] [ref=e490]: 
          - row [ref=e491] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e492]:
              - checkbox "Item Selection" [ref=e493]
            - gridcell "1021" [ref=e495]
            - gridcell "CUST021" [ref=e497]
            - gridcell "open" [ref=e499]
            - gridcell [ref=e501]:
              - button "Navigation" [ref=e502]:
                - generic [aria-hidden] [ref=e504]: 
          - row [ref=e505] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e506]:
              - checkbox "Item Selection" [ref=e507]
            - gridcell "1029" [ref=e509]
            - gridcell "CUST029" [ref=e511]
            - gridcell "open" [ref=e513]
            - gridcell [ref=e515]:
              - button "Navigation" [ref=e516]:
                - generic [aria-hidden] [ref=e518]: 
          - row [ref=e519] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e520]:
              - checkbox "Item Selection" [ref=e521]
            - gridcell "1001" [ref=e523]
            - gridcell "CUST001" [ref=e525]
            - gridcell "open" [ref=e527]
            - gridcell [ref=e529]:
              - button "Navigation" [ref=e530]:
                - generic [aria-hidden] [ref=e532]: 
          - row [ref=e533] [cursor=pointer]:
            - gridcell "Item Selection" [ref=e534]:
              - checkbox "Item Selection" [ref=e535]
            - gridcell "1011" [ref=e537]
            - gridcell "CUST011" [ref=e539]
            - gridcell "open" [ref=e541]
            - gridcell [ref=e543]:
              - button "Navigation" [ref=e544]:
                - generic [aria-hidden] [ref=e546]: 
```

# Test source

```ts
  1   | // @ts-check
  2   | import { test, expect } from '@playwright/test'
  3   | import { readFile } from 'node:fs/promises'
  4   | 
  5   | test('SmartWarehouse', async ({ page }) => {
  6   |     const orders = JSON.parse(await readFile('order-input.json', 'utf-8'))
  7   | 
  8   |     await page.goto('http://localhost:4004/smartwarehouse/index.html?sap-ui-xx-viewCache=false#')
  9   | 
  10  |     for (const order of orders) {
  11  |         await page.getByRole('button', { name: 'Create Sales Order' }).click()
  12  | 
  13  |         await page.locator('[id="smartwarehouse::SalesOrderListReport--orderId-inner"]').fill(order.orderId)
  14  |         await page.locator('[id="smartwarehouse::SalesOrderListReport--customerId-inner"]').fill(order.customerId)
  15  |         await page.locator('[id="smartwarehouse::SalesOrderListReport--customerLatitude-inner"]').fill(order.customerLatitude)
  16  |         await page.locator('[id="smartwarehouse::SalesOrderListReport--customerLongitude-inner"]').fill(order.customerLongitude)
  17  | 
  18  |         const itemIdBoxes = page.getByRole('textbox', { name: 'Item ID' })
  19  |         const qtyBoxes = page.getByPlaceholder('Quantity')
  20  |         const removeButtons = page.getByRole('button', { name: 'Remove' })
  21  | 
  22  |         // dialog is reused, so wait for its rows to render before counting them
  23  |         await itemIdBoxes.first().waitFor({ state: 'visible' })
  24  | 
  25  |         // make the number of rows match this order's items
  26  |         let rows = await itemIdBoxes.count()
  27  | 
  28  |         while (rows < order.items.length) {
  29  |             await page.getByRole('button', { name: 'Add Item' }).click()
  30  |             rows++
  31  |             await expect(itemIdBoxes).toHaveCount(rows)
  32  |         }
  33  | 
  34  |         while (rows > order.items.length) {
  35  |             await removeButtons.last().click()
  36  |             rows--
  37  |             await expect(itemIdBoxes).toHaveCount(rows)
  38  |         }
  39  | 
  40  |         // fill every row (this also overwrites any old values left in reused rows)
  41  |         for (let i = 0; i < order.items.length; i++) {
  42  |             await itemIdBoxes.nth(i).fill(order.items[i].itemId)
  43  |             await itemIdBoxes.nth(i).blur()
  44  | 
  45  |             await qtyBoxes.nth(i).fill(order.items[i].quantity)
  46  |             await qtyBoxes.nth(i).blur()
  47  |         }
  48  | 
  49  |         await page.getByRole('button', { name: 'Save' }).click()
  50  |     }
  51  | 
> 52  |     await page.getByRole('row', { name: 'Item Selection 1032 CUST032' }).getByLabel('Navigation').click();
      |                                                                                                   ^ Error: locator.click: Error: strict mode violation: getByRole('row', { name: 'Item Selection 1032 CUST032' }).getByLabel('Navigation') resolved to 2 elements:
  53  |     await page.getByLabel('Sections navigation bar').getByText('Warehouse Allocation').click();
  54  |     await page.getByRole('button', { name: 'Allocate Warehouse' }).click();
  55  | })
  56  | /* // Excel Code
  57  | // @ts-check
  58  | import { test, expect } from '@playwright/test'
  59  | import { readFile } from 'node:fs/promises'
  60  | 
  61  | test('SmartWarehouse', async ({ page }) => {
  62  |     const orders = JSON.parse(await readFile('order-input.json', 'utf-8'))
  63  | 
  64  |     await page.goto('http://localhost:4004/smartwarehouse/index.html?sap-ui-xx-viewCache=false#')
  65  | 
  66  |     for (const order of orders){
  67  |         await page.getByRole('button', { name: 'Create Sales Order' }).click()
  68  |         
  69  |         await page.locator('[id="smartwarehouse::SalesOrderListReport--orderId-inner"]').fill(order.orderId)
  70  |         await page.locator('[id="smartwarehouse::SalesOrderListReport--customerId-inner"]').fill(order.customerId)
  71  |         await page.locator('[id="smartwarehouse::SalesOrderListReport--customerLatitude-inner"]').fill(order.customerLatitude)
  72  |         await page.locator('[id="smartwarehouse::SalesOrderListReport--customerLongitude-inner"]').fill(order. customerLongitude)
  73  |     
  74  |         const itemIdBoxes = page.getByRole('textbox', { name: 'Item ID' })
  75  |         const qtyBoxes = page.getByPlaceholder('Quantity')
  76  |     
  77  |         for (let i = 0; i < order.items.length; i++) {
  78  |             if (i > 0) {
  79  |                 await page.getByRole('button', { name: 'Add Item' }).click()
  80  |             }
  81  |     
  82  |             await itemIdBoxes.nth(i).fill(order.items[i].itemId)
  83  |             await itemIdBoxes.nth(i).blur()
  84  |     
  85  |             await qtyBoxes.nth(i).fill(order.items[i].quantity)
  86  |             await qtyBoxes.nth(i).blur()
  87  |         }
  88  |         await page.getByRole('button', { name: 'Save' }).click()
  89  |     }
  90  | 
  91  | 
  92  |     await page.getByRole('row', { name: 'Item Selection 1032 CUST032' }).getByLabel('Navigation').click();
  93  |     await page.getByLabel('Sections navigation bar').getByText('Warehouse Allocation').click();
  94  |     await page.getByRole('button', { name: 'Allocate Warehouse' }).click(); 
  95  | 
  96  | })
  97  |     */
  98  |     
  99  | 
  100 | 
  101 | 
  102 | 
  103 | 
  104 | 
  105 | 
  106 | 
  107 | 
  108 | 
  109 | 
  110 | 
  111 | 
  112 | 
  113 | 
  114 | 
  115 | 
  116 | 
  117 | 
  118 | 
  119 | 
  120 | 
  121 | 
  122 | 
  123 | 
  124 | 
  125 | 
  126 | 
  127 | 
  128 | 
  129 | 
  130 | 
  131 | 
  132 | 
  133 | 
  134 | 
  135 | 
  136 | 
  137 | 
  138 | 
  139 | 
  140 | 
  141 | 
  142 | 
  143 | 
  144 | 
  145 | 
  146 | 
  147 | 
  148 | 
  149 | 
  150 | 
  151 | 
  152 | 
```