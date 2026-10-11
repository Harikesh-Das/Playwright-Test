// @ts-check
import { test, expect } from '@playwright/test'
import { readFile } from 'node:fs/promises'

test('SmartWarehouse', async ({ page }) => {
    const orders = JSON.parse(await readFile('order-input.json', 'utf-8'))

    await page.goto('http://localhost:4004/smartwarehouse/index.html?sap-ui-xx-viewCache=false#')

    for (const order of orders) {
        await page.getByRole('button', { name: 'Create Sales Order' }).click()

        await page.locator('[id="smartwarehouse::SalesOrderListReport--orderId-inner"]').fill(order.orderId)
        await page.locator('[id="smartwarehouse::SalesOrderListReport--customerId-inner"]').fill(order.customerId)
        await page.locator('[id="smartwarehouse::SalesOrderListReport--customerLatitude-inner"]').fill(order.customerLatitude)
        await page.locator('[id="smartwarehouse::SalesOrderListReport--customerLongitude-inner"]').fill(order.customerLongitude)

        const itemIdBoxes = page.getByRole('textbox', { name: 'Item ID' })
        const qtyBoxes = page.getByPlaceholder('Quantity')
        const removeButtons = page.getByRole('button', { name: 'Remove' })

        // dialog is reused, so wait for its rows to render before counting them
        await itemIdBoxes.first().waitFor({ state: 'visible' })

        // make the number of rows match this order's items
        let rows = await itemIdBoxes.count()

        while (rows < order.items.length) {
            await page.getByRole('button', { name: 'Add Item' }).click()
            rows++
            await expect(itemIdBoxes).toHaveCount(rows)
        }

        while (rows > order.items.length) {
            await removeButtons.last().click()
            rows--
            await expect(itemIdBoxes).toHaveCount(rows)
        }

        // fill every row (this also overwrites any old values left in reused rows)
        for (let i = 0; i < order.items.length; i++) {
            await itemIdBoxes.nth(i).fill(order.items[i].itemId)
            await itemIdBoxes.nth(i).blur()

            await qtyBoxes.nth(i).fill(order.items[i].quantity)
            await qtyBoxes.nth(i).blur()
        }

        await page.getByRole('button', { name: 'Save' }).click()
    }

    await page.getByRole('row', { name: 'Item Selection 1032 CUST032' }).getByLabel('Navigation').click();
    await page.getByLabel('Sections navigation bar').getByText('Warehouse Allocation').click();
    await page.getByRole('button', { name: 'Allocate Warehouse' }).click();
})
/* // Excel Code
// @ts-check
import { test, expect } from '@playwright/test'
import { readFile } from 'node:fs/promises'

test('SmartWarehouse', async ({ page }) => {
    const orders = JSON.parse(await readFile('order-input.json', 'utf-8'))

    await page.goto('http://localhost:4004/smartwarehouse/index.html?sap-ui-xx-viewCache=false#')

    for (const order of orders){
        await page.getByRole('button', { name: 'Create Sales Order' }).click()
        
        await page.locator('[id="smartwarehouse::SalesOrderListReport--orderId-inner"]').fill(order.orderId)
        await page.locator('[id="smartwarehouse::SalesOrderListReport--customerId-inner"]').fill(order.customerId)
        await page.locator('[id="smartwarehouse::SalesOrderListReport--customerLatitude-inner"]').fill(order.customerLatitude)
        await page.locator('[id="smartwarehouse::SalesOrderListReport--customerLongitude-inner"]').fill(order. customerLongitude)
    
        const itemIdBoxes = page.getByRole('textbox', { name: 'Item ID' })
        const qtyBoxes = page.getByPlaceholder('Quantity')
    
        for (let i = 0; i < order.items.length; i++) {
            if (i > 0) {
                await page.getByRole('button', { name: 'Add Item' }).click()
            }
    
            await itemIdBoxes.nth(i).fill(order.items[i].itemId)
            await itemIdBoxes.nth(i).blur()
    
            await qtyBoxes.nth(i).fill(order.items[i].quantity)
            await qtyBoxes.nth(i).blur()
        }
        await page.getByRole('button', { name: 'Save' }).click()
    }


    await page.getByRole('row', { name: 'Item Selection 1032 CUST032' }).getByLabel('Navigation').click();
    await page.getByLabel('Sections navigation bar').getByText('Warehouse Allocation').click();
    await page.getByRole('button', { name: 'Allocate Warehouse' }).click(); 

})
    */
    






































































