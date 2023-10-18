import { useState,useEffect } from "react";
import DecorationSlider from "./DecorationSlider";
import MaterialInfo from "./MaterialInfo";

const Decoration = ({ data }) => {
  const [ selectedItemId, setSelectedItemId] = useState(data[0].id);
  const [item, setItem] = useState(findDecorationDataById(selectedItemId, data));

useEffect(()=>{
  setItem(findDecorationDataById(selectedItemId, data),[selectedItemId])
})
  return <View data={data} setSelectedItemId={setSelectedItemId} selectedItem={item} />;
};

const findDecorationDataById = (ids, dataArr) => {
  const Item = dataArr.find((item) => item.id === ids);
  if (!Item) {
    throw new Error("Item not found in findDecorationDataById");
  }
return Item;
};


const View = ({ data, selectedItem, setSelectedItemId }) => {
  return (
    <section className="decoration">
      <div className="container">
        <div className="section_header">
          <h2>ЗАКАЖИТЕ ОТДЕЛКУ БАЛКОНА СО СКИДКОЙ 60%!</h2>
          <div className="section_header_sub"></div>
        </div>
        <DecorationSlider dataArr={data} setSelectedItemId={setSelectedItemId} />
        <MaterialInfo item={selectedItem}/>
        
        <div className="decoration_content">
        
          <div className="row"></div>
          
        </div>
        
      </div>
    </section>
  );
};

export default Decoration;

