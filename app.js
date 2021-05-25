//Дэлгэцтэй ажиллах controller.
var uiController = (function () {})();

//Санхүүтэй ажиллах controller.
var financeController = (function () {})();

//Програмын холбогч controller.
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    //"click" хийгдсэнээр юу хийх вэ?
    //1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    //2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж, тэнд хадгална.
    //3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана.
    //4. Төсвийг тооцоолно.
    //5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
