import MainForm from "../Form/mainForm";
const MaterialInfo = ({ item }) => {
  console.log("item in external is " +JSON.stringify(item.material))
  const result = item.material.map((item) => {
    return (
      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6" key={item.id}>
        <div className="decoration_content_material text-center">
          <img src={item.img} alt="#" />
          <h3>{item.id}</h3>
          <p>
            {item.price}$. sq.m.<span>with material</span>
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className={item.mainClass}>
      <div className="col-lg-3 col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2 no-padding">
        <div className="decoration_img">
          <img src={item.img} alt="Main internal Img" />
        </div>
      </div>
      <div className="col-lg-5 col-md-8 col-xs-12">
        <div className="row">{result}</div>
      </div>
      <div className="col-lg-4 col-lg-offset-0 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12"><MainForm classList={"decoration_form"} /></div>
      
    </div>
  );
};

export default MaterialInfo;
