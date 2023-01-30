import React from "react"
import { graphql } from "gatsby"

import { RichTextElement } from "@kentico/gatsby-kontent-components"
import CardBg from "../components/widgets/CardBg"
import CardIcon from "../components/widgets/CardIcon"
import Footer from "../components/Footer"
import CardLatestPosts from "../components/widgets/CardLatestPosts"

const HomePage = ({ data }) => {
  const kontentItemHomepage = data?.kontentItemHomepage
  const titleHomepage = kontentItemHomepage?.elements?.title?.value
  const bodyTextHomepage = kontentItemHomepage?.elements?.body?.value
  const allWhatsnewPage = data?.allWhatsnewPage
  const allReleaseNotesPage = data?.allReleaseNotesPage

  return (
    <>
      <div className="flex flex-col">
        <h1 data-kontent-element-codename="title" className="text-title-text">
          {titleHomepage}
        </h1>
        <div className="text-body-text mobile:pr-8" style={{ marginBottom: 0 }}>
          <RichTextElement value={bodyTextHomepage} />
        </div>
      </div>
      <div className="flex items-start ipad:flex-col mobile:flex-col justify-between mobile:items-center mt-8 gap-8 mb-8">
        <div className="flex flex-col justify-between gap-8 w-full">
          <CardBg
            // Getting Started
            title={kontentItemHomepage?.elements?.box_title_1?.value}
            link={kontentItemHomepage?.elements?.link_1?.value}
            icon="LearnMoreIcon"
            desc={kontentItemHomepage?.elements?.box_description_1?.value}
            homeimg={kontentItemHomepage?.elements?.image?.value[0]?.url}
          />
          <CardIcon
            // Messaging
            link={kontentItemHomepage?.elements?.link_2?.value}
            icon="MessagingIcon"
            title={kontentItemHomepage?.elements?.box_title_2?.value}
            desc={kontentItemHomepage?.elements?.box_description_2?.value}
          />
          <CardIcon
            // Developer Center
            link={kontentItemHomepage?.elements?.link_5?.value}
            icon="ExploreIcon"
            title={kontentItemHomepage?.elements?.box_title_5?.value}
            desc={kontentItemHomepage?.elements?.box_description_5?.value}
          />
          <CardIcon
            // customer support
            link={kontentItemHomepage?.elements?.link_6?.value}
            icon="CustomerSupport"
            title={kontentItemHomepage?.elements?.box_title_6?.value}
            desc={kontentItemHomepage?.elements?.box_description_6?.value}
          />
        </div>
        <div className="flex flex-col justify-between gap-8 w-full">
          <CardLatestPosts
            // What's new
            icon="WhatsNewIcon"
            title={kontentItemHomepage?.elements?.box_title_3?.value}
            alltype={allWhatsnewPage}
            link="/whats-new"
          />
          <CardLatestPosts
            // Release notes
            icon="ReleaseNotesIcon"
            title={kontentItemHomepage?.elements?.box_title_4?.value}
            alltype={allReleaseNotesPage}
            link="/release-notes"
          />
        </div>
      </div>

      {/* <div
        className="my-8 md:card-side"
        style={{
          background: `url(${kontentItemHomepage?.elements?.cta_image?.value[0]?.url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="card-body flex-row justify-between ipad:flex-col ipad:items-center ipad:text-center">
          <div className="flex flex-col">
            <h3
              style={{ marginTop: "0" }}
              className="card-title text-button-text"
            >
              {kontentItemHomepage?.elements?.cta_title?.value}
            </h3>
            <div className="text-button-text text-opacity-40">
              {kontentItemHomepage?.elements?.cta_perk_1?.value}
            </div>
          </div>
          <div className="flex items-center mobile:mt-4">
            <a
              aria-label="Developer Center link"
              rel="noreferrer"
              target="_blank"
              href="https://developers.liveperson.com/register.html"
            >
              <Button btnText="Start Free Trial" />
            </a>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  )
}

export default HomePage

export const query = graphql`
  {
    kontentItemHomepage {
      elements {
        title {
          value
        }
        body {
          value
        }
        box_description_1 {
          value
        }
        box_description_2 {
          value
        }
        box_description_5 {
          value
        }
        box_description_6 {
          value
        }
        box_title_1 {
          value
        }
        box_title_2 {
          value
        }
        box_title_3 {
          value
        }
        box_title_4 {
          value
        }
        box_title_5 {
          value
        }
        box_title_6 {
          value
        }
        cta_perk_1 {
          value
        }
        cta_perk_2 {
          value
        }
        cta_title {
          value
        }
        image {
          value {
            url
          }
        }
        link_1 {
          value
        }
        link_2 {
          value
        }
        link_5 {
          value
        }
        link_6 {
          value
        }
        cta_image {
          value {
            url
          }
        }
      }
    }
    allWhatsnewPage: allKontentItemPostWhatsnew(
      sort: { order: DESC, fields: elements___date___value }
      limit: 2
    ) {
      nodes {
        elements {
          date {
            value
          }
          pagename {
            value
          }
          permalink {
            value
          }
          subtitle {
            value
          }
        }
        system {
          type
          id
        }
        id
      }
    }
    allReleaseNotesPage: allKontentItemReleaseNotesPage(
      sort: { order: DESC, fields: elements___date___value }
      limit: 2
    ) {
      nodes {
        elements {
          date {
            value
          }
          pagename {
            value
          }
          permalink {
            value
          }
          subtitle {
            value
          }
        }
        system {
          type
          id
        }
        id
      }
    }
  }
`
