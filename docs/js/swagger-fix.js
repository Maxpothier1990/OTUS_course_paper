// Проверяем, существует ли функция. Если нет — создаем пустую заглушку.
// Это предотвратит ошибку Uncaught TypeError при первой загрузке.
if (typeof window.update_swagger_ui_iframe_height !== 'function') {
    window.update_swagger_ui_iframe_height = function(id, height) {
        var iframe = document.getElementById(id);
        if (iframe) {
            iframe.style.height = height + 'px';
        }
    };
}