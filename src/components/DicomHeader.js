// 'src/components/DicomHeader.js'

// Import React package...in order to use JSX
import React, { useCallback, useState } from 'react';
// Package that will be used to parse the DICOM images
import dicomParser from 'dicom-parser';
// Package that will be used to support the document uplaod feature
import {useDropzone} from 'react-dropzone';
import DisplayData from './DisplayData';

import moment from 'moment';

function DicomHeader() {

    // State varaibles that will be used to set and store the data
    // that we are parsing from the images       
    const [patientName, setPatientName] = useState("");
    const [patientId, setPatientId] = useState("");       
    const [patientSex, setPatientSex] = useState("");
    const [patientBirthDate, setPatientBirthDate] = useState("");

    const [manufacturer, setManufacturer] = useState("");
    const [manufacturerModelName, setManufacturerModelName] = useState("");
    const [stationName, setStationName] = useState("");
    
    const [studyInstanceUID, setStudyInstaceUID] = useState("");   
    const [studyDate, setStudyDate] = useState("");   
    const [studyTime, setStudyTime] = useState("");
    const [studyID, setStudyID] = useState("");
    const [accessionNumber, setAccessionNumber] = useState("");   
    const [studyDescription, setStudyDescription] = useState("");   

    const [seriesInstanceUID, setSeriesInstanceUID] = useState("");   
    const [seriesDate, setSeriesDate] = useState("");   
    const [seriesTime, setSeriesTime] = useState("");   
    const [seriesNumber, setSeriesNumber] = useState(""); 
    const [modality, setModality] = useState("");   
    const [institutionName, setInstitutionName] = useState("");  
    const [seriesDescription, setSeriesDescription] = useState("");
    const [bodyPartExamined, setBodyPartExamined] = useState("");

    const [pixelSpacing, setPixelSpacing] = useState("");
    const [sliceLocation, setSliceLocation] = useState("");
    const [sliceThickness, setSliceThickness] = useState("");
    const [imagePosition, setImagePosition] = useState("");
    const [imageOrientation, setImageOrientation] = useState("");
    const [VOILUTFunction, setVOILUTFunction] = useState("");    
    const [presentationLUTShape, setPresentationLUTShape] = useState("");

    const [sopInstanceUID, setSopInstanceUID] = useState("");
    const [sopClassUID, setSopClassUID] = useState("");
    const [imageType, setImageType] = useState("");
    const [transferSyntax, setTransferSyntax] = useState("");
    const [instanceNumber, setInstanceNumber] = useState("");
    const [photometricInterpretation, setPhotometricInterpretation] = useState("");    
    
    const [kvp, setKvp] = useState("");
               
    // Styling to make the text white
    const textStyle = {
        color: '#FFFFFF'
    }

    // Called when an application is uploaded
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        clearPage();
        loadFile(acceptedFiles);
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    // Clears the data in the variables used to store the image data
    function clearPage() {
        setPatientId('');      
        setPatientName('');      
        
        setManufacturer('');
        setManufacturerModelName('');
        setStationName('');

        setStudyInstaceUID('')
        setStudyDate('');
        setStudyTime('');
        setAccessionNumber('');
        setStudyDescription('');
        setBodyPartExamined('');
       
        setStudyInstaceUID('');
        setSeriesDate('');
        setSeriesTime('');
        setSeriesNumber('');
        setModality('');                
        setInstitutionName('');
        setSeriesDescription('');
        setBodyPartExamined('');

        setPixelSpacing('');
        setSliceLocation('');
        setSliceThickness('');
        setImagePosition('');
        setImageOrientation('');
        setVOILUTFunction('');        
        setPresentationLUTShape('');

        setSopInstanceUID('');
        setSopClassUID('');
        setImageType('');
        setTransferSyntax('');
        setInstanceNumber('');
        setPhotometricInterpretation('');

        setKvp('');
        
    }

    // Function used to parse the data 
    function parseByteArray(byteArray)
    {
        // We need to setup a try/catch block because parseDicom will throw an exception
        // if you attempt to parse a non dicom part 10 file (or one that is corrupted)
        try{
            // parse byteArray into a DataSet object using the parseDicom library
            var dataSet = dicomParser.parseDicom(byteArray);
            //Dados paciente:
            var patientName = dataSet.string('x00100010')
            setPatientName(patientName);
            
            var patientId = dataSet.string('x00100020');                              
            setPatientId(patientId);
            
            var patientSex = dataSet.string('x00100040');
            setPatientSex(patientSex);

            var patientBirthDate = dataSet.string('x00100030');
            setPatientBirthDate(moment(patientBirthDate).format('DD/MM/YYYY'));
            //Dados paciente:                             

            //Esta????o
            var manufacturer = dataSet.string('x00080070');
            setManufacturer(manufacturer);

            var manufacturerModelName = dataSet.string('x00081090');
            setManufacturerModelName(manufacturerModelName);

            var stationName = dataSet.string('x00081010');
            setStationName(stationName);
            //Esta????o


            //Exame:
            var studyInstanceUID = dataSet.string('x0020000d');
            setStudyInstaceUID(studyInstanceUID);
            
            var studyDate = dataSet.string('x00080020');
            setStudyDate(moment(studyDate).format('DD/MM/YYYY'));

            var studyTime = dataSet.string('x00080030');
            var hour = studyTime.slice(0, 2); 
            var minute = studyTime.slice(2, 4);
            var second = studyTime.slice(4, 6);
            var shortTime = `${hour}:${minute}:${second}`
            setStudyTime(shortTime);

            var studyID = dataSet.string('x00200010');
            setStudyID(studyID);

            var accessionNumber = dataSet.string('x00080050');
            setAccessionNumber(accessionNumber);

            var studyDescription = dataSet.string('x00081030');
            setStudyDescription(studyDescription);
            //Exame:

            //S??rie:
            var seriesInstanceUID = dataSet.string('x0020000e');
            setSeriesInstanceUID(seriesInstanceUID);

            var seriesDate = dataSet.string('x00080021');
            setSeriesDate(moment(seriesDate).format('DD/MM/YYYY'));

            var seriesTime = dataSet.string('x00080031');
            hour = seriesTime.slice(0, 2); 
            minute = seriesTime.slice(2, 4);
            second = seriesTime.slice(4, 6);
            shortTime = `${hour}:${minute}:${second}`
            setSeriesTime(shortTime);

            var seriesNumber = dataSet.string('x00200011');
            setSeriesNumber(seriesNumber);

            var modality = dataSet.string('x00080060');
            setModality(modality);

            var institutionName = dataSet.string('x00080080');
            setInstitutionName(institutionName);
            
            var seriesDescription = dataSet.string('x0008103e');
            setSeriesDescription(seriesDescription);

            var bodyPartExamined = dataSet.string('x00180015');
            setBodyPartExamined(bodyPartExamined);
            //S??rie

            //Plano de Imagem
            var pixelSpacing = dataSet.string('x00280030');
            setPixelSpacing(pixelSpacing);
            
            var sliceLocation = dataSet.string('x00201041');
            setSliceLocation(sliceLocation);
            
            var sliceThickness = dataSet.string('x00180050');
            setSliceThickness(sliceThickness)
            
            var imagePosition = dataSet.string('x00200032');
            setImagePosition(imagePosition);
            
            var imageOrientation = dataSet.string('x00200037');
            setImageOrientation(imageOrientation);

            var VOILUTFunction = dataSet.string('x00281056');
            setVOILUTFunction(VOILUTFunction)

            var presentationLUTShape = dataSet.string('x20500020');            
            setPresentationLUTShape(presentationLUTShape)
            //Plano de Imagem

            //Objecto Dicom
            var sopInstanceUID = dataSet.string('x00080018');            
            setSopInstanceUID(sopInstanceUID);

            var sopClassUID = dataSet.string('x00080016');
            setSopClassUID(sopClassUID);

            var imageType = dataSet.string('x00080008');        
            setImageType(imageType);

            var transferSyntax = dataSet.string('x00020010');            
            setTransferSyntax(transferSyntax);

            var instanceNumber = dataSet.string('x00200013');            
            setInstanceNumber(instanceNumber);

            var photometricInterpretation = dataSet.string('x00280004')            
            setPhotometricInterpretation(photometricInterpretation);

            //Aquisi????o de imagem
            var kvp = dataSet.string('x00180060');
            setKvp(kvp);
            //Aquisi????o de imagem

            
        }
        catch(err)
        {
            // we catch the error and display it to the user
            // Set data to state variable
            //setParseError(err);
        }
    }
    
    // load the file dropped on the element and then call parseByteArray with a
    // Uint8Array containing the files contents
    function loadFile(acceptedFiles)
    {
        var file = acceptedFiles[0];
        var reader = new FileReader();
        reader.onload = function(file) {
            var arrayBuffer = reader.result;
            // Here we have the file data as an ArrayBuffer.  dicomParser requires as input a
            // Uint8Array so we create that here
            var byteArray = new Uint8Array(arrayBuffer);
            parseByteArray(byteArray);
        }
        
        reader.readAsArrayBuffer(file);    

    }

    // Displaying the drop upload feature and the DisplayData component. Passing the image data as a object.
    return (
        <div style={textStyle}>
            <div class="column">
                <div class="col-md-12">
                    <div id="dropZone" >
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            {
                                isDragActive ?                             
                                <p class='carregamentoArquivo'>Arraste aqui...</p> :
                                <p class='carregamentoArquivo'>Arraste o arquivo Dicom <strong>AQUI</strong> ou <strong>CLIQUE AQUI</strong> para selecionar um arquivo</p>
                            }
                        </div>
                    </div>
                    <DisplayData image={{patientName,patientId,patientSex,patientBirthDate,manufacturer,manufacturerModelName,stationName,studyInstanceUID,studyDate,studyTime,accessionNumber,studyID,studyDescription,seriesInstanceUID,seriesDate,seriesTime,seriesNumber,modality,institutionName,seriesDescription,bodyPartExamined,pixelSpacing,sliceLocation,sliceThickness,imagePosition,imageOrientation,VOILUTFunction,presentationLUTShape,sopInstanceUID,sopClassUID,imageType,transferSyntax,instanceNumber,photometricInterpretation,kvp}}/>                    
                </div>
            </div>
        </div>
    )
}


// Export functional components
export default DicomHeader