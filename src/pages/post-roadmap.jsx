import React from "react"
// import { useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
// import moment from "moment"

import Seo from "../components/Seo"
import LpRichTextElement from "../components/widgets/LpRichTextElement"
import Breadcrumbs from "../components/Breadcrumbs"
import Footer from "../components/Footer"
import Tags from "../components/Tags"
import { ImageElement } from "@kentico/gatsby-kontent-components"
// import RemindLaunchModal from "../components/RemindLaunchModal"
// import EarlyAccessModal from "../components/EarlyAccessModal"

const InnerSiteLayoutStyles = styled.main`
  width: 100%;
`

const RoadmapPostTemplate = ({ data }) => {
  // const contentRef = useRef()
  // const [launchModal, setLaunchModal] = useState(false)
  // const [accessModal, setAccessModal] = useState(false)
  // useEffect(() => {
  //   if (contentRef.current && data) {
  //     const headerQuery = contentRef.current.querySelectorAll("h2")
  //     setJumpToItems([...headerQuery])
  //   }
  // }, [data])

  // // general template
  const roadmapPages = data?.roadmapPages
  const pageTitle = roadmapPages?.elements?.pagename?.value
  // const pageSubTitle = roadmapPages?.elements?.subtitle?.value

  // const product_release_notes =
  //   roadmapPages?.elements?.product_release_notes?.value
  // // Tags
  const pageTags = roadmapPages?.elements?.tags?.value
  const body = roadmapPages?.elements?.body?.value
  // const featureDescription = roadmapPages?.elements?.feature_description?.value
  const coverImage = roadmapPages?.elements?.image_upload.value?.[0]
  // const key_benefits = roadmapPages?.elements?.key_benefits?.value
  // const dependencies = roadmapPages?.elements?.dependencies?.value

  // // Prev and Next Slug ReleaseNotes
  // const { prev, next } = pageContext

  return (
    <>
      <Seo
        title={pageTitle} //description={pageSubTitle}
      />
      <div
      //ref={contentRef}
      >
        <div
          className="documenttitlecontainer"
          style={{
            marginBottom: "var(--space8)",
          }}
        >
          <Breadcrumbs
            secondCrumbLink="product-roadmap"
            secondCrumbTitle="Product Roadmap"
            lastCrumb={pageTitle}
          />
          <h1 className="h1">{pageTitle}</h1>
          <div id="indicators">
            <Tags tags={(pageTags || []).map(({ name }) => name)} />
          </div>
        </div>
        <InnerSiteLayoutStyles>
          <div className="maincontent mb-8"></div>
          <div
            className={"my-8 w-full flex flex-col text-center cursor-pointer"}
            style={{
              cursor: "pointer",
            }}
            role="none"
          >
            <div className={"w-full overflow-hidden"}>
              <ImageElement
                // imgStyle={{ height: `480px` }}
                // className="mx-auto"
                // width={coverImage.width ? coverImage.width : 400}
                // height={480}
                backgroundColor="#bbbbbb"
                alt={
                  coverImage.description
                    ? coverImage.description
                    : coverImage.name
                }
                image={coverImage}
              />
            </div>

            {/* <p className="text-center my-2 opacity-70 italic">
              {coverImage.description}
            </p> */}
          </div>
          {body !== "<p><br></p>" && (
            <div className="pb-8">
              <LpRichTextElement
                body_content={body}
                bodyfield={roadmapPages?.elements?.body}
              />
            </div>
          )}
          <h3 className="smobile:pt-6 pt-12">Feature Description</h3>
          <div className="flex py-8 gap-4 mobile:flex-col">
            <div className="md:w-1/2">
              <img
                src="https://preview-assets-us-01.kc-usercontent.com/4f67b96c-d078-0081-e1c3-7a8478c0bfb9/66316171-a08d-4c71-bc90-1e0498a800ff/add-chat-to-your-website-1.png"
                alt=""
              />
            </div>
            <div className="md:w-1/2">
              <p>
                The World's Most Innovative Companies is Fast Company's
                signature franchise and one of its most highly anticipated
                editorial efforts of the year. It honors businesses making the
                biggest impact on their industries and culture as a whole,
                creating the future today with some of the most inspiring
                accomplishments of the 21st century. This year also marks
                LivePerson's first time being recognized on Fast Company's
                overall World's Most Innovative Companies list, coming in as the
                #21 Most Innovative Company in the world. LivePerson previously
                earned the #3 spot in the Most Innovative AI Company category in
                2020.
              </p>
            </div>
          </div>
          <h3 className="smobile:pt-6">Key benefits</h3>
          <div className="flex py-8 gap-4 mobile:flex-col">
            <ol className="roadmap-ol">
              <li>
                As a Spotify Email Advisor, I want to have guardrails on when an
                email is sent out. Many 'actions' are tied to say a Ctrl+Enter
                as opposed to just Enter which may also be mistaken by a
                linebreak.
              </li>
              <li>
                As a Spotify Email Advisor, I want to have guardrails on when an
                email is sent out. Many 'actions' are tied to say a Ctrl+Enter
                as opposed to just Enter which may also be mistaken by a
                linebreak.
              </li>
              <li>
                As a Spotify Email Advisor, I want to have guardrails on when an
                email is sent out. Many 'actions' are tied to say a Ctrl+Enter
                as opposed to just Enter which may also be mistaken by a
                linebreak.
              </li>
              <li>
                As a Spotify Email Advisor, I want to have guardrails on when an
                email is sent out. Many 'actions' are tied to say a Ctrl+Enter
                as opposed to just Enter which may also be mistaken by a
                linebreak.
              </li>
              <li>
                As a Spotify Email Advisor, I want to have guardrails on when an
                email is sent out. Many 'actions' are tied to say a Ctrl+Enter
                as opposed to just Enter which may also be mistaken by a
                linebreak.
              </li>
            </ol>
          </div>
          {/* {featureDescription !== "<p><br></p>" && (
            <div className="pb-8">
              <LpRichTextElement
                body_content={featureDescription}
                bodyfield={roadmapPages?.elements?.feature_description}
              />
            </div>
          )}
          {featureDescription !== "<p><br></p>" && (
            <div className="pb-8">
              <LpRichTextElement
                body_content={featureDescription}
                bodyfield={roadmapPages?.elements?.feature_description}
              />
            </div>
          )}
          {key_benefits !== "<p><br></p>" && (
            <div className="pb-8">
              <LpRichTextElement
                body_content={key_benefits}
                bodyfield={roadmapPages?.elements?.key_benefits}
              />
            </div>
          )}
          {dependencies !== "<p><br></p>" && (
            <div className="pb-8">
              <LpRichTextElement
                body_content={dependencies}
                bodyfield={roadmapPages?.elements?.dependencies}
              />
            </div>
          )} */}
          {/* <Jumpto title={pageTitle} jumpToItems={jumpToItems} /> */}
          {/* <div className="hidden smobile:block flex items-start mb-[32px]">
            <button
              style={{ fontFamily: "Space Grotesk", fontWeight: 600 }}
              className="smobile:mb-[20px] mr-[10px] h-[48px] rounded-[24px] border-body-text px-[32px] py-[12px] font-[Space Grotesk] font-lm border"
              onClick={() => setAccessModal(true)}
            >
              Request Early Access
            </button>
            <button
              style={{ fontFamily: "Space Grotesk", fontWeight: 600 }}
              className=" h-[48px]  rounded-[24px]  text-body-text border-body-text px-[32px] py-[12px] font-[Space Grotesk] font-lm border"
              onClick={() => setLaunchModal(true)}
            >
              Remind me at launch
            </button>
          </div> 
          <RemindLaunchModal setIsOpen={setLaunchModal} isOpen={launchModal} />
          <EarlyAccessModal setIsOpen={setAccessModal} isOpen={accessModal} />*/}
        </InnerSiteLayoutStyles>
      </div>
      <Footer />
    </>
  )
}

export default RoadmapPostTemplate

export const query = graphql`
  query ($systemId: String) {
    roadmapPages: kontentItemRoadmapPages(system: { id: { eq: $systemId } }) {
      elements {
        pagename {
          value
        }
        permalink {
          value
        }
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

        early_access_date {
          value
        }

        feature {
          value {
            name
            codename
          }
        }
        feature_description {
          value
        }
        image_upload {
          value {
            url
            width
            type
            size
            name
            height
            description
          }
          type
          name
        }

        tags {
          value {
            name
            codename
          }
        }
        release_date {
          value
        }
      }
      id
    }
  }
`
