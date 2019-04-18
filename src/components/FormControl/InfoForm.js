import React from 'react'
import styled from 'styled-components'
import { Field, ErrorMessage } from 'formik'
import { Grid } from '@material-ui/core'
import {DateFormatInput} from 'material-ui-next-pickers'
import { TextField } from 'formik-material-ui';

// import intl from 'intl'

// console.log(intl)
// const DateTimeFormat = intl.DateTimeFormat;
// require('intl/locale-data/jsonp/ko-KR')

// // const DateTimeFormat = new Intl.DateTimeFormat('ko')

// console.log(DateTimeFormat)


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10%;
    padding-right: 10%;
`

const InfoForm = ({values, onChangeDate}) => {
    return (
        <Wrapper>
            <Grid container spacing={16}>
                <Grid item xs={12} md={6}>
                    <Field 
                        name="name"
                        component={TextField}
                        helperText={<ErrorMessage name="name" />}
                        label="이름"
                        variant="outlined"
                        fullWidth
                        autoComplete="off"
                        // style={{float: 'left', flex: 1, margin: '20px'}}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Field 
                        name="email"
                        component={TextField}
                        helperText={<ErrorMessage name="email" />}
                        label="이메일"
                        variant="outlined"
                        fullWidth
                        autoComplete="off"
                        // style={{float: 'left', flex: 1, margin: '20px'}}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DateFormatInput 
                        name="date" 
                        value={values.date} 
                        onChange={onChangeDate} 
                        variant="outlined"
                        // DateTimeFormat={DateTimeFormat}
                        // locale="ko-KR"
                        dateFormat={(date) => `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일`}
                        fullWidth
                        label="날짜"
                        InputProps={{
                            style: {
                                boxSizing: 'content-box'
                            }
                        }}
                    />
                    {/* <Field 
                        name="date"
                        component={TextField}
                        helperText={<ErrorMessage name="date" />}
                        label="날짜"
                        variant="outlined"
                        fullWidth
                        // style={{float: 'left', flex: 1, margin: '20px'}}
                    /> */}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Field 
                        name="phone"
                        component={TextField}
                        helperText={<ErrorMessage name="phone" />}
                        label="휴대폰 번호"
                        variant="outlined"
                        fullWidth
                        autoComplete="off"
                        // style={{float: 'left', flex: 1, margin: '20px'}}
                    />
                </Grid>

            </Grid>
        </Wrapper>
    )
}

export default InfoForm