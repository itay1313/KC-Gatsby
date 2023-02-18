import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Seo from "../components/Seo"
import Tags from "../components/Tags"
import ArticleMeta from "../components/ArticleMeta"

import AlertComponent from "../components/AlertComponent"
import Jumpto from "../components/Jumpto"
import LpRichTextElement from "../components/widgets/LpRichTextElement"
import { customBodyContent } from "../utils"
import Footer from "../components/Footer"
import RelatedArticles from "../components/widgets/RelatedArticles"
import Breadcrumbs from "../components/Breadcrumbs"
const InnerSiteLayoutStyles = styled.main`
  width: 100%;
  display: grid;
  grid-template-areas: "sidebar content";
  grid-template-columns: repeat(auto-fit, minmax(75%, 1fr));
  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
  .breadcrumbs li.breadcrumb-item:nth-child(2) {
    pointer-events: none;
  }
  h2 {
    &:nth-of-type(1) {
      margin-top: 0;
      padding-top: 0;
    }
  }
  h3:not(.metrics-title, .anchor-address) {
    margin: 1.5rem 0 1rem 0;
  }
`

const KnowledgeCenterMarkdownPageTemplate = ({
  data,
  pageContext,
  location,
}) => {
  const contentRef = useRef()
  const [jumpToItems, setJumpToItems] = useState([])
  // console.log(data)
  useEffect(() => {
    if (contentRef.current && data) {
      const headerQuery = contentRef.current.querySelectorAll("h2")
      setJumpToItems([...headerQuery])
    }
  }, [data])

  const knowledgeCenterMarkdown = data?.knowledgeCenterMarkdown
  const pageTitle = knowledgeCenterMarkdown?.elements?.pagename?.value
  const pageSubTitle = knowledgeCenterMarkdown?.elements?.subtitle?.value
  const introduction = knowledgeCenterMarkdown?.elements?.introduction?.value
  const body_content = knowledgeCenterMarkdown?.elements?.body?.value

  let date = knowledgeCenterMarkdown?.system?.last_modified

  // Tags
  const pageTags = knowledgeCenterMarkdown?.elements?.channels_supported.value

  // Related Articles
  const relatedArticlesList =
    knowledgeCenterMarkdown?.elements?.related_articles.value
  const allKontentItemNavigationItem =
    data.allKontentItemNavigationItem.nodes[0].elements.subitems.value
  const textRef = useRef(null)
  const runCrumb = (array, id) => {
    let crumbLink = []

    const mapOver = (node, level, parent) => {
      let { elements, system } = node
      if (system.id === id) {
        // console.log(parent)

        crumbLink = parent
        return
      } else {
        if (elements?.subitems?.value && elements.subitems.value.length) {
          elements.subitems.value.forEach(node => {
            // excludeStaticProduct.push(`/product/${node.nid}/`)
            let p = { url: elements.url.value, title: elements.title.value }

            if (parent) p = [...parent, p]
            else p = [p]
            return mapOver(node, level + 1, p)
          })
        }
      }
    }
    array.forEach(node => {
      mapOver(node, 0)
    })
    // console.log(crumbLink)

    return crumbLink
  }
  let crumbArray = runCrumb(allKontentItemNavigationItem, pageContext.systemId)
  return (
    <>
      <Seo title={pageTitle} description={pageSubTitle} />
      <div ref={contentRef}>
        <div
          className="documenttitlecontainer"
          style={{
            marginBottom: "var(--space8)",
          }}
        >
          <Breadcrumbs crumbArray={crumbArray} lastCrumb={pageTitle} />
          <h1 className="h1">{pageTitle}</h1>
          <div className="text-body-text" id="subtitle">
            {pageSubTitle}
          </div>
          <div id="indicators">
            <Tags tags={(pageTags || []).map(({ name }) => name)} />
          </div>
          <ArticleMeta date={date} textRef={textRef} />
        </div>
        <InnerSiteLayoutStyles>
          <div className="maincontent" id="scroll-smooth">
            <div ref={textRef}>
              {introduction !== "<p><br></p>" && (
                <div className="introduction pb-8">
                  <LpRichTextElement
                    body_content={introduction}
                    bodyfield={knowledgeCenterMarkdown?.elements?.introduction}
                  />
                </div>
              )}
              {body_content.length > 0 && (
                <LpRichTextElement
                  body_content={customBodyContent(body_content)}
                  bodyfield={knowledgeCenterMarkdown?.elements?.body}
                />
              )}
            </div>
            {relatedArticlesList.length > 0 && (
              <div id="relatedArticles">
                <RelatedArticles related={relatedArticlesList} />
              </div>
            )}
            <AlertComponent />
          </div>
          <Jumpto title={pageTitle} jumpToItems={jumpToItems} />
        </InnerSiteLayoutStyles>
      </div>
      <Footer />
    </>
  )
}

