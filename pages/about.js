import Layout from '../components/Layout';


const About = (props) => (
            <div>
                <Layout>
                    <div className="about">
                        <h1>About</h1> 
                        <p>Jenni Whitehead is a etc</p>
                    </div>
                </Layout>
                <style jsx>                        
                    {`
                    .about {
                        padding:0 15% 0 15%;
                    }
                    .about h1 {
                        font-family:var(--mainFont);
                        font-size:var(--midSizeFont);
                    }
                    .about p {
                        font-family:var(--thickFont);
                        font-size:var(--smallFont);
                    }
                    `}

                </style>
            </div>
);


export default About;