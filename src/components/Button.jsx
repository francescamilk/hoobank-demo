// eslint-disable-next-line react/prop-types
const Button = ({ styles }) => {
  return (
    <div>
      <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
        Get Started
      </button>
    </div>
  )
}

export default Button
