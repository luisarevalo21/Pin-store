import React, { Component } from 'react';
import './contact.css';
import * as emailjs from 'emailjs-com';
// import Slide from 'react-reveal/Slide';
import Swal from 'sweetalert2';

class Contact extends Component {

    state = {
        name: '',
        order: '',
        email: '',
        phone: '',
        message: ''
    };

    handleChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;

        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
        // console.log(this.state);
    };

    handleSubmit = event => {
        event.preventDefault();

        let template_params = {
            "name": this.state.name,
            "email": this.state.email,
            "phone": this.state.phone,
            "order": this.state.order,
            "message": this.state.message
         }
         
         let service_id = "default_service";
         let template_id = "twin_bear_c";
         let user_id = "user_lQVDVpfOj992vTKZPX08U";

         emailjs.send(service_id, template_id, template_params, user_id)
         .then((response) => {
            Swal.fire({
                title: 'Sweet!',
                text: 'Twin Bear Creations has received your Inquiry!',
                imageUrl: 'https://drive.google.com/uc?id=1vGEHApppjPP4Ii9H8JP0HlFIoZm2Dv8B',
                imageWidth: 250,
                imageHeight: 250,
                imageAlt: 'Custom image',
                animation: false
              })
            console.log('SUCCESS!', response.status, response.text);
         }, (err) => {
            Swal.fire('Uh oh . .', 
            'You\'re Inquiry was not sent. If this error keeps occuring, please Email us directly at: TwinBearC@gmail.com', 'error')
            console.log('FAILED...', err);
         });

        this.setState({ name: '', order: '', email: '', phone: '', message: '' });
    }


    render() {
        return (
            <div id='contact' className='row justify-content-around mt-3 mb-5'>

                <div className='col-md-11 pb-5 mb-5'>
                    <div className='row justify-content-md-center'>

                        {/* Contact Form */}
                        <div id='contactForm' className='col-md-8'>
                            <h1 className='p-3 text-dark' style={{ fontSize: '50px' }}>Contact</h1>

                            <form>
                                <div className='row border border-danger rounded-sm'>

                                    <input
                                        className='col-md-6 border border-bottom-0 border-danger pt-1 pb-5'
                                        name='name'
                                        type='name'
                                        placeholder='First & Last Name'
                                        onChange={this.handleChange}
                                        value={this.state.name}
                                        required='true'  
                                    />

                                    <input
                                        className='col-md-6 border border-bottom-0 border-danger pt-1 pb-5'
                                        name='order'
                                        type='numeric'
                                        placeholder='Order #'
                                        onChange={this.handleChange}
                                        value={this.state.order}
                                        required='true'
                                    />

                                </div>

                                <div className='row border border-top-0 border-danger rounded-sm'>

                                    <input
                                        className='col-md-6 border border-top-0 border-danger pt-1 pb-5'
                                        name='email'
                                        type='email'
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                        placeholder='E-mail'
                                        onChange={this.handleChange}
                                        value={this.state.email}
                                        required='true'
                                    />

                                    <input
                                        className='col-md-6 border border-top-0 border-danger pt-1 pb-5'
                                        name='phone'
                                        type='tel'
                                        placeholder='Phone Number'
                                        onChange={this.handleChange}
                                        value={this.state.phone}
                                        required='true'
                                    />
                                </div>

                                <div className='row border border-top-0 border-danger rounded-sm'>
                                    <textarea
                                        className='col-md-12 border border-top-0 border-danger pt-2 pb-5'
                                        name='message'
                                        type='text'
                                        placeholder='Your message to us . . .'
                                        onChange={this.handleChange}
                                        value={this.state.message}
                                        required='true'
                                    />
                                </div>

                            </form>

                            <div className='row justify-content-md-center'>
                                <div className='col-md-6 text-center ml-4 mt-4 mr-4'>
                                    <button
                                        className='btn btn-block btn-success rounded-pill'
                                        name='submit'
                                        type='submit'
                                        onClick={this.handleSubmit}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>

                            <div className='row justify-content-md-center'>
                                <div className='col-md-12'>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Contact;