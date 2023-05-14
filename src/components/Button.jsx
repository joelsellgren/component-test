import PropTypes from "prop-types"

const Button = (props) => {

  const { text, color, textColor } = props;

  return (
    <div>
        <button className={`flex justify-center items-center
        w-[272px] h-[56px] rounded-xl hover:opacity-70 ${textColor} ${color}`}
        >      
            <p className="font-bold ml-2">{text}</p>
        </button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
};

export default Button