export default KnowledgeCenterMarkdownPageTemplate

export const query = graphql`
  query ($systemId: String) {
    knowledgeCenterMarkdown: kontentItemKnowledgeCenterMarkdownPage(
      system: { id: { eq: $systemId } }
    ) {
      elements {
        pagename {
          value
        }
        categoryname {
          value
        }
        subcategoryname {
          value
        }
        subtitle {
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
                  modular_content {
                    id
                  }
                  links {
                    url_slug
                    type
                    link_id
                    codename
                  }
                }
                type {
                  value {
                    codename
                  }
                }
              }
            }
            ... on kontent_item_faq {
              id
              elements {
                short_answer {
                  value
                }
                question {
                  value
                }
                long_answer {
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
                          modular_content {
                            id
                          }
                          links {
                            url_slug
                            type
                            link_id
                            codename
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
                faq_page {
                  value {
                    id
                  }
                }
                category {
                  type
                  value {
                    codename
                    name
                  }
                  name
                }
                related_product {
                  value {
                    id
                  }
                }
                related_article {
                  value {
                    id
                    ... on kontent_item_knowledge_center_markdown_page {
                      id
                      elements {
                        permalink {
                          value
                        }
                        pagename {
                          value
                        }
                      }
                    }
                  }
                }
              }
              system {
                codename
                name
              }
            }
            ... on kontent_item_iframe_widget {
              id
              system {
                codename
                type
              }
              elements {
                iframe_src {
                  name
                  value
                }
                iframe_height {
                  name
                  value
                }
                iframe_width {
                  name
                  value
                }
                iframe_border {
                  name
                  value
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
        channels_supported {
          taxonomy_group
          name
          value {
            name
          }
        }
        permalink {
          value
        }
        introduction {
          value
        }
        redirects {
          value
        }
        related_articles {
          name
          value {
            system {
              codename
              name
              type
            }
            ... on kontent_item_knowledge_center_markdown_page {
              id
              elements {
                pagename {
                  value
                }
                permalink {
                  value
                }
              }
            }
          }
        }
      }
      system {
        last_modified
      }
    }
    allKontentItemNavigationItem(
      filter: { system: { codename: { eq: "root" } } }
    ) {
      nodes {
        elements {
          subitems {
            value {
              ...folder
              ...recursiveFolder
            }
          }
        }
      }
    }
  }

  fragment folder on kontent_item_navigation_item {
    system {
      id
      type
    }
    elements {
      url {
        value
      }
      title {
        value
      }
    }
  }

  fragment KCMD on kontent_item_knowledge_center_markdown_page {
    elements {
      pagename {
        value
      }
      permalink {
        value
      }
    }
    system {
      id
      type
    }
  }

  fragment recursiveFolder on kontent_item_navigation_item {
    system {
      id
      type
    }
    elements {
      subitems {
        value {
          ...page
          ...folder
          ... on kontent_item_navigation_item {
            system {
              id
              type
            }
            elements {
              subitems {
                value {
                  ...page
                  ...folder
                  ... on kontent_item_navigation_item {
                    system {
                      id
                      type
                    }
                    elements {
                      subitems {
                        value {
                          ...page
                          ...folder
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
