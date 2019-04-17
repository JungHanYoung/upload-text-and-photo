import React from 'react'
import styled from 'styled-components'
// import { Button } from '@material-ui/core'

import DropDown from "./DropDown";

const TableWrapper = styled.table`
    width: 100%;
    margin-bottom: 21px;
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
    font-weight: 500;
    background: #2a8fb9;
`

// const DropzoneWrapper = styled.div`
//     border: none;
//     cursor: pointer;
//     min-height: 220px;
//     border-bottom: 1px solid #c3c3c3 !important;
//     padding-bottom: 60px;
// `

// const DropzoneMessage = styled.div`
//     margin: 2em 0;
//     cursor: pointer;
//     text-align: center;
// `

const InfoForm3 = () => {
    return (
        <TableWrapper>
            <tbody>
                <tr>
                    <td style={{ position: 'relative' }}>
                        <Title>신랑측 사진</Title>
                        <DropDown />
                        {/* <DropzoneWrapper>
                            <DropzoneMessage>
                                <p>
                                    <Button>+ 자료 불러오기</Button>
                                </p>
                                <p class="btn-upload-text">
                                    모바일의 경우
                                <font class="text_red">검색하신 어플 환경</font>
                                    에 따라
                                <br />
                                    사진을 한개씩 불러와야 할 수도 있습니다.
                                <br />
                                    (불편하신 경우 <img src="/img/icon-chrome.png?v=2" /> <img src="/img/icon-internet.png?v=2" /> 혹은 PC를 이용해주세요)<br />
                                </p>
                            </DropzoneMessage>
                        </DropzoneWrapper> */}
                    </td>
                </tr>
                <tr>
                    <td colSpan="4" style={{ position: 'relative' }}></td>
                </tr>
                <tr>
                    <td colSpan="4" style={{ position: 'relative' }}></td>
                </tr>
            </tbody>
        </TableWrapper>
    )
}

export default InfoForm3