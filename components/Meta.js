import Head from 'next/head'
export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
        :root {
            --main-color: #06c;
            --backing:#E3E5E7
          }
        body {background-color:var(--backing);}
    `}</style>
  </div>
)