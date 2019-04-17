import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const DetailWrapper = styled.div`
    z-index: 20;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    font-size: 13px;
    width: 100%;
    text-align: center;
    color: rgba(0,0,0,0.9);
    line-height: 150%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & span {
        background-color: rgba(255,255,255,.4);
        padding: 0 0.4em;
        border-radius: 3px;
        font-size: 16px;
        & + span {
            margin-top: 1em;
        }
    }
`

const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin: 16px;
    min-height: 100px;
    cursor: default;
    &:hover ${DetailWrapper} {
        opacity: 1;
    }
`

const ImageWrapper = styled.div`
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    display: block;
    z-index: 10;
`




const Thumb = ({ image, onRemove }) => {

    const [loading, setLoading] = useState(false)
    const [thumb, setThumb] = useState(undefined)

    useEffect(() => {

        setLoading(true)
        let reader = new FileReader()

        reader.onloadend = () => {
            setLoading(false)
            setThumb(reader.result)
        }

        reader.readAsDataURL(image)

    }, [image])

    if (loading) return <p>loading ... </p>
    return (
        <Wrapper onClick={e => e.stopPropagation()}>
            <ImageWrapper>
                <img
                    src={thumb}
                    alt={image.name}
                    height={150}
                    width={150}
                />
            </ImageWrapper>
            <DetailWrapper>
                <span>{formatBytes(image.size)}</span>
                <span>{image.name}</span>
            </DetailWrapper>
            <button onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onRemove()
            }}>remove</button>
        </Wrapper>
    )
}

export default Thumb

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}