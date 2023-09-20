const Button = ({onClick}) => {
  return (
    <button className="button glazing_price_btn text-uppercase popup_calc_btn" onClick={onClick}>
      Рассчитать стоимость
    </button>
  );
};

export default Button;
