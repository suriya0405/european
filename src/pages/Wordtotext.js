import React, { useState } from 'react';
import * as mammoth from 'mammoth';

export const Wordtotext = () => {


    const [textContent, setTextContent] = useState('');

    // Function to handle the file upload and conversion
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const arrayBuffer = e.target.result;
                const result = await mammoth.extractRawText({ arrayBuffer });
                setTextContent(result.value);
            };
            reader.readAsArrayBuffer(file);
        }
    };

    // Function to download the converted text as a .txt file
    const downloadTextFile = () => {
        const element = document.createElement("a");
        const file = new Blob([textContent], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "converted-text.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };


  return (
    <div>
 <div>
            <h1>Convert .docx to Text</h1>
            <input type="file" accept=".docx" onChange={handleFileUpload} />
            
            {textContent && (
                <div>
                    <h2>Converted Text:</h2>
                    <textarea 
                        value={textContent} 
                        readOnly 
                        rows={10} 
                        style={{ width: "100%" }} 
                    />
                    <br />
                    <button onClick={downloadTextFile}>Download as .txt</button>
                </div>
            )}
        </div>
    </div>
  )
}
