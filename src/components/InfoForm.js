import React from 'react'
import styled from 'styled-components'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Wrapper = styled.ul`
    width: 100%;
    display: table;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 3%;
    padding-right: 3%;
    & > li {
        list-style: none;
        float: left;
        background: #fff;
        padding: 5px;
        color: #369dd2;
        border-radius: 15px;
        border: 1px solid #c3c3c3;
        width: 40%;
        margin: 1.5% 5% 1.5% 5%;
        & > span.text {
            padding-left: 5%;
        }
        input {
            border: 0;
            color: #7c7c7c;
            border-radius: 15px;
            width: 60%;
            background-color: #fff;
            line-height: 20px;
            font-weight: 300;
            font-size: 14px;
            padding: 10px;
        }
    }
`

const InfoForm = ({ handleChange, values, onChangeDate }) => {

    return (
        <Wrapper>
            <li>
                <span className="text">주문자 성함:</span>
                <span>
                    <input type="text" required name="name" onChange={handleChange} value={values.name} />
                </span>
            </li>
            <li>
                <span className="text">이메일 주소:</span>
                <span>
                    <input type="email" required name="email" onChange={handleChange} value={values.email} />
                </span>
            </li>
            <li>
                <span className="text">사용할 날짜:</span>
                <span>
                    <DatePicker
                        name="date"
                        selected={values.date}
                        onChange={onChangeDate}
                    />
                </span>
            </li>
            <li>
                <span className="text">휴대폰 번호:</span>
                <span>
                    <input type="text" required name="phone" onChange={handleChange} value={values.phone} />
                </span>
            </li>
        </Wrapper>
    )
}

export default InfoForm