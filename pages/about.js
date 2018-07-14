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
                            <h3>Jenni Whitehead has worked with and on behalf of children and young people for over 42 years. Jenni is now retired but not quite!</h3>
                            <p>After working for 40 years for Bradford council Jenni was faced with a number of family and health issues and took early retirement. However Jenni has continued to offer whole school training on a freelance basis and Bradford council has continued to commission her to deliver their training for new Designated Safeguarding leads across all Bradford schools. Jenni also delivers the refresher training for Designated leads and the 'Understanding child sexual abuse',  training commissioned by Bradford  Safeguarding Children Board.</p>
                            <p>Nationally Jenni is known as the former editor of Child Protection Update, a monthly magazine published by Optimus Education which she started and ran for over ten years.
Jenni is one of the, 'older' members of CAPE, (Child Protection in Education) and is a member of CAPE's Conference committee.</p>
                            <p>Despite retirement Jenni is in regular contact with schools – offering advice, helping schools to develop child protection policy, procedure and practice.</p>
                            <p>Jenni has a long term commitment to children and their protection from all forms of abuse. She has a particular interest in supporting and understanding children and young people who have experienced child sexual abuse. She has worked with survivors of child sexual abuse on an individual basis and in group situations. The knowledge gained from survivors helped Jenni achieve an MA in child protection and her dissertation concentrated on how survivors survive.</p>
                            <h3>So why have a website?</h3>
                            <p>During the ten years plus that I edited Protecting Children Update  I ended up doing more writing than editing!</p>
                            <p>I discovered that there are many, many fantastic people who do wonderful work with children and young people but who simply cant put it on paper, they are doers not writers.
I also discovered that most publications were either written in language that most people. including me struggled with or that they were written without much thought to practical suggestions about how  you might set about working with issues. I mean right down to 'what should I say if, ' to how to challenge others when you know they are wrong.</p>
                            <p>Even now I meet people who say the articles in Protecting children Update helped them understand something or helped them take next step forward. So I thought it might be good idea to pull all my articles together in one place.</p>
                            <p>So this website is just that. An archive of stuff that might be useful to those working with the very very difficult issue of child abuse.</p>
                            <p>Please remember, however that the articles on here are, unless stated, just as they were when they appeared in Protecting children Update. Legislation and guidance moves on and may have changed since first publication. Always always check!!</p>
                            <h1 className="signature">Jenni Whitehead</h1>
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
                        height:100%;
                    }
                    .signature{
                        text-align:center;
                        padding:1.5rem;
                    }
                    `}

                </style>
            </div>
);


export default About;