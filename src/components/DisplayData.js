import React from 'react'

function DisplayData(props) {

        // Styling to make the text white
        const textStyle = {
            color: '#FFFFFF',                      
            margin: '20px',            
            lineHeight: '5px'
        }

        const resultStyle = {
            color: '#00FF00',
            fontStyle: 'italic',
            fontWeight: 'normal',
            
        }

        const tagStyle = {
            color: "#079af5"
        }
    
    // Displaying the DICOM attribute data
    return (
        <div style={textStyle}>
            <p>Paciente:</p>
            <p>Patient's Name <span style={tagStyle}>(0010,0010)</span>: <span style={resultStyle}>{props.image.patientName}</span></p>
            <p>Patient ID <span style={tagStyle}>(0010,0020)</span>: <span style={resultStyle}>{props.image.patientId}</span></p>
            <p>Patient's Sex <span style={tagStyle}>(0010,0040)</span>: <span style={resultStyle}>{props.image.patientSex}</span></p>
            <p>Patient's Birth Date <span style={tagStyle}>(0010,0030)</span>: <span style={resultStyle}>{props.image.patientBirthDate}</span></p>
            <br></br>

            <p>Exame:</p>
            <p>Study Instance UID <span style={tagStyle}>(0020,000D)</span>: <span style={resultStyle}>{props.image.studyInstanceUID}</span></p> 
            <p>Study Date <span style={tagStyle}>(0008,0020)</span>: <span style={resultStyle}>{props.image.studyDate}</span></p>
            <p>Study Time <span style={tagStyle}>(0008,0030)</span>: <span style={resultStyle}>{props.image.studyTime}</span></p>
            <p>Study ID <span style={tagStyle}>(0020,0010)</span>: <span style={resultStyle}>{props.image.studyID}</span></p>
            <p>Accession Number <span style={tagStyle}>(0008,0050)</span>: <span style={resultStyle}>{props.image.accessionNumber}</span></p> 
            <p>Study description <span style={tagStyle}>(0008,1030)</span>: <span style={resultStyle}>{props.image.studyDescription}</span></p> 
            <br></br>  
            
            <p>Equipamento:</p>
            <p>Manufacturer <span style={tagStyle}>(0008,1090)</span>: <span style={resultStyle}>{props.image.manufacturer}</span></p>
            <p>Manufacturer's Model Name <span style={tagStyle}>(0008,1090)</span>: <span style={resultStyle}>{props.image.manufacturerModelName}</span></p>
            <p>Station Name <span style={tagStyle}>(0008,1010)</span>: <span style={resultStyle}>{props.image.stationName}</span></p>
            <br></br>

            <p>Séries:</p>
            <p>Series Instance UID <span style={tagStyle}>(0020,000E)</span>: <span style={resultStyle}>{props.image.seriesInstanceUID}</span></p>
            <p>Series Date <span style={tagStyle}>(0008,0021)</span>: <span style={resultStyle}>{props.image.seriesDate}</span></p>
            <p>Series Time <span style={tagStyle}>(0008,0031)</span>: <span style={resultStyle}>{props.image.seriesTime}</span></p>
            <p>Series Number <span style={tagStyle}>(0020,0011)</span>: <span style={resultStyle}>{props.image.seriesNumber}</span></p>
            <p>Modality <span style={tagStyle}>(0008,0060)</span>: <span style={resultStyle}>{props.image.modality}</span></p>
            <p>Institution Name <span style={tagStyle}>(0008,0080)</span>: <span style={resultStyle}>{props.image.institutionName}</span></p>
            <p>Series Description <span style={tagStyle}>(0008,103E)</span>: <span style={resultStyle}>{props.image.seriesDescription}</span></p>
            <p>Body Part Examined <span style={tagStyle}>(0018,0015)</span>: <span style={resultStyle}>{props.image.bodyPartExamined}</span></p>           
            <br></br>

            <p>Objetos Dicom:</p> 
            <p>SOP Instance UID <span style={tagStyle}>(0002,0003)</span>: <span style={resultStyle}>{props.image.sopInstanceUID}</span></p>
            <p>Image Type <span style={tagStyle}>(0008,0008)</span>: <span style={resultStyle}>{props.image.imageType}</span></p>
            <p>Transfer Syntax UID <span style={tagStyle}>(0002,0010)</span>: <span style={resultStyle}>{props.image.transferSyntax}</span></p>
            <p>Instance Number <span style={tagStyle}>(0020,0013)</span>: <span style={resultStyle}>{props.image.instanceNumber}</span></p>
            <p>Photometric Interpretation <span>(0028,0004)</span>: <span style={resultStyle}>{props.image.photometricInterpretation}</span></p>
            <br></br>
            <p>Plano de imagem:</p>
            <p>Pixel Spacing <span style={tagStyle}>(0028,0030)</span>: <span style={resultStyle}>{props.image.pixelSpacing}</span></p>
            <p>Slice Location <span style={tagStyle}>(0020,1041)</span>: <span style={resultStyle}>{props.image.sliceLocation}</span></p>
            <p>Slice Thickness <span style={tagStyle}>(0018,0050)</span>: <span style={resultStyle}>{props.image.sliceThickness}</span></p>
            <p>Image Position <span style={tagStyle}>(0020,0032)</span>: <span style={resultStyle}>{props.image.imagePosition}</span></p>
            <p>Image Orientation <span style={tagStyle}>(0020,0037)</span>: <span style={resultStyle}>{props.image.imageOrientation}</span></p>
            <p>VOI LUT Function <span style={tagStyle}>(0028,1056)</span>: <span style={resultStyle}>{props.image.VOILUTFunction}</span></p>            
            <p>Presentation LUT Shape <span style={tagStyle}>(2050,0020)</span>: <span style={resultStyle}>{props.image.presentationLUTShape}</span></p>
            <br></br>

            <p>Aquisição de imagem:</p>
            <p>KVP <span style={tagStyle}>(0018,0060)</span>: <span style={resultStyle}>{props.image.kvp}</span></p>
        </div>
    )
}

// Exporting the functional component
export default DisplayData