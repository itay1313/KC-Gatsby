import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import Seo from "../components/Seo"
import Article from "../components/Article"
import PostSidebar from "../components/postSidebar"
import Footer from "../components/Footer"
import Slash from "../components/widgets/Slash"
import LpRichTextElement from "../components/widgets/LpRichTextElement"
import RoadmapListing from "../components/RoadmapListing"

const InnerSiteLayoutStyles = styled.main`
  width: 100%;
`

const BlogReleaseNotesTemplate = ({ data, pageContext }) => {
  console.log(pageContext)
  // // Blog - Release notes template
  // const allReleaseNotesPage = data?.allReleaseNotesPage
  // const kontentItemBlogReleaseNotes = data?.kontentItemBlogReleaseNotes

  // const pageTitle = kontentItemBlogReleaseNotes?.elements?.pagename?.value

  // const items = []
  // const articles = allReleaseNotesPage.nodes
  // articles.forEach(article => {
  //   items.push(
  //     <Article data={article} key={article.elements.permalink.value} />
  //   )
  // })
  const elements = data.kontentItemBlogRoadmap?.elements
  const body = elements?.body?.value
  const footer = elements?.footer?.value

  return (
    <>
      {/* <Seo title={pageTitle} description={pageTitle} /> */}
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
          {body !== "<p><br></p>" && (
            <div className="pb-8">
              <LpRichTextElement
                body_content={body}
                bodyfield={elements?.body}
              />
            </div>
          )}
          <RoadmapListing />
          {footer !== "<p><br></p>" && (
            <div className="pb-8">
              <LpRichTextElement
                body_content={footer}
                bodyfield={elements?.footer}
              />
            </div>
          )}
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
        body {
          value
          modular_content {
            id
            system {
              type
              codename
              id
            }
            ... on kontent_item_video___widget {
              id
              elements {
                video_id {
                  value
                }
                video_type {
                  value {
                    codename
                  }
                }
              }
              system {
                codename
                type
              }
            }
            ... on kontent_item_image__widget {
              id
              system {
                type
              }
              elements {
                description {
                  value
                }
                image {
                  value {
                    url
                    name
                    description
                    height
                    width
                  }
                  name
                }
                orientation {
                  value {
                    codename
                  }
                }
                product {
                  value {
                    id
                    system {
                      id
                    }
                  }
                }
              }
            }
            ... on kontent_item_code_sample {
              id
              system {
                type
                codename
              }
              elements {
                code {
                  value
                }
                language {
                  value {
                    codename
                  }
                }
              }
            }
            ... on kontent_item_contentbox {
              id
              system {
                codename
                type
              }
              elements {
                notice_text {
                  value
                  links {
                    codename
                    type
                    link_id
                    url_slug
                  }
                  modular_content {
                    id
                  }
                }
                type {
                  value {
                    codename
                  }
                }
              }
            }
          }
          images {
            url
            image_id
          }
          links {
            url_slug
            type
            codename
            link_id
          }
        }
        footer {
          value
          modular_content {
            id
            system {
              type
              codename
              id
            }
          }
        }
        pagename {
          value
          name
        }
      }
    }
  }
`
