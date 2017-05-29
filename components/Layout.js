import Link from "next/link";
import Head from "next/head";

const Layout = ({ children, title = "This is a Default Title" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous"
      />
    </Head>
    <section>
      {children}
    </section>

    <footer>
      I`m here to stay
    </footer>
  </div>
);

export default Layout;
