import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link href="../static/style.css" rel="stylesheet" type="text/css" />
      <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    </Head>
    <style jsx global>{`
     // reset
     html, body { margin: 0; padding: 0; } 
     ///
        :root {
            --main-color: #06c;
            --lightGrey:#E3E5E7;
            --lightGreen:#46BA77;
            --darkGreen:#27ae60;
            --midGrey:#95a5a6;
            --darkGrey:#363C3C;
            --blue:#186BAE;
            --deepRed:#AE3027;
            
            --bigFont:3.8rem;
            --midSizeFont:2rem;
            --smallMidFont:1.5rem;
            --smallFont:1rem;
            --referenceSize:0.8rem;
            --mainFont:'GloberThin';
            --thickFont:'GloberBold';
          }

          @font-face {
            font-family: 'GloberThin';
            font-style: normal;
            // font-weight: 100;
            src: url("../static/fonts/Glober Thin Free.otf") format("opentype");
        }
        @font-face {
          font-family: 'GloberBold';
          font-style: normal;
          // font-weight: 100;
          src: url("../static/fonts/Glober SemiBold Free.otf") format("opentype");
      }

        
        body {
          background-color:var(--lightGrey);
        }
        
    `}</style>
  </div>
)