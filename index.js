var customerName = 'bob'
const leastFavoriteCustomer = 'sour fred'

function upperCaseCustomerName() {
   customerName = customerName.toUpperCase()
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'sour fred'
}

function setBestCustomer(){
  bestCustomer = 'not bob'
}

function overWriteBestCustomer(newFavorite){
  bestCustomer = "maybe bob"
}

function attemptTwoFavoriteCustomers(){
  const favoriteCustomer = "bob";
  const favoriteCustomer = "joe";
};
