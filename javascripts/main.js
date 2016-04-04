console.log('This would be the main JS file.');

//BOM samples
function showAgent() {
    alert(navigator.userAgent);
}

function showHref() {
    alert(location.href);
}

function setupMessageButton(title, body) {
  // создать
  var messageElem = createMessage(title, body)
  // позиционировать
  positionMessage(messageElem)
  // добавить обработчик на закрытие
  addCloseOnClick(messageElem)
  // вставить в документ
  document.body.appendChild(messageElem)
}
