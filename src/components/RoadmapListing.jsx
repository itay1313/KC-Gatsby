import React, { useState, useEffect } from "react"
import { graphql, Link, useStaticQuery, navigate } from "gatsby"
import _ from "lodash"
import { ImageElement } from "@kentico/gatsby-kontent-components"
import moment from "moment"
import Select from "./Select"
import LpRichTextElement from "./widgets/LpRichTextElement"
import RemindLaunchModal from "./RemindLaunchModal"
import EarlyAccessModal from "./EarlyAccessModal"
function RoadmapListing() {
  const data = useStaticQuery(graphql`
    {
      allKontentTaxonomy(
        filter: {
          system: { name: { in: ["Roadmap Tags", "Roadmap Feature"] } }
        }
      ) {
        nodes {
          system {
            name
            codename
          }
          terms {
            name
            codename
          }
        }
      }
      allKontentItemRoadmapPages {
        nodes {
          elements {
            body {
              value
            }
            permalink {
              value
            }
            image_upload {
              value {
                description
                height
                size
                name
                type
                url
                width
              }
              name
              type
            }
            feature_description {
              value
            }
            feature {
              value {
                codename
                name
              }
              name
              taxonomy_group
            }
            tags {
              value {
                codename
                name
              }
              name
              taxonomy_group
            }
            pagename {
              value
            }
            release_date {
              value
            }
            early_access_date {
              value
            }
            category {
              value {
                ... on kontent_item_categories_roadmap {
                  id
                  elements {
                    codename {
                      value
                    }
                    name {
                      value
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
      allKontentItemCategoriesRoadmap {
        nodes {
          elements {
            name {
              value
            }
            codename {
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
          }
        }
      }
    }
  `)

  const arrayTaxonomy = data.allKontentTaxonomy.nodes
  const tags = arrayTaxonomy.filter(v => v.system.name === "Roadmap Tags")[0]
    .terms
  const features = arrayTaxonomy.filter(
    v => v.system.name === "Roadmap Feature"
  )[0].terms
  // const categories = arrayTaxonomy.filter(
  //   v => v.system.name === "Roadmap Category"
  // )[0].terms
  const posts = data.allKontentItemRoadmapPages.nodes
  const categories = data.allKontentItemCategoriesRoadmap.nodes.map(v => ({
    codename: v?.elements?.codename?.value,
    name: v?.elements?.name?.value,
    body: v?.elements?.body,
  }))
  const [launchModal, setLaunchModal] = useState(false)
  const [accessModal, setAccessModal] = useState(false)

  const [selectedTags, setSelectedTags] = useState([])
  const [category, setCategory] = useState({})
  const [feature, setFeature] = useState({})
  const [filterInput, setFilterInput] = useState("")

  const [items, setItems] = useState({})
  function filterArray(array, filters) {
    const filterKeys = Object.keys(filters)
    return array.filter(item => {
      // validates all filter criteria
      return filterKeys.every(key => {
        // ignores non-function predicates
        if (typeof filters[key] !== "function") return true
        return filters[key](item.elements[key])
      })
    })
  }
  const filters = {
    category: cat => {
      return category?.codename
        ? cat &&
            cat?.value?.[0]?.elements?.codename?.value === category.codename
        : true
    },
    feature: feat => {
      return feature?.codename
        ? feat?.value?.[0]?.codename === feature.codename
        : true
    },
    tags: tags =>
      selectedTags.length
        ? tags.value.find(x => selectedTags.includes(x?.codename))
        : true,
    pagename: desc => {
      return filterInput
        ? desc?.value?.toLowerCase()?.includes(filterInput.toLowerCase())
        : true
    },
  }
  const splitFeatures = data => {
    let obj = {}
    console.log(data)
    data.map(post => {
      let feature = post.elements.feature.value[0]
      if (_.isEmpty(obj[feature.codename])) {
        return _.set(obj, `${feature.codename}`, {
          data: [post],
          name: feature.name,
        })
      } else {
        return _.set(obj, `${feature.codename}`, {
          data: [...obj[feature.codename].data, post],
          name: feature.name,
        })
      }
    })
    setItems(obj)
    return obj
  }
  useEffect(() => {
    splitFeatures(posts)
  }, [])
  useEffect(() => {
    splitFeatures(posts)
  }, [])
  return (
    <div className="my-7">
      <h2>Feature Description</h2>
      <div className="sm:block md:flex lg:flex lg:justify-between">
        <Select
          value={category}
          onChange={v => {
            setCategory(v)
            splitFeatures(
              filterArray(posts, {
                ...filters,
                category: cat => {
                  console.log(cat)
                  return v?.codename
                    ? cat &&
                        cat?.value?.[0]?.elements?.codename?.value ===
                          v.codename
                    : true
                },
              })
            )
          }}
          firstOption="categories"
          options={categories}
        />
        <div className="sm:block md:flex lg:flex">
          <Select
            value={feature}
            onChange={v => {
              setFeature(v)
              splitFeatures(
                filterArray(posts, {
                  ...filters,
                  feature: feat => {
                    console.log(feat)
                    return v?.codename
                      ? feat?.value?.[0]?.codename === v.codename
                      : true
                  },
                })
              )
            }}
            sm
            firstOption="upcoming"
            options={features}
          />
          <div className=" ml-[10px] flex items-center py-[12px] pr-[15px] pl-[18px] w-[263px] sm:w-[280px] border  rounded-[40px] ">
            <input
              type="text"
              placeholder="Search Feature"
              className=" w-[90%]"
              onChange={e => {
                let val = e.target.value
                setFilterInput(val)
                splitFeatures(
                  filterArray(posts, {
                    ...filters,
                    pagename: desc => {
                      return desc?.value
                        ?.toLowerCase()
                        ?.includes(val.toLowerCase())
                    },
                  })
                )
              }}
            />
            <button type="submit" title="Submit your search query.">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 19.6L16.5 15C17.5 13.7 18 12.2 18 10.5C18 6.4 14.6 3 10.5 3C6.4 3 3 6.4 3 10.5C3 14.6 6.4 18 10.5 18C12.2 18 13.8 17.4 15 16.5L19.5 21L21 19.6ZM10.5 16C7.5 16 5 13.5 5 10.5C5 7.5 7.5 5 10.5 5C13.5 5 16 7.5 16 10.5C16 13.5 13.5 16 10.5 16Z"
                  fill="var(--search-input-color)"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div id="indicators">
        <ul
          data-testid="tags"
          className="indicators pl-[8px] flex  items-center mx-6 my-4"
        >
          <li
            className={`tag text-xs badge ${
              !selectedTags.length
                ? "bg-tags-background border-transparent  text-tags-color"
                : " border-tags-color"
            }  mr-2 py-3 px-4 mb-0 cursor-pointer  hover:text-primary-hover hover:bg-tags-background `}
            role="select"
            xxx
            onClick={() => {
              setSelectedTags([])
              splitFeatures(
                filterArray(posts, {
                  ...filters,
                  tags: c => true,
                })
              )
            }}
          >
            All
          </li>
          {tags.map(tag => (
            <li
              key={tag.codename}
              className={`tag text-xs badge ${
                selectedTags.includes(tag.codename)
                  ? "bg-tags-background border-transparent  text-tags-color"
                  : " border-tags-color"
              }  mr-2 py-3 px-4 mb-0 cursor-pointer  hover:text-primary-hover hover:bg-tags-background`}
              onClick={() => {
                selectedTags.includes(tag.codename)
                  ? setSelectedTags([
                      ...selectedTags.filter(v => v !== tag.codename),
                    ])
                  : setSelectedTags(prev => [...prev, tag.codename])

                let arrTags = selectedTags.includes(tag.codename)
                  ? [...selectedTags.filter(v => v !== tag.codename)]
                  : [...selectedTags, tag.codename]
                console.log(arrTags)
                splitFeatures(
                  filterArray(posts, {
                    ...filters,
                    tags: tags =>
                      arrTags.length
                        ? tags.value.find(x => arrTags.includes(x?.codename))
                        : true,
                  })
                )
              }}
            >
              {tag.name}
            </li>
          ))}
        </ul>
      </div>
      {category?.body && (
        <LpRichTextElement
          body_content={category?.body.value}
          bodyfield={category?.body}
        />
      )}
      <div className="grid">
        {Object.keys(items).length > 0 ? (
          Object.keys(items).map(v => {
            let item = items[v]
            let rowTitle = item.name
            return (
              <div className="items-center justify-center">
                <h3 className="text-center my-4">{rowTitle}</h3>
                <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {item.data.map(post => (
                    <div className=" border ">
                      <Link
                        to={`/product-roadmap/${post.elements.permalink.value}`}
                      >
                        {console.log(post)}
                        {post?.elements?.image_upload?.value && (
                          <div className="">
                            <ImageElement
                              imgStyle={{ objectFit: `fill` }}
                              options={{
                                fit: "clip",
                              }}
                              className="mx-auto"
                              width={
                                post?.elements?.image_upload?.value?.[0].width
                                  ? post?.elements?.image_upload.value?.[0]
                                      .width
                                  : 400
                              }
                              height={
                                post?.elements?.image_upload.value?.[0].height
                                  ? post?.elements?.image_upload.value?.[0]
                                      .height
                                  : 600
                              }
                              backgroundColor="#bbbbbb"
                              alt={
                                post?.elements?.image_upload.value?.[0]
                                  .description
                                  ? post?.elements?.image_upload.value?.[0]
                                      .description
                                  : post?.elements?.image_upload.value?.[0].name
                              }
                              image={post?.elements?.image_upload.value?.[0]}
                            />
                          </div>
                        )}
                        <div className="p-[24px] pb-[0]">
                          <h4 className="text-primary text-lm mb-[0]">
                            {post?.elements?.pagename?.value}
                          </h4>
                          <p className="text-xs text-body-text font-Inter">
                            {
                              post?.elements?.category?.value?.[0]?.elements
                                ?.name?.value
                            }{" "}
                            \ {post?.elements?.feature.value?.[0]?.name}
                          </p>
                          <p className="text-sm text-body-text font-Inter">
                            {post?.elements?.feature_description?.value ||
                              `Allows bots to send private messages and pass conversation context or any consumer-provided information to agents for them to better support consumers after the conversations are transferred to agents."As an Agent, I want to see the summarized consumer details gathered by the Bot in a single overview .`}
                          </p>
                        </div>
                      </Link>
                      <div className="px-[24px] pb-[24px] flex flex-col">
                        {post?.elements?.early_access_date?.value && (
                          <button
                            className="text-xs text-primary border-none font-Inter mb-[4px]"
                            onClick={() => setAccessModal(true)}
                          >
                            Early Access:{" "}
                            {moment(
                              post?.elements?.early_access_date?.value
                            ).format("MMM YYYY")}
                          </button>
                        )}
                        <button
                          className="text-xs  border-none text-body-text font-Inter"
                          onClick={() => setLaunchModal(true)}
                        >
                          Planned Released:{" "}
                          {moment(post?.elements?.release_date?.value).format(
                            "MMM YYYY"
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })
        ) : (
          <div className="text-[var(--attnalert-color)]">
            No Roadmap matches your criteria
          </div>
        )}
      </div>
      <RemindLaunchModal setIsOpen={setLaunchModal} isOpen={launchModal} />
      <EarlyAccessModal setIsOpen={setAccessModal} isOpen={accessModal} />
    </div>
  )
}

export default RoadmapListing
