import React from 'react'
import { Field } from 'formik'
import styled from 'styled-components'


const WrapperTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
`

const Content = styled.td`
    padding-bottom: 20px;
`

const Title = styled.p`
    border-top: 1px solid #c3c3c3;
    border-bottom: 1px solid #c3c3c3;
    height: 50px;
    line-height: 50px;
    color: #fff;
    word-break: break-all;
    margin: 0;
    padding-left: 30px;
    font-weight: 600;
    background: #6a6a6a;
`

const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
    padding: 3%;
    margin-bottom: -5px;
    font-size: 14px;
`

const InfoForm2 = ({ notes, letter, handleChange }) => {
    return (
        <WrapperTable>
            <tbody>
                <tr>
                    <Content>
                        <Title>참고사항을 적어주세요.</Title>
                        <Field 
                            name="notes" 
                            component={TextArea} 
                            placeholder={`영상 제작시 참고해야 할 사항을 적어주세요.
(샘플의 특성을 변경하시는 요청은 불가능합니다.)
음원 변경과 같은 기본적인 참고사항만 적어주세요.`} />
                        {/* <TextArea
                            name="notes"
                            placeholder={`영상 제작시 참고해야 할 사항을 적어주세요.
(샘플의 특성을 변경하시는 요청은 불가능합니다.)
음원 변경과 같은 기본적인 참고사항만 적어주세요.`}
                            onChange={handleChange}
                            value={notes}
                        /> */}
                    </Content>
                </tr>
                <tr>
                    <Content>
                        <Title>편지글을 작성해주세요.</Title>
                        <Field 
                            name="letter"
                            component={TextArea}
                            defaultValue={letter}
                        />
                        {/* <TextArea
                            name="letter"
                            onChange={handleChange}
                            value={letter}
                        /> */}
                    </Content>
                </tr>
            </tbody>
        </WrapperTable>
    )
}

export default InfoForm2