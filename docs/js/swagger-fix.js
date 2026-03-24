// 1. Объявляем функцию сразу в глобальном объекте window
window.update_swagger_ui_iframe_height = window.update_swagger_ui_iframe_height || function(id, height) {
    var iframe = document.getElementById(id);
    if (iframe) {
        iframe.style.height = height + 'px';
    }
};

// 2. Интеграция специально для Material for MkDocs (navigation.instant)
// Используем наблюдатель за изменением контента страницы
if (typeof app !== "undefined") {
    app.document$.subscribe(function() {
        // Каждый раз, когда Material меняет страницу:
        if (typeof window.update_swagger_ui_iframe_height !== 'function') {
            window.update_swagger_ui_iframe_height = function(id, height) {
                var iframe = document.getElementById(id);
                if (iframe) {
                    iframe.style.height = height + 'px';
                }
            };
        }
    });
}

// 3. Запасной вариант на случай обычного события
document.addEventListener("DOMContentSwitch", function() {
    console.log("Material page switched"); // Проверьте это в консоли F12
    if (typeof window.update_swagger_ui_iframe_height !== 'function') {
        // Повторяем объявление
        window.update_swagger_ui_iframe_height = function(id, height) {
            var iframe = document.getElementById(id);
            if (iframe) iframe.style.height = height + 'px';
        };
    }
});