import React from "react"

import Layout from "../components/layout"
import PosterImage from "../components/posterimage"
import SEO from "../components/seo"

import projectsData from "../content/projects.yaml";
import listsData from "../content/lists.yaml";

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <section className="hero">
      <p>
        Hello! I’m an interdisciplinary coder, designer, and progressive
        advocate.
      </p>
      <p>
        My work supports social justice movements through the use of data and
        technology. I design and build tools that investigate social & technical
        systems, make institutions more accessible, and tell critical stories
        through digital media.
      </p>
      <p>
        For the past five years, I served as a co-founder and Executive Director
        at{" "}
        <a
          href="https://www.justfix.nyc"
          target="_blank"
          rel="noopener noreferrer"
        >
          JustFix.nyc
        </a>
        , a tech nonprofit that supports tenants and organizers fighting
        displacement and neglectful housing in N.Y.C. Working with an incredible
        and dedicated team, we successfully served thousands of New Yorkers and
        brought transparency to real estate industry practices. For this work, I
        was named on the Forbes “30 Under 30” list in the law & policy category.
        I also serve on the{" "}
        <a
          href="https://opendata.cityofnewyork.us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Data Advisory Council
        </a>{" "}
        for the City of New York, the steering committee for the{" "}
        <a
          href="https://www.housingdatanyc.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Housing Data Coalition
        </a>
        , and the Emerging Leaders Council for the{" "}
        <a
          href="https://www.lsc.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Legal Services Corporation
        </a>
        .
      </p>
      <p>
        I have extensive experience in the digital industry and have produced
        high-end digital projects for clients such as Spotify, NPR, and the Bill
        & Melinda Gates Foundation. I have a B.S. in Computer Science from Tufts
        University and was an Engineering Fellow in the{" "}
        <a
          href="https://labs.robinhood.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blue Ridge Labs
        </a>{" "}
        fellowship program.
      </p>
      <p>
        Currently, I'm seeking collaborative data & storytelling projects with
        individuals and groups working in journalism, organizing, advocacy, and
        civic tech.{" "}
        <a
          href="mailto:sayheytodan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's talk <span>&#10153;&#xFE0E;</span>
        </a>
      </p>
    </section>

    <section className="projects">
      <div className="projects--list">
        {projectsData.projects.map((proj, idx) => (
          <article className="project" key={idx}>
            <h3>{proj.title}</h3>
            <div className="project--content">
              <p>
                {proj.content} <em>({proj.tags})</em>
                &nbsp;&nbsp;
                {proj.url && (
                  <a href={proj.url} target="_blank" rel="noopener noreferrer">
                    {proj.url} &#x27AD;&#xFE0E;
                  </a>
                )}
              </p>
              {proj.image && (
                <a
                  className="project--image"
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require(`../images/${proj.image}`)}
                    alt={proj.title}
                  />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
    <section className="lists">
      <div>
        <div>
          <h3>In the news</h3>
          <ul>
            {listsData.press.map((story, idx) => (
              <li key={idx}>
                {story.title}
                {"   "}
                <a href={story.url} target="_blank" rel="noopener noreferrer">
                  {story.outlet} &#x27AD;&#xFE0E;
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Conference talks</h3>
          <ul>
            {listsData.confs.map((talk, idx) => (
              <li key={idx}>
                {talk.title}
                <br />
                <em>{talk.conf}</em>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="big-sky no-arrow">
      <a
        href="https://www.curbed.com/2015/9/2/9924926/hans-haacke-photography-slumlord"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PosterImage />
      </a>
    </section>

    <footer>
      <div>
        &copy; Dan Kass, 2020
        <ul>
          <li>
            <a
              href="mailto:sayheytodan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="/Daniel Kass - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/dananalog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/romeboards"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dan-kass-1734b444/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </Layout>
)

export default IndexPage
