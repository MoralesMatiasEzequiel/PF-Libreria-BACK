const mercadopago = require('mercadopago');

const getCreateOrderCtrls = async () => {
    mercadopago.configure({
        access_token: "TEST-5116269963303137-062117-3441827cf5cacf1bd57172be7f8d5ede-1404349325"
    });

    const result = await mercadopago.preferences.create({ //Aquí creamos una orden de compra
        items: [{ //Esto es un arreglo de los productos que quiero cobrar.
            title: "Laptop",
            unit_price: 500,  //Precio del prodcuto.
            currency_id: "ARS", //ID de la moneda.
            quantity: 1  //Unidad del producto.
        }  

        ],
        back_urls: { //Aquí especificamos hacía dónde queremos enviar una respuesta.
            success: "http://localhost:3000/mercadopago/success",
            failure: "http://localhost:3000/mercadopago/failure",
            pending: "http://localhost:3000/mercadopago/pending",
        },
        notification_url: "http://localhost:3000/mercadopago/webhook",  //Aquí se notifica cuando el pago ya este hecho.  
    })
    // console.log(result);
    return result;
};

module.exports = getCreateOrderCtrls;