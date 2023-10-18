
const GlazingSlider = ({ setSelectedImageId, data }) => {
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
  return <div className="glazing_slider">{slider(data)}</div>;
};

export default GlazingSlider;
