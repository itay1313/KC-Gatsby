import { Link } from "gatsby"
import React from "react"
import { LearnMoreIcon } from "../icons/home"

const CardBg = ({ title, desc, link, homeimg }) => {
  return (
    <Link
      to={link}
      style={{
        background: `var(--card-bg-background),url(${homeimg})`,
        backgroundSize: "cover",
      }}
      className="border card-bg border-card-border compact side w-full flex-grow bg-no-repeat bg-cover object-cover"
    >
      <div className="flex-row items-center space-x-4 card-body">
        <div className="flex-1">
          <div className="lp mb-4">
            <LearnMoreIcon />
          </div>
          <h2 className="card-title text-body-text-invert">{title}</h2>
          <p className="text-body-text-invert">{desc}</p>
        </div>
      </div>
    </Link>
  )
}
export default CardBg
