'user-strict';

const allSuppliers = [{
  user: {
    username: 'supplier1',
    email: 'supplier1@gmail.com',
    password: 'supplier1',
    role: 'supplier',
    category: 'footwear',
    photoUrl: 'https://www.fabric-brand.com/wp-content/uploads/2016/08/FBFACTORY020.jpg'
  },
  products: [{
    supplier: null,
    productName: "Air Max 270 - Women's",
    subComponents: [{
      subComponentName: 'Subcomponent1',
      subSupplierName: 'Subsupplier1',
      photoUrl: 'https://sneakerspaza.co.za/wp-content/uploads/2016/12/adidas-yeezy-boost-350-v2-steel-grey-beluga-solar-red.jpg'
    }, {
      subComponentName: 'Subcomponent2',
      subSupplierName: 'Subsupplier2',
      photoUrl: 'https://sneakerspaza.co.za/wp-content/uploads/2016/12/adidas-yeezy-boost-350-v2-steel-grey-beluga-solar-red.jpg'
    }, {
      subComponentName: 'Subcomponent3',
      subSupplierName: 'Subsupplier3',
      photoUrl: 'https://sneakerspaza.co.za/wp-content/uploads/2016/12/adidas-yeezy-boost-350-v2-steel-grey-beluga-solar-red.jpg'
    }, {
      subComponentName: 'Subcomponent4',
      subSupplierName: 'Subsupplier4',
      photoUrl: 'https://sneakerspaza.co.za/wp-content/uploads/2016/12/adidas-yeezy-boost-350-v2-steel-grey-beluga-solar-red.jpg'
    }, {
      subComponentName: 'Subcomponent5',
      subSupplierName: 'Subsupplier5',
      photoUrl: 'https://sneakerspaza.co.za/wp-content/uploads/2016/12/adidas-yeezy-boost-350-v2-steel-grey-beluga-solar-red.jpg'
    }, {
      subComponentName: 'Subcomponent6',
      subSupplierName: 'Subsupplier6',
      photoUrl: 'https://sneakerspaza.co.za/wp-content/uploads/2016/12/adidas-yeezy-boost-350-v2-steel-grey-beluga-solar-red.jpg'
    }]
  }]
}];

module.exports = allSuppliers;
