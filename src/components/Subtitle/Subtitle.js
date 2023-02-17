import "./Subtitle.scss";

// est exactement équivalent à
// text = props.text
function Subtitle({ text }) {
  return <h3 className="Subtitle">{text}</h3>;
}

export default Subtitle;
