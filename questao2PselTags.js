var products_list = [
  {
    "id": "35",
    "name": "Miniatura Homem de Ferro",
    "price": "50.00"
  },
  {
    "id": "30",
    "name": "Miniatura Magneto",
    "price": "R$ 57.00"
  },{
    "id": "25",
    "name": "Miniatura Super Homem",
    "price": "R$ 37.00"
  },{
    "id": "71",
    "name": "Miniatura Bernard",
    "price": "R$ 71.00"
  },{
    "id": "56",
    "name": "Miniatura Batman",
    "price": "R$ 23.00"
  },
  {
    "id": "56",
    "name": "Miniatura Darth Vader",
    "price": "R$ 89.00"
  }];



  //Função que corrige os números que possuem valor string, para number
function corrigirPrecos(i) {

  for(var element in i) {
      var priceErr = i[element].price;
      priceErr = i[element].price.replaceAll('R$ ', '');
      priceErr = parseFloat(priceErr);

      i[element].price = priceErr ;
  }
  return i;
 
}

var new_products_list = corrigirPrecos(products_list);