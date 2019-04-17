import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'
import Thumb from './Thumb';
// import { useDropzone } from 'react-dropzone'

const UploadInputWrapper = styled.div`
    min-height: 200px;
    border: 2px dashed #0087F7;
    border-radius: 5px;
    background: white;
    padding: 54px;
    cursor: pointer;
    outline: none;
`

const Preview = styled.div`
    display: flex;
    justify-content: space-between;
`

const PreviewItem = styled.div`

`

const DzMessage = styled.div`
    font-weight: 600;
    text-align: center;
    margin: 2em 0;
    & span {
        font-size: 0.8em;
        font-weight: 200;
        display: block;
        margin-top: 1.4rem;
    }
`

const DropDown = () => {

    const [files, setFiles] = useState([]);

    const onDrop = useCallback(acceptFiles => {
        if (acceptFiles.length === 0) return;
        setFiles(files.concat(acceptFiles))
    })

    const { getInputProps, getRootProps, } = useDropzone({ onDrop, accept: 'image/*' })

    return (
        <UploadInputWrapper {...getRootProps()}>
            <input {...getInputProps()} name="file1" />
            <DzMessage>
                {
                    files.length === 0 ?
                        <p>
                            이 곳을 클릭하거나, 파일을 드랍하세요.
                            <span>
                                모바일의 경우<strong>검색하신 어플 환경</strong>에 따라 <br />
                                사진을 한개씩 불러와야 할 수도 있습니다.<br />
                            </span>
                        </p>
                        : files.map((file, i) => <Thumb key={i} file={file} />)
                }
            </DzMessage>
        </UploadInputWrapper>
        // <Dropzone onDrop={files => console.log(files)}>
        //     {({ getRootProps, getInputProps }) => {
        //         console.log('root props ->', getRootProps())
        //         console.log('input props ->', getInputProps())
        //         return (
        //             <div className="container">
        //                 <div
        //                     {...getRootProps({
        //                         className: 'dropzone',
        //                         onDrop: event => event.stopPropagation()
        //                     })}
        //                 >
        //                     <input {...getInputProps()} name="image" />
        //                     <p>Drag 'n' drop some files here, or click to select files</p>
        //                 </div>
        //             </div>
        //         )
        //     }}
        // </Dropzone>
    )
}

export default DropDown