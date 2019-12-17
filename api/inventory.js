var request = require("request");

module.exports = (req, res) => {
  var options = {
    method: "GET",
    url: "https://api.greenbits.com/api/v2/inventory_items",
    qs: {
      // limit: "10",
      sellable: true,
      only_assigned: true
    },
    headers: {
      accept: "application/json, text/javascript, */*; q=0.01",
      origin: "https://secure.greenbits.com",
      host: "api.greenbits.com",
      authorization: 'Token token="5EYTXbRtQ7LGlReA6FSUFg"',
      "x-requested-with": "XMLHttpRequest",
      "x-gb-companyid": "1bdba944-1f28-40e8-8f6c-253d6bc6cb8f",
      "x-gb-client": "herer-web de0db43847"
    }
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);
    var products = JSON.parse(body);
    inventory = products.inventory_items;
    return res.status(200).send(inventory);
  });
  // const { name = "World" } = req.query;
  // res.status(200).send(`Hello ${name}!`);
};
