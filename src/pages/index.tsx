import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";

import styles from "./index.module.css";

function HomepageHeader() {
     const { siteConfig } = useDocusaurusContext();
     return (
          <header className={clsx("hero hero--primary", styles.heroBanner)}>
               <div className="container">
                    <Heading as="h1" className="hero__title">
                         {siteConfig.title}
                    </Heading>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                         <Link className="button button--secondary button--lg" to="/docs/html">
                              Explore
                         </Link>
                    </div>
               </div>
          </header>
     );
}

export default function Home(): JSX.Element {
     const { siteConfig } = useDocusaurusContext();
     return (
          <Layout title={`${siteConfig.title}`} description="">
               <main
                    style={{
                         height: "100vh",
                         backgroundColor: "#2e8555",
                         display: "flex",
                         flexDirection: "column",
                         justifyContent: "center",
                         alignItems: "center",
                    }}
               >
                    <HomepageHeader />
                    <footer
                         style={{
                              marginTop: "100px",
                         }}
                    >
                         {" "}
                         &lt;/&gt; and Crafted with 💛 by{" "}
                         <span style={{}}>
                              <a
                                   style={{
                                        color: "black",
                                        fontWeight: "bolder",
                                   }}
                                   href="https://vivekmaurya.me"
                              >
                                   Vivek Maurya
                              </a>
                         </span>
                    </footer>
               </main>
          </Layout>
     );
}
