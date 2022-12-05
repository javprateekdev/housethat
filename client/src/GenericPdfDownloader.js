import React from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const GenericPdfDownloader = ({rootElementId , downloadFileName}) => {

    const downloadPdfDocument = () => {
        const input = document.getElementById(rootElementId);
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({
                    orientation: 'landscape',
	unit: 'in',
	format: [10,14],
                });
                pdf.addImage(imgData, 'JPEG',0,0);
                pdf.save(`${downloadFileName}.pdf`);
            })
    }
 
return <button onClick={downloadPdfDocument} style={{height:'50px',width:'150px',marginBottom:'80px',background:'#3a3a3a',marginLeft:'600px',border:"none",borderRadius:"5px",color:'white',fontWeight:'600',}}>Download Comparision</button>

}

export default GenericPdfDownloader;