import PropTypes from "prop-types"

const Link = (props) => {

    const { text } = props;

  return (
    <div>
        <a className="p-4 hover:underline underline-offset-[46px] decoration-orange decoration-4" href="">{text}</a>
    </div>
  )
}

Link.propTypes = {
    text: PropTypes.string,
  };
  

export default Link