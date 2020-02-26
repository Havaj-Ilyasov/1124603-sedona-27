ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [34.870632, -111.760575],
    zoom: 14,
    controls: ['zoomControl']
  }, {
    searchControlProvider: 'yandex#search'
  })
  // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  )
  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Адрес интернет-магазина "Мишка" на карте',
    balloonContent: 'г. Санкт-Петербург, ул. Большая Конюшеная, д. 19.8, офис 101'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: '../img/icon-map-pin.svg',
    // Размеры метки.
    iconImageSize: [67, 100],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38]
  })
  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects
    .add(myPlacemark);
});
