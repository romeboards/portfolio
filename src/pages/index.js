import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import DynamicImage from "../components/dynamicimage"
import PosterImage from "../components/posterimage"
import SEO from "../components/seo"

import projectsData from "../content/projects.yaml";
import listsData from "../content/lists.yaml";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
        <a href="https://www.justfix.nyc" target="_blank">
          JustFix.nyc
        </a>
        , a tech nonprofit that supports tenants and organizers fighting
        displacement and neglectful housing in N.Y.C. We’ve successfully served
        thousands of New Yorkers as well as brought critical transparency to
        real estate industry practices. For this work, I was named on the Forbes
        “30 Under 30” list in the law & policy category. I also serve on the{" "}
        <a>Open Data Advisory Council</a> for the City of New York, the steering
        committee for the <a>Housing Data Coalition</a>, and the Emerging
        Leaders Council for the <a>Legal Services Corporation</a>.
      </p>
      <p>
        I have extensive experience in the digital industry and have produced
        high-end digital projects for clients such as Spotify, NPR, and the Bill
        & Melinda Gates Foundation. I have a B.S. in Computer Science from Tufts
        University and was an Engineering Fellow in the <a>Blue Ridge Labs</a>{" "}
        fellowship program.
      </p>
      <p>
        Currently, I'm seeking collaborative projects with individuals and
        groups working in journalism, organizing, advocacy, and civic tech.{" "}
        <a>
          Let's scheme <span>&#10153;&#xFE0E;</span>
        </a>
      </p>
      <div className="this-way" title="nooo don't click, just scroll!">
        <span>&#10154;&#xFE0E;</span>
        {/* <span>&#8681;&#xFE0E;</span> */}
      </div>
    </section>

    <section className="projects">
      <div className="projects--list">
        {projectsData.projects.map((proj, idx) => (
          <article className="project" key={idx}>
            <h3>
              {proj.title}
              {/* <span>{proj.date}</span> */}
            </h3>
            {/* <h4>{proj.tags}</h4> */}

            <div className="project--content">
              <p>
                {proj.content} <em>({proj.tags})</em>
                &nbsp;&nbsp;
                {proj.url && (
                  <a href={proj.url} target="_blank">
                    {proj.url} &#x219D;&#xFE0E;
                  </a>
                )}
              </p>
              {proj.image && (
                <a href={proj.url} target="_blank">
                  {proj.image.includes(".gif") ? (
                    <img
                      className="gif-image"
                      src={require(`../images/${proj.image}`)}
                      alt={proj.title}
                    />
                  ) : (
                    <DynamicImage filename={proj.image} />
                  )}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="lists">
      <div>
        <h3>In the news</h3>
        <ul>
          {listsData.press.map((story, idx) => (
            <li key={idx}>
              {story.title}
              {"   "}
              <a href={story.url} target="_blank">
                {story.outlet} &#x219D;&#xFE0E;
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
    </section>

    <section className="big-sky">
      <a
        href="https://www.curbed.com/2015/9/2/9924926/hans-haacke-photography-slumlord"
        target="_blank"
      >
        <PosterImage />
      </a>
    </section>

    <footer>
      <div>
        &copy; Dan Kass, 2020
        <ul>
          <li>
            <a href="mailto:sayheytodan@gmail.com" target="_blank">
              Email
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              Resume
            </a>
          </li>
          <li>
            <a href="https://twitter.com/dananalog" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://github.com/romeboards" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dan-kass-1734b444/"
              target="_blank"
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