/*
PS C:\Users\Myrar3\Desktop\Playwright> npx playwright test

Running 1 test using 1 worker
[chromium] › tests\example.spec.js:7:5 › Create quotation
FOUND Description in: __container9-iframe
URL: https://s4srv25.nodomain.com:44325/sap(====)/bc/bsp/sap/crm_ui_start/default.htm?wcf-target-id=TBT116QMCR&sap-language=EN&sap-client=100&sap-iframe-hint=WCF&sap-ie=edge&sap-theme
=sap_horizon&sap-touch=0&sap-target-navmode=inplace&sap-ushell-timeout=0&sap-shell=FLP1.136.0-NWBC&saprole=FLP
  Slow test file: [chromium] › tests\example.spec.js (19.5s)
  Consider splitting slow test files to speed up parallel execution
  1 passed (21.1s)

To open last HTML report run:

  npx playwright show-report

PS C:\Users\Myrar3\Desktop\Playwright> npx playwright test --headed

Running 1 test using 1 worker
[chromium] › tests\example.spec.js:7:5 › Create quotation
FOUND Description in: __container6-iframe
URL: https://s4srv25.nodomain.com:44325/sap(====)/bc/bsp/sap/crm_ui_start/default.htm?wcf-target-id=TBT116QMCR&sap-language=EN&sap-client=100&sap-iframe-hint=WCF&sap-ie=edge&sap-theme
=sap_horizon&sap-touch=0&sap-target-navmode=inplace&sap-ushell-timeout=0&sap-shell=FLP1.136.0-NWBC&saprole=FLP
Number of inputs: 173
INPUT 0 name: htmlb_first_form_id id: htmlb_first_form_id value: myFormId
INPUT 1 name: htmlbScrollX id: null value: 0
INPUT 2 name: htmlbScrollY id: null value: 0
INPUT 3 name: htmlbevt_ty id: null value:
INPUT 4 name: htmlbdoc_id id: null value:
INPUT 5 name: htmlbevt_frm id: htmlbevt_frm value: myFormId
INPUT 6 name: htmlbevt_oid id: null value:
INPUT 7 name: htmlbevt_id id: null value:
INPUT 8 name: htmlbevt_cnt id: null value: 0
INPUT 9 name: htmlbevt_par1 id: null value:
INPUT 10 name: htmlbevt_par2 id: null value:
INPUT 11 name: htmlbevt_par3 id: null value:
INPUT 12 name: htmlbevt_par4 id: null value:
INPUT 13 name: htmlbevt_par5 id: null value:
INPUT 14 name: htmlbevt_par6 id: null value:
INPUT 15 name: htmlbevt_par7 id: null value:
INPUT 16 name: htmlbevt_par8 id: null value:
INPUT 17 name: htmlbevt_par9 id: null value:
INPUT 18 name: onInputProcessing id: null value: htmlb
INPUT 19 name: myFormId_complete id: myFormId_complete value:
INPUT 20 name: SVH_INPUTFIELD_ID id: SVH_INPUTFIELD_ID value:
INPUT 21 name: SVH_INPUTFIELD_VALUE id: SVH_INPUTFIELD_VALUE value:
INPUT 22 name: thtmlbModifiedInputfieldIds id: thtmlbModifiedInputfieldIds value:
INPUT 23 name: sap-htmlb-design id: sap-htmlb-design value:
INPUT 24 name: sap-ajaxtarget id: sap-ajaxtarget value:
INPUT 25 name: sap-ajax_dh_mode id: sap-ajax_dh_mode value: AUTO
INPUT 26 name: thPreviewOvl_minimizeState id: thPreviewOvl_minimizeState value:
INPUT 27 name: thPreviewOvl_height id: thPreviewOvl_height value:
INPUT 28 name: thPreviewOvl_width id: thPreviewOvl_width value:
INPUT 29 name: thPreviewOvl_top id: thPreviewOvl_top value: 0px
INPUT 30 name: thPreviewOvl_left id: thPreviewOvl_left value: 0px
INPUT 31 name: thPreviewOvl_oldHeight id: thPreviewOvl_oldHeight value:
INPUT 32 name: thPreviewOvl_oldWidth id: thPreviewOvl_oldWidth value:
INPUT 33 name: wcf-secure-id id: wcf-secure-id value: BA1DE610FF093B94C2F6B494181D16F3
INPUT 34 name: null id: wcf_session_id value: SID:ANON:s4srv25_A4H_25:935o4qtETnj0tIJPf65AQbyjDOuWkPBlkCCOuhlK-NEW
INPUT 35 name: thtmlbKeyboardFocusId id: thtmlbKeyboardFocusId value: C9_W36_V39_0001_expand_link
INPUT 36 name: thtmlbKeyboardSelectId id: thtmlbKeyboardSelectId value:
INPUT 37 name: lastFocusedAB id: lastFocusedAB value:
INPUT 38 name: AutoSaveFlag id: AutoSaveFlag value:
INPUT 39 name: crmFrwScrollXPos id: crmFrwScrollXPos value: 0
INPUT 40 name: crmFrwScrollYPos id: crmFrwScrollYPos value: 0
INPUT 41 name: crmFrwOldScrollHeight id: crmFrwOldScrollHeight value: 0
INPUT 42 name: crmFrwOldScrollXPos id: crmFrwOldScrollXPos value: 0
INPUT 43 name: crmFrwOldScrollYPos id: crmFrwOldScrollYPos value: 0
INPUT 44 name: flashIslandsAsString id: flashIslandsAsString value:
INPUT 45 name: callbackFlashIslands id: callbackFlashIslands value: /sap(bD1FTiZjPTEwMCZpPTEmcz1TSUQlM2FBTk9OJTNhczRzcnYyNV9BNEhfMjUlM2E5MzVvNHF0RVRuajB0SUpQZjY1QVFieWpET3VXa1BCbGtDQ0
91aGxLLUFUVA==)/webcuif/uif_callback?sap-theme=sap_horizon&sap-shell=FLP1.136.0-NWBC&sap-touch=0&crm_handler=CL_THTMLBX_FLASH_ISLAND&wcf-request-ticket=BA1DE610FF093B94C2F6B494181D16F
3
INPUT 46 name: silverlightIslandsAsString id: silverlightIslandsAsString value:
INPUT 47 name: callbackSilverlightIslands id: callbackSilverlightIslands value: /sap(bD1FTiZjPTEwMCZpPTEmcz1TSUQlM2FBTk9OJTNhczRzcnYyNV9BNEhfMjUlM2E5MzVvNHF0RVRuajB0SUpQZjY1QVFieWpET3
VXa1BCbGtDQ091aGxLLUFUVA==)/webcuif/uif_callback?sap-theme=sap_horizon&sap-shell=FLP1.136.0-NWBC&sap-touch=0&crm_handler=CL_THTMLBX_SILVERLIGHT_ISLAND&wcf-request-ticket=BA1DE610FF093
B94C2F6B494181D16F3
INPUT 48 name: th-mes-isex id: th-mes-isex value:
INPUT 49 name: C1_W1_V2_V3_V32_bchistory_selection id: C1_W1_V2_V3_V32_bchistory_selection value:
INPUT 50 name: FLPShare id: FLPShare__toggled value: UP
INPUT 51 name: C9_W36_V39_thtmlb_menuButton_24 id: C9_W36_V39_thtmlb_menuButton_24__toggled value: UP
INPUT 52 name: thtmlbUIS4HOP1 id: thtmlbUIS4HOP1 value:
INPUT 53 name: C9_W36_V39_thtmlb_menuButton_4 id: C9_W36_V39_thtmlb_menuButton_4__toggled value: UP
INPUT 54 name: C9_W36_V39_V40_thtmlb_menuButton_67 id: C9_W36_V39_V40_thtmlb_menuButton_67__toggled value: UP
INPUT 55 name: null id: C9_W36_V39_V40_btadminh_struct.object_id value:
INPUT 56 name: null id: C9_W36_V39_V40_btadminh_struct.description value:
INPUT 57 name: null id: C9_W36_V39_V40_btpartnerset_soldto_name value:
INPUT 58 name: null id: C9_W36_V39_V40_btpartnerset_contact_name value:
INPUT 59 name: null id: C9_W36_V39_V40_customerh_struct.zz1_serviceexpirydate_srh_dp-inner value:
INPUT 60 name: null id: C9_W36_V39_V40_customerh_struct.zz1_serviceexpirydate_srh value:
INPUT 61 name: null id: C9_W36_V39_V40_customerh_struct.zz1_financemodel_srh value:
INPUT 62 name: null id: C9_W36_V39_V40_btadminh_po_number_sold value:
INPUT 63 name: null id: C9_W36_V39_V40_btadminh_priority__key value: 0
INPUT 64 name: null id: C9_W36_V39_V40_btadminh_priority value: (Not Selected)
INPUT 65 name: null id: C9_W36_V39_V40_btadminh_lcstatus__key value: E0001
INPUT 66 name: null id: C9_W36_V39_V40_btadminh_lcstatus value: Quotation Created
INPUT 67 name: null id: C9_W36_V39_V40_btadminh_credit_status value: No item is relevant for credit check
INPUT 68 name: null id: C9_W36_V39_V40_btadminh_quotaccstatus value: No items accepted
INPUT 69 name: null id: C9_W36_V39_V40_btadminh_rejection_status value: Nothing Rejected
INPUT 70 name: null id: C9_W36_V39_V40_btadminh_net_value value: 0,00
INPUT 71 name: null id: C9_W36_V39_V40_btadminh_currency value:
INPUT 72 name: null id: C9_W36_V39_V40_btadminh_gross_value value: 0,00
INPUT 73 name: null id: C9_W36_V39_V40_btadminh_gross_value_currency value:
INPUT 74 name: null id: C9_W36_V39_V40_btrefobjmain_struct.functional_location_id value:
INPUT 75 name: null id: C9_W36_V39_V40_btrefobjmain_equipmentid value:
INPUT 76 name: null id: C9_W36_V39_V40_btrefobjmain_productid value:
INPUT 77 name: null id: C9_W36_V39_V40_btrefobjmain_equipmentserialnumber value:
INPUT 78 name: null id: C9_W36_V39_V40_btdatequotevalidfrom_date_dp-inner value: 01.10.2026
INPUT 79 name: null id: C9_W36_V39_V40_btdatequotevalidfrom_date value: 01.10.2026
INPUT 80 name: C9_W36_V39_V40_btdatequotevalidfrom_time id: C9_W36_V39_V40_btdatequotevalidfrom_time__key value: 00:00
INPUT 81 name: null id: C9_W36_V39_V40_btdatequotevalidfrom_time value: 00:00
INPUT 82 name: null id: C9_W36_V39_V40_btdatequotevalidto_date_dp-inner value: 01.10.2026
INPUT 83 name: null id: C9_W36_V39_V40_btdatequotevalidto_date value: 01.10.2026
INPUT 84 name: C9_W36_V39_V40_btdatequotevalidto_time id: C9_W36_V39_V40_btdatequotevalidto_time__key value: 00:00
INPUT 85 name: null id: C9_W36_V39_V40_btdatequotevalidto_time value: 00:00
INPUT 86 name: null id: C9_W36_V39_V40_btadminh_servicecontractid value:
INPUT 87 name: null id: C9_W36_V39_V40_btadminh_servicecontractdescr value:
INPUT 88 name: null id: C9_W36_V39_V40_btserviceh_struct.transac_under_warranty__key value:
INPUT 89 name: null id: C9_W36_V39_V40_btserviceh_struct.transac_under_warranty value: No Warranty
INPUT 90 name: null id: C9_W36_V39_V40_warrantyvn_warranty_id value:
INPUT 91 name: null id: C9_W36_V39_V40_warrantyvn_warranty_desc value:
INPUT 92 name: null id: C9_W36_V39_V40_warrantyvn_warranty_end_date value:
INPUT 93 name: null id: C11_W43_V44_btcategoryfirst_cat01__key value:
INPUT 94 name: null id: C11_W43_V44_btcategoryfirst_cat01 value: (Not Selected)
INPUT 95 name: null id: C11_W43_V44_btcategoryfirst_cat02__key value:
INPUT 96 name: null id: C11_W43_V44_btcategoryfirst_cat02 value: (Not Selected)
INPUT 97 name: null id: C11_W43_V44_btcategoryfirst_cat03__key value:
INPUT 98 name: null id: C11_W43_V44_btcategoryfirst_cat03 value: (Not Selected)
INPUT 99 name: null id: C11_W43_V44_btcategoryfirst_cat04__key value:
INPUT 100 name: null id: C11_W43_V44_btcategoryfirst_cat04 value: (Not Selected)
INPUT 101 name: null id: C12_W45_V46_btacassignset_struct.ac_object_type__key value:
INPUT 102 name: null id: C12_W45_V46_btacassignset_struct.ac_object_type value: (Not Selected)
INPUT 103 name: null id: C9_W36_V39_V40_customerh_struct.zz1_new_dropdown_srh value:
INPUT 104 name: null id: C9_W36_V39_V40_customerh_struct.zz1_billing_model_srh value: PPU
INPUT 105 name: null id: C9_W36_V39_V40_customerh_struct.zz1_billing_date_srh_dp-inner value: 07.12.2024
INPUT 106 name: null id: C9_W36_V39_V40_customerh_struct.zz1_billing_date_srh value: 07.12.2024
INPUT 107 name: C9_W36_V39_V40_customerh_struct.zz1_new_field_srh id: C9_W36_V39_V40_customerh_struct.zz1_new_field_srh__checked value:
INPUT 108 name: C9_W36_V39_V40_customerh_struct.zz1_approvalrequired_srh id: C9_W36_V39_V40_customerh_struct.zz1_approvalrequired_srh__checked value:
INPUT 109 name: null id: C9_W36_V39_V40_customerh_struct.zz1_salesdocument_srh value:
INPUT 110 name: null id: C9_W36_V39_V40_customerh_struct.zz1_contactinfo_srh value:
INPUT 111 name: null id: C9_W36_V39_V40_customerh_struct.zz1_servicename_srh value: 0000000000
INPUT 112 name: null id: C9_W36_V39_V40_customerh_struct.zz1_ser_dd_srh value:
INPUT 113 name: null id: C9_W36_V39_V40_customerh_struct.zz_emp_dropdown value:
INPUT 114 name: null id: C9_W36_V39_V40_customerh_struct.zz1_zz_ser_hdr_srh value: 0,00
INPUT 115 name: null id: C9_W36_V39_V40_customerh_struct.zz1_priority_srh value:
INPUT 116 name: null id: C9_W36_V39_V40_customerh_struct.zz1_text_field_srh value:
INPUT 117 name: null id: C9_W36_V39_V40_customerh_struct.zz1_sd_contract_srh value:
INPUT 118 name: null id: C9_W36_V39_V40_customerh_struct.zz1_serviceemployeedd_srh value:
INPUT 119 name: C9_W36_V39_0001_iscollapsed id: C9_W36_V39_0001_iscollapsed value:
INPUT 120 name: C9_W36_V39_0001_displaymode id: C9_W36_V39_0001_displaymode value:
INPUT 121 name: null id: C9_W36_V39_0001_backendstate value: yes
INPUT 122 name: null id: thtmlbOverviewAppViewName_0001 value: BT116H_SRVO/Details
INPUT 123 name: C9_W36_V39_0002_iscollapsed id: C9_W36_V39_0002_iscollapsed value:
INPUT 124 name: C9_W36_V39_0002_displaymode id: C9_W36_V39_0002_displaymode value:
INPUT 125 name: null id: C9_W36_V39_0002_backendstate value: yes
INPUT 126 name: null id: thtmlbOverviewAppViewName_0002 value: CUItemTable.BT116QIT_SRVQ/TableWindowOVE
INPUT 127 name: C9_W36_V39_0003_iscollapsed id: C9_W36_V39_0003_iscollapsed value:
INPUT 128 name: C9_W36_V39_0003_displaymode id: C9_W36_V39_0003_displaymode value:
INPUT 129 name: null id: C9_W36_V39_0003_backendstate value: yes
INPUT 130 name: null id: thtmlbOverviewAppViewName_0003 value: CUGSText.MainWindow
INPUT 131 name: C9_W36_V39_0019_iscollapsed id: C9_W36_V39_0019_iscollapsed value: X
INPUT 132 name: C9_W36_V39_0019_displaymode id: C9_W36_V39_0019_displaymode value:
INPUT 133 name: null id: C9_W36_V39_0019_backendstate value: yes
INPUT 134 name: null id: thtmlbOverviewAppViewName_0019 value: CUBTDocFlow.BTDOCFLOW/HdrWindowOVE
INPUT 135 name: C9_W36_V39_0021_iscollapsed id: C9_W36_V39_0021_iscollapsed value: X
INPUT 136 name: C9_W36_V39_0021_displaymode id: C9_W36_V39_0021_displaymode value:
INPUT 137 name: null id: C9_W36_V39_0021_backendstate value: yes
INPUT 138 name: null id: thtmlbOverviewAppViewName_0021 value: CUBTAttachment.WCF_GC_ATTACH/MainWindow
INPUT 139 name: C9_W36_V39_0022_iscollapsed id: C9_W36_V39_0022_iscollapsed value: X
INPUT 140 name: C9_W36_V39_0022_displaymode id: C9_W36_V39_0022_displaymode value:
INPUT 141 name: null id: C9_W36_V39_0022_backendstate value: yes
INPUT 142 name: null id: thtmlbOverviewAppViewName_0022 value: BT116QH_SRVQ/ExtRefOverview
INPUT 143 name: C9_W36_V39_0023_iscollapsed id: C9_W36_V39_0023_iscollapsed value: X
INPUT 144 name: C9_W36_V39_0023_displaymode id: C9_W36_V39_0023_displaymode value:
INPUT 145 name: null id: C9_W36_V39_0023_backendstate value: yes
INPUT 146 name: null id: thtmlbOverviewAppViewName_0023 value: CUBTOutputControl.WCF_GC_OUTPUTC/MainWindow
INPUT 147 name: C9_W36_V39_0027_iscollapsed id: C9_W36_V39_0027_iscollapsed value:
INPUT 148 name: C9_W36_V39_0027_displaymode id: C9_W36_V39_0027_displaymode value:
INPUT 149 name: null id: C9_W36_V39_0027_backendstate value: yes
INPUT 150 name: null id: thtmlbOverviewAppViewName_0027 value: CUCustomer_H.BTCUSTOMER_H/MainWindow
INPUT 151 name: C9_W36_V39_0016_iscollapsed id: C9_W36_V39_0016_iscollapsed value: X
INPUT 152 name: C9_W36_V39_0016_displaymode id: C9_W36_V39_0016_displaymode value:
INPUT 153 name: null id: C9_W36_V39_0016_backendstate value: yes
INPUT 154 name: null id: thtmlbOverviewAppViewName_0016 value: CUBTDates.BTDATES/MainWindow
INPUT 155 name: thtmlbOverviewControllerID id: thtmlbOverviewControllerID value: C9_W36_V39
INPUT 156 name: thtmlbFlagForDnDChanges id: thtmlbFlagForDnDChanges value: 0
INPUT 157 name: thtmlb_menuButton_7 id: thtmlb_menuButton_7__toggled value: UP
INPUT 158 name: thtmlbScrollAreaWidth id: thtmlbScrollAreaWidth value: 1284
INPUT 159 name: thtmlbScrollAreaHeight id: thtmlbScrollAreaHeight value: 572
INPUT 160 name: null id: C1_W1_V2_thtmlb_splitter_1_position value:
INPUT 161 name: null id: thtmlb_splitter_callbackurl_C1_W1_V2_thtmlb_splitter_1 value: /sap(bD1FTiZjPTEwMCZpPTEmcz1TSUQlM2FBTk9OJTNhczRzcnYyNV9BNEhfMjUlM2E5MzVvNHF0RVRuajB0SUpQZjY1QVF
ieWpET3VXa1BCbGtDQ091aGxLLUFUVA==)/webcuif/uif_callback?sap-theme=sap_horizon&sap-shell=FLP1.136.0-NWBC&sap-touch=0&crm_handler=CL_THTMLB_SPLITTER&wcf-request-ticket=BA1DE610FF093B94C
2F6B494181D16F3
INPUT 162 name: LTX_PREFIX_ID id: LTX_PREFIX_ID value: C1_W1_V2_
INPUT 163 name: C1_W1_V2_LTX_VETO_FLAG id: C1_W1_V2_LTX_VETO_FLAG value:
INPUT 164 name: C1_W1_V2_ACTION_GUID id: C1_W1_V2_ACTION_GUID value:
INPUT 165 name: C1_W1_V2_AC_OBJECT_KEY id: C1_W1_V2_AC_OBJECT_KEY value:
INPUT 166 name: C1_W1_V2_AC_VALUE id: C1_W1_V2_AC_VALUE value:
INPUT 167 name: C1_W1_V2_AC_CONTAINER id: C1_W1_V2_AC_CONTAINER value:
INPUT 168 name: C1_W1_V2_MYITSLOCATION id: C1_W1_V2_MYITSLOCATION value:
INPUT 169 name: SESSION_TOKEN id: null value: HabXGILCpPo13FgnTM3UeA==
INPUT 170 name: null id: thWcfToWcfTargets value: BT116_SRVO|B,BT117_SRVC|B,BT156_PRVC|B,BT116_SRVQ|B,BT112_SCT|B,BT112_SC|B,BT265_PRVO|B
INPUT 171 name: th-toastMAPers id: th-toastMAPers value:
INPUT 172 name: null id: crmFrwADH_Marker value:
  Slow test file: [chromium] › tests\example.spec.js (30.3s)
  Consider splitting slow test files to speed up parallel execution
  1 passed (32.6s)
 */
































