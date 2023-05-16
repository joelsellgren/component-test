import PropTypes from "prop-types"

const Link = (props) => {

    const { text, link } = props;

  return (
    <div>
        <a className="p-4 hover:underline underline-offset-[46px]
        decoration-orange decoration-4" href={link}>{text}</a>
    </div>
  )
}

Link.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string
  };
  

export default Link