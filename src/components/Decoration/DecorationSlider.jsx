const DecorationSlider = ({ dataArr, setSelectedItemId }) => {
  const handleClick = (id) => {
    setSelectedItemId(id);
  };

  const slider = (arr) => {
    return arr.map((item) => (
        <div class="decoration_item  wow fadeInUp" key={item.id}>
        <div class="internal_link no_click after_click"><a onClick={handleClick(key)}>{key}</a></div>
      </div>
    ));
  };
  return <div className="decoration_slider">{slider(dataArr)}</div>;
};

export default DecorationSlider;
