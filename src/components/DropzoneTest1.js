import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const DropzoneTest1 = () => {

    const onDrop = useCallback(acceptedFiles => {
        const reader = new FileReader()

        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
            // Do whatever you want with the file contents
            const binaryStr = reader.result
            console.log(binaryStr)
        }

        acceptedFiles.forEach(file => reader.readAsBinaryString(file))
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p style={{ background: `${isDragActive ? `transparent` : `red`}` }}>{isDragActive ? 'Yes' : 'NO'}</p>
        </div>
    )
}

export default DropzoneTest1