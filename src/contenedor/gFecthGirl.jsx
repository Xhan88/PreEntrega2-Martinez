let objGirl = [
  {id: '1', name:'Carrito cargador de Niño', categoria: 'Juguetes para niño', stock: '30', precio: '$ 250', foto:"https://images-na.ssl-images-amazon.com/images/I/813jqye+32L._AC._SR360,460.jpg"},
  {id: '2', name:'Carrito para pasear', categoria: 'Juguetes para niño', stock: '30', precio: '$ 250', foto:"https://m.media-amazon.com/images/I/31NzVXnsbyS._SL500_.jpg"},
  
];

export const gFetchGirl = (id) => {
  return new Promise ( (resolve, reject)=> {
    const condition = true
    if(condition) {
      setTimeout(() => {
        resolve( objGirl )
      },1000)
    }else {
      reject('Error')
    }
  })
}