import Layout from '../components/Layout'
import Head from 'next/head';

const Contact = (props) => (
        
            <div>
                <Head>
                    <title>Contact - Jenni Whitehead </title>
                </Head>
                <Layout>
                    <div className="contact">
                        <h1>Contact page</h1>
                        <p>You can contact Jenni at....</p>
                    </div>
                </Layout>
                <style jsx>                        
                    {`
                    .contact {
                        padding:0 15% 0 15%;
                    }
                    .contact h1 {
                        font-family:var(--mainFont);
                        font-size:var(--midSizeFont);
                    }
                    .contact p {
                        font-family:var(--thickFont);
                        font-size:var(--smallFont);
                    }
                    `}

                </style>
            </div>
);



export default Contact;