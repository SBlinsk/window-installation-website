import glazingData from "./glazingData";

const GlazingSlider = ({ setSelectedImageId }) => {
  const handleClick = (id) => {
    setSelectedImageId(id);
  };

  const slider = (arr) => {
    return arr.map((item) => (
      <div className="glazing_block text-center wow fadeInUp" key={item.id}>
        <img src={item.slideImg} alt="#" />
        <a className={item.linkClass} onClick={() => handleClick(item.id)}>
          {item.descr}
        </a>
      </div>
    ));
  };
  return <div className="glazing_slider">{slider(glazingData)}</div>;
};

export default GlazingSlider;
