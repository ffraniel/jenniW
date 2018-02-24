import Layout from '../components/Layout';
import Head from 'next/head';

const About = (props) => (
            <div>
                <Head>
                    <title>About - Jenni Whitehead </title>
                </Head>
                <Layout>
                    <div className="about">
                        <main className="content">
                            <h1>About</h1> 
                            <p>About this website. Why done. Archive of articles.</p>
                        </main>
                    </div>
                </Layout>
                <style jsx>                        
                    {`
                    .about {
                        padding:0 15% 0 15%;
                    }
                    .about .content h1 {
                        font-family:var(--thickFont);
                        font-size:var(--midSizeFont);
                    }
                    .about .content p {
                        font-family:var(--thickFont);
                        font-size:var(--smallFont);
                    }
                    .content {
                        font-family:var(--thickFont);
                        border: solid 3px var(--midGrey);
                        background-color:var(--midGrey);
                        padding-left:10%;
                        padding-right:10%
                        height:100vh;
                    }
                    `}

                </style>
            </div>
);


export default About;