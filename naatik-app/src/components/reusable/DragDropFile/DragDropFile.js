import React, { useRef, useState } from 'react'
import Papa from 'papaparse';
import { Spinner } from '@chakra-ui/react'
import { AiOutlineUpload, AiFillFileAdd } from "react-icons/ai";
import { BotonSubir } from '../../../routeIndex.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



import './DragDropFile.css'



const allowedExtensions = ["csv", 'vnd.ms-excel'];
let FileName = "";
let FileNameCompleto = "";
let nameDoc = "";

const DragDropFile = ({ active = true }) => {

    const navigate = useNavigate();
    const arrFinal = { "rows": [] };
    const arrTest = {
        "rows": [
            ["", "TARGET", "YEAR_JOINED", "CURRENT_YEAR", "BILL_AMOUNT", "PAID_AMOUNT", "PAYMENT_TRANSACTIONS", "PARTY_REV", "PREPAID_LINES", "POSTPAID_LINES", "OTHER_LINES", "LINE_REV", "MOUS_TO_LOCAL_MOBILES", "MOUS_FROM_LOCAL_MOBILES", "MOUS_TO_LOCAL_LANDLINES", "MOUS_FROM_LOCAL_LANDLINES", "MOUS_TO_INT_NUMBER", "MOUS_FROM_INT_NUMBER", "DATA_IN_BNDL", "DATA_OUT_BNDL", "CHURN_PERCENTAGE"],
            ["0", "0", "1994.0", "2019.0", "931.2089381866666", "812.1749999999998", "1.0", "5968.700000000001", "2.0", "6.0", "2.0", "945.04", "1004.07", "35.85", "34.015", "72.075", "141.84", "56.115", "11944.0791015625", "0.0", "0.008425625423383248"],
            ["1", "0", "1994.0", "2019.0", "431.0826183133333", "486.5", "1.0", "6245.141666666666", "6.0", "4.0", "2.0", "493.815", "159.05", "10.595", "7.715", "11.75", "5.109999999999999", "0.0", "9903.15771484375", "0.0", "0.010224295351946702"]
        ]
    }
    const inputRef = useRef(null)


    const [loading, setLoading] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const [fileName, setFileName] = useState(false);
    const [file, setFile] = useState("");
    const [valid, setValid] = useState(false);


    const handleFileChange = (e) => {
        setFileName(true);
        // Check if user has entered the file
        if (e.target.files.length) {


            const inputFile = e.target.files[0];
            const name = e.target.files[0]["name"];
            console.log(name)

            // we asssign the variable to get the full name of the file in the next view
            FileNameCompleto = name;
            FileName = name.split(".")[0];
            console.log(FileName)

            // Check the file extensions, if it not
            // included in the allowed extensions
            // we show the error
            const fileExtension = inputFile?.type.split("/")[1];
            console.log(fileExtension)
            if (!allowedExtensions.includes(fileExtension)) {
                setValid(false);

                toast.error('Please input a csv file only', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return;
            }

            setValid(true);
            nameDoc = name;

            // If input type is correct set the state
            setFile(inputFile);
        }
    };

    // triggers when file is dropped
    const handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();

        setDragActive(false);

        setFileName(true);
        // Check if user has entered the file
        if (e.dataTransfer.files.length) {


            const inputFile = e.dataTransfer.files[0];
            const name = e.dataTransfer.files[0]["name"];

            // we asssign the variable to get the full name of the file in the next view
            FileNameCompleto = name;

            FileName = name.split(".")[0];

            // Check the file extensions, if it not
            // included in the allowed extensions
            // we show the error
            const fileExtension = inputFile?.type.split("/")[1];
            if (!allowedExtensions.includes(fileExtension)) {
                setValid(false);
                toast.error('Please input a csv file only', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return;
            }

            setValid(true);
            nameDoc = name;

            // If input type is correct set the state
            setFile(inputFile);
        }

    };

    // handle drag events
    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };


    
    const handleParse = (e) => {

        e.preventDefault();

        // If user clicks the parse button without
        // a file we show a error
        if (!file) {
            toast.warn('Enter a valid File!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        // Initialize a reader which allows user
        // to read any file or blob.
        const reader = new FileReader();

        // Event listener on reader when the file
        // loads, we parse it and set the data.

        // Seteamos nuestro loader en true, para tener animación.
        setLoading(true);

        reader.onload = async ({ target }) => {
            const csv = Papa.parse(target.result, {
                header: true
            });
            const parsedData = csv?.data;
            console.log(parsedData);
            const columns = Object.keys(parsedData[0]);
            arrFinal["rows"].push(columns);

            parsedData.forEach((val) => arrFinal["rows"].push(Object.values(val)));

            if (active) {
                
                fetch('http://localhost:8080/upload/' + FileName, {
                    mode: "cors",
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // "Access-Control-Allow-Origin": "*"
                        
                    },
                    body: JSON.stringify(arrFinal),
                    // body: {}
                    
                })
                    .then((response) => response.json())
                    .then((data) => {

                        
                        console.log("success", data);

                        // setteamos en false para poder guardar animación
                        setLoading(false)

                        // once finished the process, we navigate to the next view
                        navigate('/panel_visuzalizacion',
                            {
                                state: {
                                    fileName: FileNameCompleto
                                }
                            });

                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    }
                    );
            } else {
                const fileData = JSON.stringify(arrFinal);
                const blob = new Blob([fileData], { type: "text/plain" });
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.download = "userInfo.json";
                link.href = url;
                link.click();
                setLoading(false);
            }
        };
        reader.readAsText(file);

    };


    // triggers the input when the button is clicked
    const onButtonClick = () => {
        inputRef.current.click();
    };


    return (

        <>
            <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                <input name="file" ref={inputRef} type="File" id="input-file-upload" multiple={true} onChange={handleFileChange} />
                <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>

                    {
                        (!loading) ?
                            (

                                <>
                                    <div id='contenedor-texto'>
                                        <p>Arrastre y suelte documentos aquí</p>
                                        <p> o </p>

                                        <button className="upload-button" onClick={onButtonClick}>
                                            <div className='contenedor-izq-upload-button'>
                                                <AiFillFileAdd size={"30px"}></AiFillFileAdd>
                                            </div>
                                            <div className='contenedor-der-upload-button'>
                                                Seleecione un archivo
                                            </div>

                                        </button>
                                    </div>

                                    {
                                        (fileName && valid) ?
                                            (
                                                <div className='contenedor-general-file-name'>
                                                    <div className='contenedor-parte-arriba-file-name'>
                                                        <p className='title-card-file-name'>Archivo cargado:</p>
                                                    </div>
                                                    <div className='contenedor-parte-abajo-file-name'>
                                                        <p className='content-card-file-name'> {nameDoc} </p>
                                                    </div>
                                                </div>
                                            ) :
                                            (
                                                <></>
                                            )
                                    }
                                </>
                            ) :
                            (
                                <Spinner
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='blue.500'
                                    size='xl'
                                >
                                </Spinner>
                            )
                    }
                </label>

                {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}

            </form>
            <BotonSubir onClick={handleParse} TextBtn={'Subir'} />


        </>

    )
}

export default DragDropFile;