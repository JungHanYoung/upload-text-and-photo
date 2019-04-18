import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

import { letter } from './letter'

// component
import InfoFormTest from './InfoForm'
// import InfoForm from '../InfoForm'
import InfoForm2 from '../InfoForm2'
// import InfoForm3 from '../InfoForm3'
import MyDropzone from './MyDropzone'
import FAQ from './FAQ';
import SubmitBox from './SubmitBox'
import { FILE_SIZE } from './constants'

const FormControl = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                date: new Date(),
                phone: '',
                notes: '',
                letter,
                images: []
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(values)
                    setSubmitting(false)
                }, 3000);
            }}
            validationSchema={yup.object().shape({
                name: yup.string().required('반드시 입력해야 합니다.'),
                email: yup.string().email().required('반드시 입력해야 합니다.'),
                date: yup.date().required(),
                phone: yup.string()
                    .matches(
                        /^\d{3}\d{3,4}\d{4}$/,
                        '숫자로만 입력해주세요.(-제외)'
                    ).required('반드시 입력해야 합니다.'),
                notes: yup.string().required('반드시 입력해야 합니다.'),
                letter: yup.string().required('반드시 입력해야 합니다.'),
                images: yup.mixed().test(
                    "파일 갯수",
                    "하나 이상의 파일이 필요합니다.",
                    images => images && images.length !== 0
                ).test(
                    "파일 사이즈",
                    "5MB이상의 크기는 업로드를 할 수 없습니다.",
                    images => images && !images.includes(image => image.size <= FILE_SIZE)
                )
            })}
            validateOnBlur={true}
            render={
                props => {
                    // console.log(props)
                    const {
                        values,
                        setFieldValue,
                        handleChange,
                        isSubmitting
                    } = props
                    // console.log(values.images)
                    // console.log(errors)
                    return (
                        <Form>
                            <InfoFormTest 
                                values={values}
                                onChangeDate={(date) => setFieldValue('date', date)}
                            />
                            {/* <InfoForm
                                handleChange={handleChange}
                                values={values}
                                onChangeDate={(date) => setFieldValue('date', date)}
                                setFieldValue={setFieldValue}
                            /> */}
                            <InfoForm2
                                notes={values.notes}
                                letter={values.letter}
                                handleChange={handleChange}
                            />
                            {/* <InfoForm3
                                images={values.images}
                                onDrop={(acceptFiles) => {
                                    if (acceptFiles.length === 0) return;
                                    setFieldValue('images', values.images.concat(acceptFiles))
                                }}
                                handleChange={handleChange}
                            /> */}
                            <MyDropzone
                                images={values.images}
                                onDrop={(acceptFiles) => {
                                    if (acceptFiles.length === 0) return;
                                    setFieldValue('images', values.images.concat(acceptFiles))
                                }}
                                onRemove={(i) => {
                                    setFieldValue('images', values.images.filter((_, idx) => idx !== i))
                                }}
                            />
                            <FAQ />
                            <SubmitBox
                                disabled={isSubmitting}
                            />
                        </Form>
                    )
                }
            }
        />
    )
}

export default FormControl