import React, {useEffect} from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'


const Wrapper = styled.div`
    margin: 50px 0;
    text-align: center;
`

const Message = styled.p`
    font-size: 12px;
    color: #737373;
`

const SubmitBox = ({ disabled }) => {

    useEffect(() => {
        if(disabled) {
            document.body.style.background = 'red'
        } else {
            document.body.style.background = 'transparent'
        }
    }, [disabled])

    return (
        <Wrapper>
            <Button type="submit" variant="contained" color="primary" disabled={disabled}>업로드(Upload)하기</Button>
            <Message>
                업로드 하시기 전에 자료를 한번 더 검토해 주신 후 신중히 업로드 해주세요!
            </Message>
        </Wrapper>
    )
}

export default SubmitBox