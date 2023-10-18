const DecorationSlider = ({ dataArr, setSelectedItemId }) => {
  const handleClick = (id) => {
    setSelectedItemId(id);
  };

  const slider = (arr) => {
    return arr.map((item) => (
      <div className="decoration_item  wow fadeInUp" key={item.id}>
        <div className="internal_link no_click after_click">
          <a onClick={() => handleClick(item.id)}>{item.id}</a>
        </div>
      </div>
    ));
  };
  
  return <div className="decoration_slider">{slider(dataArr)}</div>;
};

export default DecorationSlider;
