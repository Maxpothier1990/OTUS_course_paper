/**
 * Исправляет ошибку: parent.update_swagger_ui_iframe_height is not a function
 */
window.update_swagger_ui_iframe_height = function(id, height) {
    var iframe = document.getElementById(id);
    if (iframe) {
        // Устанавливаем высоту + небольшой запас 40px, чтобы не было прокрутки
        iframe.style.height = (parseInt(height) + 40) + "px";
    }
};

// Интеграция с темой Material (поддержка мгновенной навигации)
if (typeof app !== "undefined") {
    app.document$.subscribe(function() {
        // Принудительно подтверждаем наличие функции при каждом переходе по сайту
        window.update_swagger_ui_iframe_height = window.update_swagger_ui_iframe_height;
    });
}