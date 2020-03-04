var filterForm = document.querySelector(".filter__form");
var inputInfrastructure = filterForm.querySelectorAll(".form__group--infrastructure .form__input");
var inputHouse = filterForm.querySelectorAll(".form__group--house .form__input");
var inputInfrastructureList = filterForm.querySelector(".form__group--infrastructure .form__list");
var inputHouseList = filterForm.querySelector(".form__group--house .form__list");

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

 if (!inputInfrastructureCounter == 1) {
   inputInfrastructureList.classList.remove("filter--error");
   inputInfrastructureList.offsetWidth = inputInfrastructureList.offsetWidth;
   inputInfrastructureList.classList.add("filter--error");
 }

 if (!inputHouseCounter == 1) {
   inputHouseList.classList.remove("filter--error");
   inputHouseList.offsetWidth = inputHouseList.offsetWidth;
   inputHouseList.classList.add("filter--error");
 }

 if (inputInfrastructureCounter && inputHouseCounter) {
   filterForm.submit();
 }
});
