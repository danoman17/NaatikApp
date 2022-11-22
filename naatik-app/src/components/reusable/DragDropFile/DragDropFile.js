import React, { useRef, useState } from 'react'
import Papa from 'papaparse';
import { AiOutlineUpload } from "react-icons/ai";
import { BotonSubir } from '../../../routeIndex.js';
import {useNavigate} from 'react-router-dom';


import './DragDropFile.css'



const allowedExtensions = ["csv"];
let FileName = "";

const DragDropFile = () => {
    
    const navigate = useNavigate();
    const arrFinal = {"rows":[]};
    const arrTest = {"rows" : [
        ["","TARGET","YEAR_JOINED","CURRENT_YEAR","BILL_AMOUNT","PAID_AMOUNT","PAYMENT_TRANSACTIONS","PARTY_REV","PREPAID_LINES","POSTPAID_LINES","OTHER_LINES","LINE_REV","MOUS_TO_LOCAL_MOBILES","MOUS_FROM_LOCAL_MOBILES","MOUS_TO_LOCAL_LANDLINES","MOUS_FROM_LOCAL_LANDLINES","MOUS_TO_INT_NUMBER","MOUS_FROM_INT_NUMBER","DATA_IN_BNDL","DATA_OUT_BNDL","CHURN_PERCENTAGE"],
        ["0","0","1994.0","2019.0","931.2089381866666","812.1749999999998","1.0","5968.700000000001","2.0","6.0","2.0","945.04","1004.07","35.85","34.015","72.075","141.84","56.115","11944.0791015625","0.0","0.008425625423383248"],
        ["1","0","1994.0","2019.0","431.0826183133333","486.5","1.0","6245.141666666666","6.0","4.0","2.0","493.815","159.05","10.595","7.715","11.75","5.109999999999999","0.0","9903.15771484375","0.0","0.010224295351946702"]
    ]}

    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null)

    const [data, setData] = useState([]);
	const [error, setError] = useState("");
	const [file, setFile] = useState("");

    
    const handleFileChange = (e) => {
		setError("");
		
		// Check if user has entered the file
		if (e.target.files.length) {
			const inputFile = e.target.files[0];


            const name = e.target.files[0]["name"]; 
            FileName = name.split(".")[0];


			// Check the file extensions, if it not
			// included in the allowed extensions
			// we show the error
			const fileExtension = inputFile?.type.split("/")[1];
			if (!allowedExtensions.includes(fileExtension)) {
				setError("Please input a csv file");
				return;
			}

			// If input type is correct set the state
			setFile(inputFile);
		}
	};

    const handleParse = () => {
		
		// If user clicks the parse button without
		// a file we show a error
		if (!file) return setError("Enter a valid file");

		// Initialize a reader which allows user
		// to read any file or blob.
		const reader = new FileReader();
		
		// Event listener on reader when the file
		// loads, we parse it and set the data.
		reader.onload = async ({ target }) => {
			const csv = Papa.parse(target.result, { 
                header: true
            });
			const parsedData = csv?.data;
			const columns = Object.keys(parsedData[0]);
            arrFinal["rows"].push(columns);

            parsedData.forEach((val) => arrFinal["rows"].push(Object.values(val)));
			setData(columns);
            
            fetch('http://localhost:8080/upload/'+FileName,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify(arrTest)
            })
            .then((response) => response.json())
            .then((data) => {
                console.log("success",data);
                navigate('/panel_visuzalizacion');
                
            })
            .catch((error)=>{
                console.error("Error:",error);
            });
            
		};
		reader.readAsText(file);

        
	};

    // handle drag events
    const handleDrag = function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
        setDragActive(false);
        }
    };


    // triggers when file is dropped
    const handleDrop = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            // at least one file has been dropped so do something
            // handleFiles(e.dataTransfer.files[0]);
        }
    };

    // triggers the input when the button is clicked
    const onButtonClick = () => {
        inputRef.current.click();
    };


  return (

    <>
        <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={ (e) => e.preventDefault() }>
            <input name="file" ref={inputRef} type="File" id="input-file-upload" multiple={true} onChange={handleFileChange} />
            <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive?"drag-active":""}>
                <div id='contenedor-texto'>
                    <p>Arrastre el documento o</p>
                    <button className="upload-button" onClick={onButtonClick}>Seleecione un archivo</button>
                    <AiOutlineUpload size={"80px"}></AiOutlineUpload>
                </div> 
            </label>

            { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
            
        </form>
        <BotonSubir onClick={handleParse} TextBtn={'Subir'}/>


    </>

  )
}

export default DragDropFile;
