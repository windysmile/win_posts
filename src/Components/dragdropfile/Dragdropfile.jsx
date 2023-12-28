import './dragdropfile.scss'
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG"];

function Dragdropfile(params) {

    const getBase64 = (file, cb) => {
        let reader = new FileReader();
        console.log(reader)
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    const handleChangeFile = (file) => {
        getBase64(file, (result) => {
            const img = new Image();
            img.src = result;
            img.onload = function () {
                params.setFiles([...params.files, { src: result, width: this.width, height: this.height }]);
            };
            img.onerror = function () {
                params.setFiles([...params.files, { src: result, width: 500, height: 500 }]);
            };
        })
    };


    return <FileUploader handleChange={handleChangeFile} name="file" types={fileTypes} />
}

export default Dragdropfile;