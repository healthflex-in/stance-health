# Hebbal Waitlist – Google Apps Script setup

The Hebbal popup form submits to a Google Apps Script web app, which
appends a row to the **Stance Health – Hebbal Waitlist Leads** Google
Sheet.

Sheet link:
<https://docs.google.com/spreadsheets/d/1REhs9oOJryM3KDJwweiR52uLsYRB28Gs6BoqpdsBAf4/edit>

## 1 · Open the script editor

Open the sheet above → **Extensions → Apps Script**.

## 2 · Paste the script

Replace anything in `Code.gs` with:

```js
const SHEET_ID = "1REhs9oOJryM3KDJwweiR52uLsYRB28Gs6BoqpdsBAf4";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("Sheet1");
    sheet.appendRow([
      data.name || "",
      data.phone || "",
      data.dateTime || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.leadSource || "Direct"
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "Hebbal Waitlist API is live" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3 · Deploy

1. Click **Deploy → New deployment**.
2. Type = **Web app**.
3. Description = "Hebbal Waitlist".
4. Execute as = **Me** (developer@healthflex.in).
5. Who has access = **Anyone**.
6. Click **Deploy**, then **Authorize access** (grant the sheet permission).
7. Copy the **Web app URL** — it looks like:
   `https://script.google.com/macros/s/AKfyc…/exec`

## 4 · Wire it into the site

Open `src/components/HebbalPopup.tsx` and replace
`DEPLOY_ID_HERE` in `SHEET_ENDPOINT` with the deployment id from step 3.

The full URL should look like:
```
https://script.google.com/macros/s/AKfycb.../exec
```

## 5 · Test

Open the site locally, wait 3 s, fill in a name + phone, and submit.
Verify a row appears in the sheet within a few seconds.
