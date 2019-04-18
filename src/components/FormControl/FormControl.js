import React from 'react'
import { Formik } from 'formik'

import { letter } from './letter'

// component
import InfoForm from '../InfoForm'
import InfoForm2 from '../InfoForm2'
// import InfoForm3 from '../InfoForm3'
import MyDropzone from './MyDropzone'
import FAQ from './FAQ';
import SubmitBox from './SubmitBox'

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
            render={
                props => {
                    // console.log(props)
                    const {
                        values,
                        handleSubmit,
                        setFieldValue,
                        handleChange,
                        isSubmitting
                    } = props
                    // console.log(values.images)
                    return (
                        <form method="post" action="/post" onSubmit={handleSubmit}>
                            <InfoForm
                                handleChange={handleChange}
                                values={values}
                                onChangeDate={(date) => setFieldValue('date', date)}
                                setFieldValue={setFieldValue}
                            />
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
                        </form>
                    )
                }
            }
        />
    )
}

export default FormControl