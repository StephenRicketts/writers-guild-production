const categoryTextColor = (category) => {
  switch (category) {
    case "Short Fiction":
      {
        return { color: "FireBrick" };
      }
      break;
    case "Essay":
      {
        return { color: "ForestGreen" };
      }
      break;
    case "Screen Play":
      {
        return { color: "BlueViolet" };
      }
      break;
    case "Poetry": {
      return { color: "MediumSlateBlue" };
      break;
    }
    default: {
      return { color: "Yellow" };
    }
  }
};

export default categoryTextColor;
