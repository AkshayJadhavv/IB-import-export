/**
 * Google Apps Script — IB Import Export Inquiry Handler
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com → New Project
 * 2. Paste this entire script
 * 3. Replace SPREADSHEET_ID with your Google Sheet ID
 * 4. Replace NOTIFY_EMAIL with the email to receive notifications
 * 5. Click Deploy → New Deployment → Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the deployment URL
 * 7. Paste it in app/components/sections/Inquiry.tsx as GOOGLE_SCRIPT_URL
 */

const SPREADSHEET_ID = "YOUR_GOOGLE_SPREADSHEET_ID";
const NOTIFY_EMAIL = "info@ibimportexport.com";
const SHEET_NAME = "Inquiries";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Write to Google Sheet
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        "Timestamp", "Name", "Company", "Country",
        "Email", "Phone", "Product", "Trade Type", "Message"
      ]);
    }

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || "",
      data.company || "",
      data.country || "",
      data.email || "",
      data.phone || "",
      data.product || "",
      data.tradeType || "",
      data.message || "",
    ]);

    // Send email notification
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: `New Inquiry from ${data.name} — IB Import Export`,
      htmlBody: `
        <h2>New Trade Inquiry Received</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Company</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.company}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Country</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.country}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.phone}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Product Interest</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.product}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Import / Export</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.tradeType}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.message}</td></tr>
        </table>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">IB Import Export — Auto-notification</p>
      `,
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput("IB Import Export — Inquiry API is running.")
    .setMimeType(ContentService.MimeType.TEXT);
}
