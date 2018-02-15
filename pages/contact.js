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
                    `}

                </style>
            </div>
);



export default Contact;