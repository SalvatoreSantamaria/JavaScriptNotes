isBasketGiftcardOnly({ component }) {
  if (component?.mainBasket?.items?.length > 0) { //here
/*
    samz-gopuff 30 minutes ago Author
    Oh, this is checking if component, component.mainBasket, componet.mainBasket.items are undefined. 
    It is equal to if (component && component.mainBasket && componet.mainBasket.items && componet.mainBasket.items.length >0), 
    just in a short way
    
     
    @kbanashek kbanashek 17 minutes ago 
    @SalvatoreSantamaria its shorthand check to ensure the property exists,
    as opposed to possibly attempting to perform a comparison on an undefined property/object
*/

//it's called optional chaining. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining