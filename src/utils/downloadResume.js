import axios from 'axios'
import FileDownload from "js-file-download";

const downloadResume = async(url) => {
    const getResume = axios.create({
        baseURL: url,
        method: 'GET',
        responseType:'blob'
    })
    const response = await getResume.get()
    const data = response.data
    const file = new Blob([data], { type: "application/pdf" });
    const fileUrl = URL.createObjectURL(file);
    window.open(fileUrl);
    return FileDownload(data, "Resume.pdf")
}

export default downloadResume;