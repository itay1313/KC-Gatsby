import { Link } from "gatsby"
import React from "react"
import { CustomerSupport, MessagingIcon, ExploreIcon } from "../icons/home"

const CardIcon = ({ icon, title, desc, link }) => {
  if (link === "https://developers.liveperson.com") {
    return (
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        className="border border-card-border transition-shadow compact side bg-card-background w-full flex-grow"
      >
        <div className="flex-row items-center space-x-4 card-body">
          <div className="flex-1">
            <div className="lp mb-4">
              {(() => {
                switch (icon) {
                  case "MessagingIcon":
                    return <MessagingIcon />
                  case "ExploreIcon":
                    return <ExploreIcon />
                  case "CustomerSupport":
                    return <CustomerSupport />

                  default:
                    return "-"
                }
              })()}
            </div>
            <h2 className="card-title text-body-text">{title}</h2>
            <p className="text-body-text">{desc}</p>
          </div>
        </div>
      </a>
    )
  } else {
    return (
      <Link
        to={link}
        className="border border-card-border transition-shadow compact side bg-card-background w-full flex-grow"
      >
        <div className="flex-row items-center space-x-4 card-body">
          <div className="flex-1">
            <div className="lp mb-4">
              {(() => {
                switch (icon) {
                  case "MessagingIcon":
                    return <MessagingIcon />
                  case "ExploreIcon":
                    return <ExploreIcon />
                  case "CustomerSupport":
                    return <CustomerSupport />

                  default:
                    return "-"
                }
              })()}
            </div>
            <h2 className="card-title text-body-text">{title}</h2>
            <p className="text-body-text">{desc}</p>
          </div>
        </div>
      </Link>
    )
  }
}
export default CardIcon
