const categoryColor = (category) => {
  switch (category) {
    case "Short Fiction":
      {
        return { backgroundColor: "FireBrick", maxHeight: 75 };
      }
      break;
    case "Essay":
      {
        return { backgroundColor: "ForestGreen", maxHeight: 75 };
      }
      break;
    case "Screen Play":
      {
        return { backgroundColor: "DarkOrange", maxHeight: 75 };
      }
      break;
    case "Poetry": {
      return { backgroundColor: "MediumSlateBlue", maxHeight: 75 };
      break;
    }
  }
};

export default categoryColor;
