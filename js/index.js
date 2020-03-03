var searchForm = document.querySelector(".search__form");
var search__btn = document.querySelector(".search__button");
var inputFirst = searchForm.querySelector(".search__group--check-in .search__input");
var input = searchForm.querySelectorAll(".search__input");
var adultsAmount = searchForm.querySelector(".search__input-adults");
var childrenAmount = searchForm.querySelector(".search__input-children");

var isStorageSupport = true;
var storageAdults = "";

try {
  storageAdults = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}

adultsAmount.value = localStorage.getItem("adults");
childrenAmount.value = localStorage.getItem("children");

function displayNone() {
  searchForm.classList.add("display-none");
};

searchForm.classList.add("display-none");

search__btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.remove("display-none");
  if (searchForm.classList.contains("search__form--show")) {
    searchForm.classList.remove("search__form--show");
    searchForm.classList.add("search__form--hidden");
    setTimeout(displayNone, 1000);
  } else if (searchForm.classList.contains("search__form--hidden")) {
      searchForm.classList.remove("search__form--hidden");
      searchForm.classList.remove("displayNone");
      searchForm.classList.add("search__form--show");
    } else {
      searchForm.classList.add("search__form--show");
    }
  searchForm.classList.remove("search__form--error");
  inputFirst.focus();
  });

searchForm.addEventListener("submit", function (evt) {
  for (var i = 0; i < input.length; i++) {
    if (!input.item(i).value) {
      evt.preventDefault();
      searchForm.classList.remove("search__form--error");
      searchForm.offsetWidth = searchForm.offsetWidth;
      searchForm.classList.add("search__form--error");
    } else {
      localStorage.setItem("adults", adultsAmount.value);
      localStorage.setItem("children", childrenAmount.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchForm.classList.contains("search__form--show")) {
      evt.preventDefault();
      searchForm.classList.remove("search__form--show");
      searchForm.classList.remove("search__form--error");
      searchForm.classList.add("search__form--hidden");
      setTimeout(displayNone, 1000);
    }
  }
});
