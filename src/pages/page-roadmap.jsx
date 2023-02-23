import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import Seo from "../components/Seo"
import Footer from "../components/Footer"
import Slash from "../components/widgets/Slash"
// import LpRichTextElement from "../components/widgets/LpRichTextElement"
import RoadmapListing from "../components/RoadmapListing"
import HeroImg from "../assets/images/roadmap/hero.png"
const InnerSiteLayoutStyles = styled.main`
  width: 100%;
`

const BlogReleaseNotesTemplate = ({ data, pageContext }) => {
  console.log(pageContext)
  // // Blog - Release notes template
  // const allReleaseNotesPage = data?.allReleaseNotesPage
  // const kontentItemBlogReleaseNotes = data?.kontentItemBlogReleaseNotes

  const pageTitle = data.kontentItemBlogRoadmap?.elements?.pagename?.value

  // const items = []
  // const articles = allReleaseNotesPage.nodes
  // articles.forEach(article => {
  //   items.push(
  //     <Article data={article} key={article.elements.permalink.value} />
  //   )
  // })
  // const elements = data.kontentItemBlogRoadmap?.elements
  // const body = elements?.body?.value
  // const footer = elements?.footer?.value

  return (
    <>
      <Seo title={pageTitle} description={pageTitle} />
      <div>
        <div
          className="documenttitlecontainer"
          style={{
            marginBottom: "var(--space8)",
          }}
        >
          <div className="breadcrumbs text-sm">
            <ul className="bread-crumbs flex-wrap">
              <li className="breadcrumbs-item m-0 text-primary hover:text-primary-hover">
                <Link to="/">Knowledge Center</Link>
              </li>
              <li className="m-0">
                <Slash />
              </li>
              <li className="breadcrumbs-item text-body-text m-0">
                Product Roadmap
              </li>
            </ul>
          </div>

          <h1
            className="h1"
            style={{
              background:
                "linear-gradient(90deg, #3863E5 0%, #8D46EB 46.61%, #E849B7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            LivePerson's Product Roadmap
          </h1>
        </div>
        <InnerSiteLayoutStyles>
          <div className="mb-[32px]">
            <div className="w-full mb-[24px]">
              <img src={HeroImg} alt="roadmap hero" />
            </div>
            <p className="mb-[24px]">
              Welcome to LivePerson's digital product roadmap. &nbsp;Here you
              can find details about features we have released into the
              production environment, features we are committed to deliver, and
              progress on our strategic vision.
            </p>
            <h2 className="mb-[16px]">Safe Harbor</h2>
            <p>
              The following is intended to outline our general product
              direction. It is intended for information purposes only, and may
              not be incorporated into any contract. It is not a commitment to
              deliver any material, code, or functionality, and should not be
              relied upon in making purchasing decisions.
              <br />
              The development, release, and timing of any features or
              functionality described for LivePerson’s products remains at the
              sole discretion of LivePerson and is subject to change.
            </p>
          </div>
          <RoadmapListing />

          <div>
            <h2 className="mb-[16px] ">See also</h2>
            <div className="mb-[16px]">
              <Link
                className=" text-[21px] font-semibold leading-[28px]"
                to="/whats-new/"
              >
                What's New
              </Link>
            </div>
            <div className="mb-[32px]">
              <Link
                className="text-[21px] font-semibold leading-[28px]"
                to="/release-notes/"
              >
                Release notes
              </Link>
            </div>
          </div>
        </InnerSiteLayoutStyles>
      </div>
      <Footer />
    </>
  )
}

export default BlogReleaseNotesTemplate

export const query = graphql`
  query ($systemId: String) {
    kontentItemBlogRoadmap(system: { id: { eq: $systemId } }) {
      elements {
        pagename {
          value
          name
        }
      }
    }
  }
`
