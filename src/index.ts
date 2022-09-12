// The Add commas function
const addCommas = (num: any) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Remove Non Numeric function
const removeNum = (num: any) => {
  return num.toString().replace(/[^0-9]/g, "");
};

module.exports = {
  // The convert section
  convert: function (num: number) {
    if (Math.abs(num) > 999.999 && Math.abs(num) < 999999.999) {
      return (Math.sign(num) * (Math.abs(num) / 1000)).toFixed() + "k";
    } else if (Math.abs(num) > 999999.999 && Math.abs(num) < 999999999.999) {
      return (Math.sign(num) * (Math.abs(num) / 1000000)).toFixed() + "M";
    } else if (
      Math.abs(num) > 999999999.999 &&
      Math.abs(num) < 999999999999.999
    ) {
      return (Math.sign(num) * (Math.abs(num) / 1000000000)).toFixed() + "B";
    } else if (Math.abs(num) > 999999999999.999) {
      return (Math.sign(num) * (Math.abs(num) / 1000000000000)).toFixed() + "T";
    } else {
      return Math.sign(num) * Math.abs(num);
    }
  },

  // The Strict add function
  strictAddComma: function (data: number | string) {
    return addCommas(removeNum(data));
  },

  // The Add Comma function
  addComma: function (num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  // The Remove Comma function
  removeComma: function (num: string) {
    return parseInt(num.toString().replace(/\,/g, ""));
  },

  // The Strict Remove function
  strictRemoveComma: function (num: string) {
    return parseInt(num.toString().replace(/[^0-9]/g, ""));
  },
};
