// The Add commas function
const addCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Remove Non Numeric function
const removeNum = (num) => {
  return num.toString().replace(/[^0-9]/g, '');
};

module.exports = {
  // The convert section
  convert: function (num) {
    if (Math.abs(num) > 999.999 && Math.abs(num) < 999999.999) {
      return Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k';
    } else if (Math.abs(num) > 999999.999 && Math.abs(num) < 999999999.999) {
      return Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + 'M';
    } else if (
      Math.abs(num) > 999999999.999 &&
      Math.abs(num) < 999999999999.999
    ) {
      return Math.sign(num) * (Math.abs(num) / 1000000000).toFixed(1) + 'B';
    } else if (Math.abs(num) > 999999999999.999) {
      return Math.sign(num) * (Math.abs(num) / 1000000000000).toFixed(1) + 'T';
    } else {
      return Math.sign(num) * Math.abs(num);
    }
  },

  addComma: function (data) {
    return addCommas(removeNum(data));
  },

  // The Remove function
  removeComma: function (num) {
    return num.toString().replace(/[^0-9]/g, '');
  },
};
