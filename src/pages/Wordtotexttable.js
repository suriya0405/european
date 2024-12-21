import React, { useState } from 'react';
import * as mammoth from 'mammoth';
import { saveAs } from 'file-saver';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import '../css/word.css'

export const Wordtotexttable = () => {

    const content = `
    <h1>Title of Document</h1>
    <p>This is a paragraph of text that will be included in the Word document.</p>
    <p>Another line of text aligned to the left.</p>
`;

    const downloadAsWord = () => {
        const docContent = `
            Title of Document\n
            This is a paragraph of text that will be included in the Word document.\n
            Another line of text aligned to the left.
        `;

        const zip = new PizZip();
        const doc = new Docxtemplater();

        doc.loadZip(zip)
           .setData({ content: docContent })
           .render();

        const out = doc.getZip().generate({
            type: "blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        });

        saveAs(out, "document.docx");
    };

    const [htmlContent, setHtmlContent] = useState('');

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const arrayBuffer = e.target.result;
                const result = await mammoth.convertToHtml({ arrayBuffer });
                setHtmlContent(result.value);
            };
            reader.readAsArrayBuffer(file);
        }
    };

    return (
        <div className='background'>
            <div>
                <h1>Upload word document file</h1>
                <input type="file" accept=".docx" onChange={handleFileUpload} />
                {htmlContent && (
                    <div className='circular-container'>
                        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                    </div>
                )}
                <button onClick={downloadAsWord} className='button'>Download as .docx</button>
                <button onClick={downloadAsWord} className='button-1'>Download as .docx</button>
            </div>
        </div>
    )
}
