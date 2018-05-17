'user-strict';

const allSuppliers = [{
  user: {
    username: 'LZ RETAIL',
    email: 'supplier1@gmail.com',
    password: 'LZ RETAIL',
    role: 'supplier',
    category: 'footwear',
    photoUrl: 'https://www.fabric-brand.com/wp-content/uploads/2016/08/FBFACTORY020.jpg'
  },
  products: [{
    name: 'Air Max 270',
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
  }, {
    name: 'Air Zoom Vomero',
    photoUrl: 'https://image.ibb.co/eBxA3y/vomero.png',
    supplier: null
  }, {
    name: 'Free RN Flyknit',
    photoUrl: 'https://image.ibb.co/bHeq3y/free_rn.png',
    supplier: null
  }]
}];

module.exports = allSuppliers;
