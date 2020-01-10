import React from "react"

// const SvgText = ({ text }) => {

//   let svgElm = React.createRef();
//   let textElm = React.createRef();



//   return (
//     <div>
//       <input type="text" ref={textInput} />

//       <input type="button" value="Focus the text input" onClick={handleClick} />
//     </div>
//   )
// }

class SvgText extends React.Component {
  constructor(props) {
    super(props)
    this.svgElm = React.createRef()
    this.textElm = React.createRef()
  }
  componentDidMount() {
    // get the bounding box for the text element
    const bbox = this.textElm.current.getBBox();

    // i think this is bc of the italic style?
    const fudge = 10;

    console.log(bbox)
    // set the svg width/height accordingly
    this.svgElm.current.setAttribute("width", Math.round(bbox.width + fudge))
    this.svgElm.current.setAttribute("height", Math.round(bbox.height + fudge))

    // set the viewbox accordingly
    this.svgElm.current.setAttribute(
      "viewBox",
      bbox.x +
        " " +
        bbox.y +
        " " +
        Math.round(bbox.width + fudge) +
        " " +
        Math.round(bbox.height + fudge)
    )
  }

  render() {
    return (
      <svg ref={this.svgElm} xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* <pattern
            id="textPattern"
            patternUnits="userSpaceOnUse"
            width="5"
            height="5"
          >
            <image
              //   xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1JyBoZWlnaHQ9JzUnPgogIDxyZWN0IHdpZHRoPSc1JyBoZWlnaHQ9JzUnIGZpbGw9J3doaXRlJy8+CiAgPHBhdGggZD0nTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVonIHN0cm9rZT0nIzg4OCcgc3Ryb2tlLXdpZHRoPScxJy8+Cjwvc3ZnPg=="
              xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSdibGFjaycvPgogIDxwYXRoIGQ9J00tMSwxIGwyLC0yCiAgICAgICAgICAgTTAsMTAgbDEwLC0xMAogICAgICAgICAgIE05LDExIGwyLC0yJyBzdHJva2U9J3doaXRlJyBzdHJva2Utd2lkdGg9JzEnLz4KPC9zdmc+"
              x="0"
              y="0"
              width="5"
              height="5"
            ></image>
          </pattern> */}
        </defs>
        <text
          ref={this.textElm}
          x="0"
          y="0"
          fontSize="80"
        //   fill="url(#textPattern)"
          fill="#fff"
          className="project-text"
        >
          {this.props.text}
        </text>
      </svg>
    )
  }
}

export default SvgText
