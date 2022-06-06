var cart_products = [{
    'product_id': 'IN2350',
    'product_name': 'Teclado Mecânico Rozar K600',
    'product_price': '650.00',
    'product_quantity': '1',
    'product_url': 'http://www.foo.com/p/IN2350',
    'product_category': 'peripherals',
    'product_brand': 'Rozar'
}, {
    'product_id': 'IN4566',
    'product_name': 'Monitor Gamer LED GL UltraWide 25"',
    'product_price': '1399.99',
    'product_quantity': '1',
    'product_url': 'http://www.foo.com/p/IN4566',
    'product_category': 'monitor',
    'product_brand': 'GL'
}, {
    'product_id': 'ES7112',
    'product_name': 'Pacote de Post-it Fenix 50 unidades',
    'product_price': '14.95',
    'product_quantity': '5',
    'product_url': 'http://www.foo.com/p/ES7112',
    'product_category': 'office',
    'product_brand': 'Fenix'
}, {
    'product_id': 'BR8810',
    'product_name': 'Miniatura Yoshi Haras',
    'product_price': '6.50',
    'product_quantity': '2',
    'product_url': 'http://www.foo.com/p/BR8810',
    'product_category': 'others',
    'product_brand': 'Haras'
}];

//Função para somar o valor final do carrinho
function somarItens(i) {
    for(var element in i) {
        var priceErr = i[element].product_price;
        priceErr = parseFloat(priceErr);
  
        i[element].product_price = priceErr ;
    }
    var soma = i.reduce((a, b) => a + b.product_price, 0);
    return soma;
}

//Função para validar se o frete grátis está incluso ou não
function validaFrete(i)
{
    var frete;
    if (i > 300)
    {
        frete = true;
    }
    else
    {
        frete = false;
    }
    return frete;
}

var cartPricesInfo = {totalPrice: somarItens(cart_products), freeShipping: validaFrete(somarItens(cart_products))}

