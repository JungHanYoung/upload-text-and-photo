import React from 'react'
import styled from 'styled-components'

const ImgWrapper = styled.img`
    margin: 16px;
    border-radius: 12px;
`


export default class Thumb extends React.Component {

    state = {
        loading: false,
        thumb: undefined
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.file) return;
        this.setState({
            loading: true
        }, () => {
            let reader = new FileReader();

            reader.onloadend = () => {
                this.setState({
                    loading: false,
                    thumb: reader.result
                })
            }

            reader.readAsDataURL(nextProps.file)
        })
    }

    render() {

        const { file } = this.props;
        const { loading, thumb } = this.state;

        if (!file) return null;
        if (loading) return <p>loading...</p>;

        return (
            <ImgWrapper
                src={thumb}
                alt={file.name}
                height={200}
                width={200}
            />
        )
    }
}