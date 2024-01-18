// api/submitForm.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Google Sheets API Key
      const apiKey = 'YOUR_GOOGLE_SHEETS_API_KEY';
      // Google Sheets Spreadsheet ID
      const spreadsheetId = 'YOUR_SPREADSHEET_ID';

      // Form data
      const { name, email, subject, message } = req.body;

      // Prepare the data to be sent to Google Sheets
      const rowData = [name, email, subject, message];
      const range = 'Sheet1'; // Update with the name of your sheet

      // Google Sheets API endpoint
      const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?key=${apiKey}`;

      // Send data to Google Sheets
      await axios.post(endpoint, {
        values: [rowData],
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
