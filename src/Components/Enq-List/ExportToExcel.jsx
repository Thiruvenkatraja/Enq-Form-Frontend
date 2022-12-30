import React from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import Button from 'react-bootstrap/Button';


const ExportToExcel=({csvData, fileName})=> {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = (csvData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);
    }

  return (
    <div>
      <Button className='export-btn' style={{background:'yellow',fontWeight:'bold'}} variant="warning" onClick={(e) => exportToCSV(csvData,fileName)}>Export-Excel</Button>
    </div>
  )
}

export default ExportToExcel