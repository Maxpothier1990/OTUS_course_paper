// Проверяем, существует ли функция. Если нет — создаем пустую заглушку.
// Это предотвратит ошибку Uncaught TypeError при первой загрузке.
function ensureSwaggerFunction() {
    if (typeof window.update_swagger_ui_iframe_height !== 'function') {
        window.update_swagger_ui_iframe_height = function(id, height) {
            var iframe = document.getElementById(id);
            if (iframe) {
                iframe.style.height = height + 'px';
            }
        };
    }
}

// Выполняем при первой загрузке
ensureSwaggerFunction();

// Выполняем при каждом переходе (совместимость с navigation.instant)
document.addEventListener("DOMContentSwitch", function() {
    ensureSwaggerFunction();
});