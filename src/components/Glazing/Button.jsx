const Button = ({onClick, children}) => {
  return (
    <button className="button glazing_price_btn text-uppercase popup_calc_btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
