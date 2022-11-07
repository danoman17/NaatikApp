import React, { useRef, useState } from 'react'
import './DragDropFile.css'


const DragDropFile = () => {

    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null)

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
    const handleFiles = function(e) {
        console.log(e)
    }

    // triggers when file is dropped
    const handleDrop = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            // at least one file has been dropped so do something
            handleFiles(e.dataTransfer.files);
        }
    };


    // triggers when file is selected with click
    const handleChange = function(e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            // at least one file has been selected so do something
            handleFiles(e.target.files);
        }
    };

    // triggers the input when the button is clicked
    const onButtonClick = () => {
        inputRef.current.click();
    };


  return (

    <>
        <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={ (e) => e.preventDefault() }>
            <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
            <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive?"drag-active":""}>
                <div>
                    <p>Arrastre el documento o</p>
                    <button className="upload-button" onClick={onButtonClick}>Seleecione un archivo</button>
                </div> 
            </label>

            { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }

        </form>
    </>

  )
}

export default DragDropFile;