/* 
//  Terminal  Code
// @ts-check
import { test, expect } from '@playwright/test'
import { readFile } from 'node:fs/promises'

test('SmartWarehouse', async ({ page }) => {
    const order = JSON.parse(await readFile('order-input.json', 'utf-8'))

    await page.goto('http://localhost:4004/smartwarehouse/index.html?sap-ui-xx-viewCache=false#')
    await page.getByRole('button', { name: 'Create Sales Order' }).click()

    await page.locator('[id="smartwarehouse::SalesOrderListReport--orderId-inner"]').fill(order.orderId)
    await page.locator('[id="smartwarehouse::SalesOrderListReport--customerId-inner"]').fill(order.customerId)
    await page.locator('[id="smartwarehouse::SalesOrderListReport--customerLatitude-inner"]').fill(order.customerLatitude)
    await page.locator('[id="smartwarehouse::SalesOrderListReport--customerLongitude-inner"]').fill(order.customerLongitude)

    const itemIdBoxes = page.getByRole('textbox', { name: 'Item ID' })
    const qtyBoxes = page.getByPlaceholder('Quantity')

    for (let i = 0; i < order.items.length; i++) {
        if (i > 0) {
            await page.getByRole('button', { name: 'Add Item' }).click()
        }

        await itemIdBoxes.nth(i).fill(order.items[i].itemId)
        await itemIdBoxes.nth(i).blur()

        await qtyBoxes.nth(i).fill(order.items[i].quantity)
        await qtyBoxes.nth(i).blur()
    }

    await page.getByRole('button', { name: 'Save' }).click()
    await page.getByRole('row', { name: 'Item Selection 1032 CUST032' }).getByLabel('Navigation').click();
    await page.getByLabel('Sections navigation bar').getByText('Warehouse Allocation').click();
    await page.getByRole('button', { name: 'Allocate Warehouse' }).click();
    
})

 */





