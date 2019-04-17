import React from 'react'
import InfoForm from './InfoForm';
import InfoForm2 from './InfoForm2';
import InfoForm3 from './InfoForm3'

class FormControl extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {


    }

    render() {
        return (
            <section>
                <form action="/post" method="post" encType="multipart/form-data">
                    <InfoForm />
                    <InfoForm2 />
                    <InfoForm3 />
                    <input type="submit" value="제출" />
                </form>
            </section>
        )
    }

}

export default FormControl