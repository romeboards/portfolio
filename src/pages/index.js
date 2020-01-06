import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <h2>
        I’m an interdisciplinary coder, designer, and progressive advocate.
      </h2>
      <p>
        My work supports social justice movements through the use of data and
        technology. I design & build tools that investigate social and technical
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
        <em>“30 Under 30”</em> list in the law & policy category. I also serve
        on the <a>Open Data Advisory Council</a> for the City of New York, the
        steering committee for the <a>Housing Data Coalition</a>, and the
        Emerging Leaders Council for the <a>Legal Services Corporation</a>, the
        nation’s largest funder of legal aid organizations.
      </p>
      <p>
        I have extensive experience in the digital industry and have produced
        high-end digital experiences for clients such as Spotify, NPR, and the
        Bill & Melinda Gates Foundation. I have a B.S. in Computer Science from
        Tufts University and was an Engineering Fellow in the{" "}
        <a>Blue Ridge Labs</a> fellowship program.
      </p>
      <p>
        Currently, I'm seeking collaborative projects with individuals and
        groups working in journalism, organizing, advocacy, and civic tech.{" "}
        <a>Let's scheme.</a>
      </p>
    </section>
    <section className="projects">
      <h2>Selected Projects</h2>
      <div className="projects--list">
        <article className="project">
          <h3>Who Owns What in NYC?</h3>
          <p>
            Senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec eu libero sit amet quam egestas semper.{" "}
            <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
            leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
            erat wisi, condimentum sed, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis tempus lacus enim ac dui.{" "}
            <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut
            felis.
          </p>
        </article>

        <article className="project">
          <h3>JustFix.nyc Tenant Web-app</h3>
          <p>
            Senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec eu libero sit amet quam egestas semper.{" "}
            <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
            leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
            erat wisi, condimentum sed, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis tempus lacus enim ac dui.{" "}
            <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut
            felis.
          </p>
        </article>

        <article className="project">
          <h3>Eviction Free NYC</h3>
          <p>
            Senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec eu libero sit amet quam egestas semper.{" "}
            <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
            leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
            erat wisi, condimentum sed, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis tempus lacus enim ac dui.{" "}
            <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut
            felis.
          </p>
        </article>

        <article className="project">
          <h3>JustFix.nyc SMS services</h3>
          <p>
            Senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec eu libero sit amet quam egestas semper.{" "}
            <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
            leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
            erat wisi, condimentum sed, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis tempus lacus enim ac dui.{" "}
            <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut
            felis.
          </p>
        </article>

        <article className="project">
          <h3>Localore: Finding America</h3>
          <p>
            Senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec eu libero sit amet quam egestas semper.{" "}
            <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
            leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
            erat wisi, condimentum sed, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis tempus lacus enim ac dui.{" "}
            <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut
            felis.
          </p>
        </article>

        <article className="project">
          <h3>Spotify Stranger Things</h3>
          <p>
            Senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec eu libero sit amet quam egestas semper.{" "}
            <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
            leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
            erat wisi, condimentum sed, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis tempus lacus enim ac dui.{" "}
            <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut
            felis.
          </p>
        </article>

        <article className="project">
          <h3>Random Other Project</h3>
          <p>
            Senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec eu libero sit amet quam egestas semper.{" "}
            <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
            leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
            erat wisi, condimentum sed, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis tempus lacus enim ac dui.{" "}
            <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut
            felis.
          </p>
        </article>
      </div>
    </section>

    <section className="links">
      <h2>More Content</h2>
    </section>
  </Layout>
)

export default IndexPage
