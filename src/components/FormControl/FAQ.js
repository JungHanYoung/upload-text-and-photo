import React, { useState } from 'react'
import uuid from 'uuidv4'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ReportIcon from '@material-ui/icons/Report'

const data = [
    {
        id: uuid(),
        summary: '파일이 업로드가 되지 않아요.',
        content: `<p>
            
                                             
            </p><p style="line-height: 1.2;"><b><span style="color: rgb(0, 117, 200);">※ PC</span></b></p><p style="line-height: 1.2;">1. 파일 업로드가 되지 않을 때에는</p><p style="line-height: 1.2;">익스플로러(Internet Explorer)와 크롬(Chrome)</p><p style="line-height: 1.2;">모두 업로드가 안되는지 확인합니다.</p><p style="line-height: 0.5;">&nbsp;</p><p style="line-height: 1.2;">2. 회사 보안 프로그램이 작동하고 있는지,</p><p style="line-height: 1.2;">네트워크 상태가 좋지 않은지 확인합니다.</p><p style="line-height: 0.5;">&nbsp;</p><p style="line-height: 1.2;">위와 같은 경우가 아닌 다른 오류가 있다면</p><p style="line-height: 1.2;">1544-8896 혹은, 카카오톡 검색 '랑추시네마'로</p><p style="line-height: 1.2;">상담 주시면 신속하고 정확하게 도와드리겠습니다.</p><p>&nbsp;</p><p style="line-height: 1.2;"><span style="color: rgb(0, 117, 200);"><b>※ 모바일</b></span></p><p style="line-height: 1.2;">와이파이(Wi-Fi)나 데이터 상태가 좋지 않은 경우</p><p style="line-height: 1.2;">일부 기능들이 작동되지 않을 수 있습니다.</p><p style="line-height: 0.5;">&nbsp;</p><p style="line-height: 1.2;">이런 경우 업로드 시스템의 로딩이 모두 될 때까지</p><p style="line-height: 1.2;">기다리시거나 데이터가 좋은 곳에서 업로드합니다.</p><p style="line-height: 0.5;">&nbsp;</p><p style="line-height: 1.2;">위와 같은 경우가 아닌 다른 오류가 있다면</p><p style="line-height: 1.2;">1544-8896 혹은, 카카오톡 검색 '랑추시네마'로</p><p style="line-height: 1.2;">상담 주시면 신속하고 정확하게 도와드리겠습니다.</p>	                    <p></p>                    `
    },
    {
        id: uuid(),
        summary: '권장 사진보다 많은데(혹은 적은데) 어떻게 할까요?',
        content: `<p>
            
                                             
            </p><p style="line-height: 1.2;"><b><span style="color: rgb(0, 117, 200);">※ PC</span></b></p><p style="line-height: 1.2;">1. 파일 업로드가 되지 않을 때에는</p><p style="line-height: 1.2;">익스플로러(Internet Explorer)와 크롬(Chrome)</p><p style="line-height: 1.2;">모두 업로드가 안되는지 확인합니다.</p><p style="line-height: 0.5;">&nbsp;</p><p style="line-height: 1.2;">2. 회사 보안 프로그램이 작동하고 있는지,</p><p style="line-height: 1.2;">네트워크 상태가 좋지 않은지 확인합니다.</p><p style="line-height: 0.5;">&nbsp;</p><p style="line-height: 1.2;">위와 같은 경우가 아닌 다른 오류가 있다면</p><p style="line-height: 1.2;">1544-8896 혹은, 카카오톡 검색 '랑추시네마'로</p><p style="line-height: 1.2;">상담 주시면 신속하고 정확하게 도와드리겠습니다.</p><p>&nbsp;</p><p style="line-height: 1.2;"><span style="color: rgb(0, 117, 200);"><b>※ 모바일</b></span></p><p style="line-height: 1.2;">와이파이(Wi-Fi)나 데이터 상태가 좋지 않은 경우</p><p style="line-height: 1.2;">일부 기능들이 작동되지 않을 수 있습니다.</p><p style="line-height: 0.5;">&nbsp;</p><p style="line-height: 1.2;">이런 경우 업로드 시스템의 로딩이 모두 될 때까지</p><p style="line-height: 1.2;">기다리시거나 데이터가 좋은 곳에서 업로드합니다.</p><p style="line-height: 0.5;">&nbsp;</p><p style="line-height: 1.2;">위와 같은 경우가 아닌 다른 오류가 있다면</p><p style="line-height: 1.2;">1544-8896 혹은, 카카오톡 검색 '랑추시네마'로</p><p style="line-height: 1.2;">상담 주시면 신속하고 정확하게 도와드리겠습니다.</p>	                    <p></p>                    `
    },
]

const Wrapper = styled.div`
    margin: 30px 0;
    border: 1px solid #e9e9e9;
    border-top: 0;
`

const SummaryWrapper = styled.div`
    display: flex;
    align-items: center;
`

const Summary = styled.span`
    margin-left: 12px;
`

const ExpandPanel = withStyles({
    expanded: {
        margin: 'auto'
    }
})(ExpansionPanel)

const ExpandDetail = withStyles({
    root: {
        display: 'block'
    }
})(ExpansionPanelDetails)

const ExpandSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0,0,0,.03)',
        borderBottom: '1px solid rgba(0,0,0,.125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    // root: {
    //     display: 'block',
    //     padding: '5px 0 5px 30px',
    //     borderTop: '1px solid #e9e9e9',
    //     background: '#df3434',
    //     textDecoration: 'none',
    //     fontWeight: 500,
    //     '&$expanded': {
    //         minHeight: 24
    //     }
    // },
    // content: {
    //     minHeight: 24,
    //     '&$expanded': {
    //         minHeight: 24
    //     }
    // },
    expanded: {}

})(props => <ExpansionPanelSummary {...props} />)

ExpandSummary.muiName = 'ExpansionPanelSummary';


const FAQ = () => {

    const [expanded, setExpanded] = useState();

    const handleChange = panel => (event, expanded) => setExpanded(expanded ? panel : false)

    return (
        <Wrapper>
            {data.map((item) => (
                <ExpandPanel
                    key={`FAQ-${item.id}`}
                    square
                    expanded={expanded === `FAQ-${item.id}`}
                    onChange={handleChange(`FAQ-${item.id}`)}
                >
                    <ExpandSummary expandIcon={<ExpandMoreIcon />}>
                        <SummaryWrapper>
                            <ReportIcon />
                            <Summary>{item.summary}</Summary>
                        </SummaryWrapper>
                    </ExpandSummary>
                    <ExpandDetail dangerouslySetInnerHTML={{ __html: item.content }} />
                </ExpandPanel>
            ))}
        </Wrapper>
    )
}

export default FAQ