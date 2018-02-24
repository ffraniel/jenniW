import Layout from '../components/Layout'
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Loading from '../components/Loading';


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            email:'',
            organisation:'',
            message:'',
            sending:false,
            sent:false

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleOrganisationChange = this.handleOrganisationChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }
    handleNameChange (e) {
        e.preventDefault();
        this.setState({
            name:e.target.value
        })
    }
    handleEmailChange (e) {
        e.preventDefault();
        this.setState({
            email:e.target.value
        })
    }
    handleOrganisationChange (e) {
        e.preventDefault();
        this.setState({
            organisation:e.target.value
        })
    }
    handleMessageChange (e) {
        e.preventDefault();
        this.setState({
            message:e.target.value
        })
    }
    handleSubmit (e) {
        e.preventDefault();
        var data = {
            name:this.state.name,
            email:this.state.email,
            organisation:this.state.organisation,
            message:this.state.message
        }
        this.setState({
            name:'',
            email:'',
            organisation:'',
            message:'',
            sending:true
        })
        console.log(data)
        return fetch ('https://script.google.com/macros/s/AKfycbwmGJL-nB3GWSzDy7hXGjNJzNQ5VOspTrc90Skim-2iRJeNiEs/exec', {
            method:'post',
            body: JSON.stringify(data), 
            mode: 'no-cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
    })
        .then((res)=>{
            this.setState({
                sending:false,
                sent:true
            });
        })
        .catch(console.log)
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Contact - Jenni Whitehead </title>
                </Head>
                <Layout>
                    <div className="contact">
                    {!this.state.sent && 
                        <main className="content" >
                            {this.state.sending && <Loading />}
                            <h1>Contact page</h1>
                            <p>You can contact Jenni at....</p>
                            <a href="genni@postmaster.co.uk">genni@postmaster.co.uk</a>
                            <form id="contactForm" onSubmit={this.handleSubmit}>
                                <p>Name: </p><input type="text" placeholder="name" name="name" id="name" onChange={this.handleNameChange}/>
                                <br />
                                <p>Email: </p><input type="text" placeholder="email" name="email" id="email" onChange={this.handleEmailChange} />
                                <br />
                                <p>Organisation: </p><input type="text" placeholder="organisation" name="organisation" id="organisation" onChange={this.handleOrganisationChange}/>
                                <br />
                                <p>Message: </p><textarea placeholder="message" name="message" id="messageInput" maxLength="500" onChange={this.handleMessageChange} />
                                <input type="submit" />
                            </form>
                        </main>
                    }
                    {this.state.sent && 
                        <main className="content">
                            <h2>Your message was sent to Jenni Whitehead.</h2>
                            <Link to={'/'} as={'/'} passHref>
                                <a href="#">Home</a>
                            </Link>
                        </main>}
                        
                    </div>
                </Layout>
                <style jsx>                        
                    {`
                    .contact {
                        padding:0 15% 0 15%;
                    }
                    .content {
                        font-family:var(--thickFont);
                        border: solid 3px var(--midGrey);
                        background-color:var(--midGrey);
                        padding-left:10%;
                        padding-right:10%
                        height:100vh;
                    }
                    .contact .content h1 {
                        font-family:var(--thickFont);
                        font-size:var(--midSizeFont);
                    }
                    .contact .content p {
                        font-family:var(--thickFont);
                        font-size:var(--smallFont);
                    }
                    #contactForm {
                        padding:4px;

                    }
                    #contactForm input {
                        border: 3px solid #cccccc;
                        border-radius:5px;
                        padding: 5px;
                        font-family: var(--thickFont);
                        font-color:black; 
                        font-size:var(--referenceSize);
                        width:80%;
	                    min-height: 20px; 
                    }
                    #messageInput {
                        resize: none;
                        overflow: auto;
                        height: auto; 
                        width:80%;
	                    min-height: 80px;
                        border: 3px solid #cccccc;
                        border-radius:5px;
                        padding: 5px;
                        font-size:var(--referenceSize);
                        font-family: var(--thickFont);
                        font-color:black;  
                    }
                    `}

                </style>
            </div>
        );
    }
}




export default Contact;