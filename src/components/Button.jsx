import PropTypes from "prop-types"

const Button = (props) => {

  const { buttonText, count, setCartAmount  } = props;

  const handleAddToCart = () => {
    setCartAmount(prevCount => prevCount + count)
  }

  return (
    <div>
        <button className="flex justify-center items-center
         bg-black w-[272px] h-[56px] rounded-xl hover:opacity-70 text-white"
         onClick={handleAddToCart}>      
            <p className="font-bold text-white ml-2">{buttonText}</p>
        </button>
    </div>
  )
}

Button.propTypes = {
  buttonText: PropTypes.string,
  count: PropTypes.number,
  setCartAmount: PropTypes.func
};

export default Button