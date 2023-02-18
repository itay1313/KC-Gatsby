import React, { useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
// import moment from "moment"

import Seo from "../components/Seo"
import LpRichTextElement from "../components/widgets/LpRichTextElement"
import Breadcrumbs from "../components/Breadcrumbs"
import Footer from "../components/Footer"
import Tags from "../components/Tags"
import { ImageElement } from "@kentico/gatsby-kontent-components"
import RemindLaunchModal from "../components/RemindLaunchModal"
import EarlyAccessModal from "../components/EarlyAccessModal"

const InnerSiteLayoutStyles = styled.main`
  width: 100%;
`

const RoadmapPostTemplate = ({ data }) => {
  // const contentRef = useRef()
  const [launchModal, setLaunchModal] = useState(false)
  const [accessModal, setAccessModal] = useState(false)
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
            className={"my-8  flex flex-col text-center cursor-pointer"}
            style={{
              cursor: "pointer",
            }}
            role="none"
          >
            <ImageElement
              imgStyle={{ objectFit: `contain` }}
              options={{
                fit: "clip",
              }}
              className="mx-auto"
              width={coverImage.width ? coverImage.width : 400}
              height={coverImage.height ? coverImage.height : 600}
              backgroundColor="#bbbbbb"
              alt={
                coverImage.description
                  ? coverImage.description
                  : coverImage.name
              }
              image={coverImage}
            />
            <p className="text-center my-2 opacity-70 italic">
              {coverImage.description}
            </p>
          </div>
          {body !== "<p><br></p>" && (
            <div className="pb-8">
              <LpRichTextElement
                body_content={body}
                bodyfield={roadmapPages?.elements?.body}
              />
            </div>
          )}
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
          <div className="smobile:block flex items-start mb-[32px]">
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
          <EarlyAccessModal setIsOpen={setAccessModal} isOpen={accessModal} />
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
        early_access_sign_up_email {
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
