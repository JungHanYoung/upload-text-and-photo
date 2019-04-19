import React from 'react'
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'

import Button from '@material-ui/core/Button'
import Thumb from './Thumb'

const UploadInputWrapper = styled.div`
    min-height: 200px;
    border: 2px dashed #0087F7;
    border-radius: 5px;
    background: white;
    padding: 54px;
    cursor: pointer;
    outline: none;
    ${props => props.isDragActive && `
        background: rgba(0, 135, 247, 0.5); 
        border: 2px solid #0087F7;
    `}
    &:hover {
        background: #d6e8f0;
    }
`

const DzMessage = styled.div`
    font-weight: 600;
    text-align: center;
    margin: 2em 0;
    & > p > span {
        font-size: 0.8em;
        font-weight: 200;
        display: block;
        margin-top: 1.4rem;
    }
`


const MyDropzone = ({ images, onDrop, onRemove, onAllRemove }) => {

    const {
        getInputProps,
        getRootProps,
        isDragActive
    } = useDropzone({ onDrop, accept: 'image/*' })

    return (
        <UploadInputWrapper {...getRootProps()} isDragActive={isDragActive}>
            <input {...getInputProps()} name="images" />
            <DzMessage>
                {
                    images.length === 0 ?
                        <p>파일을 여기에 드래그 하세요!</p>
                        : images.map((file, i) => 
                            <Thumb 
                                key={i} 
                                image={file} 
                                onRemove={() => onRemove(i)} 
                            />)
                }
            </DzMessage>
            {images.length > 0 && <Button onClick={onAllRemove}>모두 제거</Button>}
        </UploadInputWrapper>
    )
}

export default MyDropzone
