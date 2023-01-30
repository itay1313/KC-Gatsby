import React from "react"
import { connectHighlight } from "react-instantsearch-dom"
import parse from "html-react-parser"
const Highlight = ({ highlight, attribute, hit }) => {
  const parsedHitMain = highlight({
    highlightProperty: "_highlightResult",
    attribute,
    hit,
  })
  let parsedHit = parsedHitMain
  // console.log("parsedHit")
  let type = hit.type
  // console.log("parsedHit", parsedHit)
  if (parsedHit.length > 10) parsedHit = parsedHit.slice(0, 10)
  return (
    <p className="text-lm subtitle-search text-body-text">
      {parsedHit.map((part, index) => {
        if (Array.isArray(part)) {
          if (part.length) {
            let strippedHit = part[0].value
            strippedHit = strippedHit.replaceAll(/(<([^>]+)>)/gi, "")
            strippedHit = strippedHit.replaceAll("&nbsp;", " ")
            if (
              !part.isHighlighted &&
              strippedHit &&
              strippedHit.includes(".")
            ) {
              strippedHit = ` ${strippedHit.split(".").pop()}`
            }
            if (type === "release-notes") {
              return part[0].isHighlighted ? (
                <mark
                  className="ais-Highlight-highlighted font-bold"
                  key={index}
                >
                  {parse(strippedHit)}
                </mark>
              ) : (
                <span className="ais-Highlight-nonHighlighted " key={index}>
                  {parse(strippedHit)}
                </span>
              )
            } else {
              return part[0].isHighlighted ? (
                <mark
                  className="ais-Highlight-highlighted font-bold text-body-text"
                  key={index}
                >
                  {strippedHit}
                </mark>
              ) : (
                <span className="ais-Highlight-nonHighlighted " key={index}>
                  {strippedHit}
                </span>
              )
            }
          }
        } else {
          let strippedHit = part.value
          strippedHit = strippedHit.replaceAll(/(<([^>]+)>)/gi, "")
          strippedHit = strippedHit.replaceAll("&nbsp;", " ")

          if (!part.isHighlighted && strippedHit && strippedHit.includes(".")) {
            strippedHit = ` ${strippedHit.split(".").pop()}`
          }
          return part.isHighlighted ? (
            <mark
              className="ais-Highlight-highlighted font-bold text-body-text"
              key={index}
            >
              {strippedHit}
            </mark>
          ) : (
            <span className="ais-Highlight-nonHighlighted" key={index}>
              {strippedHit}
            </span>
          )
        }
        return null
      })}
    </p>
  )
}

const CustomHighlight = connectHighlight(Highlight)
export default CustomHighlight
