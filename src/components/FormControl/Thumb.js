import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { withStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton'

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit
    }
})

const DetailWrapper = styled.div`
    z-index: 20;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    transition: opacity .2 linear;
    & span {
        background: rgba(255, 255, 255, 0.4);
    }
`

const ImageWrapper = styled.div`
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    display: block;
    z-index: 10;
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
    &:hover ${ImageWrapper} {
        opacity: .3;
    }
`






const Thumb = ({ image, onRemove, classes }) => {

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
                <IconButton
                    aria-label="Delete"
                    className={classes.margin}
                    onClick={e => {
                        e.preventDefault()
                        e.stopPropagation()
                        onRemove()
                    }}
                >
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </DetailWrapper>
        </Wrapper>
    )
}

export default withStyles(styles)(Thumb)

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}