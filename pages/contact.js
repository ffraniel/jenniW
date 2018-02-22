import Layout from '../components/Layout'
import Head from 'next/head';

const Contact = (props) => (
        
            <div>
                <Head>
                    <title>Contact - Jenni Whitehead </title>
                </Head>
                <Layout>
                    <div className="contact">
                        <main className="content" >
                            <h1>Contact page</h1>
                            <p>You can contact Jenni at....</p>
                            <a href="genni@postmaster.co.uk">genni@postmaster.co.uk</a>
                            <form id="contactForm">
                                <p>Name: </p><input type="text" placeholder="name" />
                                <br />
                                <p>Email: </p><input type="text" placeholder="email" />
                                <br />
                                <p>Organisation: </p><input type="text" placeholder="organisation" />
                                <br />
                                <p>Message: </p><textarea placeholder="message" id="messageInput" maxLength="500" />
                                {/* // limit at 500 words */}
                            </form>
                        </main>
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



export default Contact;