const Decoration = ({ data }) => {
  const { selectedItemId, setSelectedItemId } = useState(data[0].id);
  return <View data={data} />;
};

const findDecorationDataById = (ids, dataArr) => {
  const Item = dataArr.find((item) => item.id === ids);
  if (!Item) {
    return console.log("items wasnt found in func findDataDataById ");
  }
  return Item;
};

const View = ({ data }) => {
  return (
    <section class="decoration">
      <div class="container">
        <div class="section_header">
          <h2>ЗАКАЖИТЕ ОТДЕЛКУ БАЛКОНА СО СКИДКОЙ 60%!</h2>
          <div class="section_header_sub"></div>
        </div>
        <Slider dataArr={data} setSelectedItemId={setSelectedItemId} />
      </div>
    </section>
  );
};

export default Decoration;
