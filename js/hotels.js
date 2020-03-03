var filterForm = document.querySelector(".filter__form");
var inputInfrastructure = filterForm.querySelectorAll(".form__group--infrastructure .form__input");
var inputHouse = filterForm.querySelectorAll(".form__group--house .form__input");
var filterList = filterForm.querySelectorAll(".form__list");

filterForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var inputInfrastructureCounter = 0;
  var inputHouseCounter = 0;
  for (var i = 0; i < inputInfrastructure.length; i++) {
   if (inputInfrastructure.item(i).checked) {
      inputInfrastructureCounter = 1;
   }

   if (inputHouse.item(i).checked) {
     inputHouseCounter = 1;
   }
 }

 if (inputInfrastructureCounter && inputHouseCounter) {
   filterForm.submit();
 }
});
