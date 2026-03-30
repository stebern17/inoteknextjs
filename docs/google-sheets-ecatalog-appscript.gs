// Google Apps Script (Web App) to append e-catalog submissions into a Google Sheet.
// 1) Create a new Apps Script project (script.google.com)
// 2) Paste this file
// 3) Set SPREADSHEET_ID, SHEET_NAME, and (optional) WEBHOOK_SECRET
// 4) Deploy as Web app (Execute as: Me, Who has access: Anyone) and copy the /exec URL

const SPREADSHEET_ID = "PUT_SPREADSHEET_ID_HERE";
const SHEET_NAME = "PUT_SHEET_TAB_NAME_HERE"; // e.g. "Ecatalog"
const WEBHOOK_SECRET = ""; // optional

function doPost(e) {
  try {
    const body =
      e && e.postData && e.postData.contents ? e.postData.contents : "{}";
    const data = JSON.parse(body);

    if (WEBHOOK_SECRET && data.secret !== WEBHOOK_SECRET) {
      return ContentService.createTextOutput("Unauthorized").setMimeType(
        ContentService.MimeType.TEXT,
      );
    }

    if (
      !data ||
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.occupation ||
      !data.needs
    ) {
      return ContentService.createTextOutput(
        "Missing required fields",
      ).setMimeType(ContentService.MimeType.TEXT);
    }

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    // Optional: add header if empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "timestamp",
        "catalogTitle",
        "name",
        "email",
        "phone",
        "domicileProvince",
        "domicileRegency",
        "occupation",
        "needs",
        "pageUrl",
        "userAgent",
      ]);
    }

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.catalogTitle || "",
      data.name,
      data.email,
      data.phone,
      data.domicileProvince || "",
      data.domicileRegency || "",
      data.occupation,
      data.needs,
      data.pageUrl || "",
      data.userAgent || "",
    ]);

    return ContentService.createTextOutput("OK").setMimeType(
      ContentService.MimeType.TEXT,
    );
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err).setMimeType(
      ContentService.MimeType.TEXT,
    );
  }
}
