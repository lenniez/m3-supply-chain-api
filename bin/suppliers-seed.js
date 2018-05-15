'user-strict';

const allSuppliers = [{
  user: {
    username: 'SSIPL RETAIL',
    email: 'supplier1@gmail.com',
    password: 'SSIPL',
    role: 'supplier',
    category: 'footwear',
    photoUrl: 'https://www.fabric-brand.com/wp-content/uploads/2016/08/FBFACTORY020.jpg'
  },
  products: [{
    name: "Air Max 270 - Women's",
    photoUrl: 'https://image.ibb.co/dT4cFd/airmax270.png',
    supplier: null,
    subComponents: [{
      subComponentName: 'Rubber',
      subSupplierName: 'Prathiba Syntex Ltd',
      photoUrl: 'https://image.ibb.co/mdWEbJ/rubber.png'
    }, {
      subComponentName: 'Eva foam',
      subSupplierName: 'Ashkaya Sportwear Ltd',
      photoUrl: 'https://image.ibb.co/hhjEAd/eva_foam.png'
    }, {
      subComponentName: 'Leather',
      subSupplierName: 'Elta Company Ltd',
      photoUrl: 'https://image.ibb.co/hmN1qd/leather.png'
    }, {
      subComponentName: 'Polyester',
      subSupplierName: 'Vega Ltd',
      photoUrl: 'https://image.ibb.co/keH1qd/polyester.png'
    }, {
      subComponentName: 'Cotton',
      subSupplierName: 'Future Garment Ltd',
      photoUrl: 'https://image.ibb.co/ebTViy/cotton.png'
    }, {
      subComponentName: 'Synthetic leather',
      subSupplierName: 'Nan Yang Co. Ltd',
      photoUrl: 'https://image.ibb.co/eTPEAd/synthetic_leather.png'
    }]
  }]
}];

module.exports = allSuppliers;
