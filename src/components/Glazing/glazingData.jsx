const glazingData = [
    {
      id: "wood",
      slideImg: "src/assets/img/glazing/icons/1.png",
      linkClass: "tree_link",
      descr: "Деревянное остекление",
      info: {
        // Данные холодного остекления
        cold: {
          constructionThickness: "42-58 мм",
          glazing: "полированное стекло (толщиной 4 - 5 мм)",
          thermalInsulation: "0,07 м^2 * С/Вт",
          soundInsulation: "20-27 дБ",
          price: 120,
          img: "src/assets/img/glazing/img_cold.png",
        },
        // Данные теплого остекления
        warm: {
          constructionThickness: "58-78 мм",
          glazing: "однокамерные и двухкамерные стеклопакеты",
          thermalInsulation: "0,63 - 1,05 м^2 * С/Вт",
          soundInsulation: "до 5 класса",
          price: 130,
          img:"src/assets/img/glazing/img_warm.png",
        },
      },
    },
    {
      id: "Aluminium",
      slideImg: "src/assets/img/glazing/icons/2.png",
      linkClass: "aluminum_link",
      descr: "Алюминиевое остекление",
      info: {
        // Данные холодного остекления
        cold: {
          constructionThickness: "40-50 мм",
          glazing: "полированное стекло (толщиной 4 - 5 мм)",
          thermalInsulation: "0,07 м^2 * С/Вт",
          soundInsulation: "20-27 дБ",
          price: "4000 руб.кв.м.",
          img:"src/assets/img/glazing/aluminum/cold.jpg",
        },
        // Данные теплого остекления
        warm: {
          constructionThickness: "60-68 мм",
          glazing: "однокамерные и двухкамерные стеклопакеты",
          thermalInsulation: "0,63 - 1,05 м^2 * С/Вт",
          soundInsulation: "до 5 класса",
          price: "8000 руб.кв.м.",
          img:"src/assets/img/glazing/aluminum/warm.jpg",
        },
      },
    },
  ];
  
  export default glazingData;
  