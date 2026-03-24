/**
 * Скрипт для корректной работы Swagger UI с темой Material (navigation.instant)
 */

// 1. Создаем функцию изменения высоты сразу в глобальной области
window.update_swagger_ui_iframe_height = function(id, height) {
    var iframe = document.getElementById(id);
    if (iframe) {
        // Добавляем 40px запаса, чтобы убрать возможную микро-прокрутку
        iframe.style.height = (parseInt(height) + 40) + "px";
    }
};

// 2. Подписываемся на события темы Material
// Этот блок кода будет срабатывать ПРИ КАЖДОМ клике в меню (мгновенная навигация)
if (typeof app !== "undefined") {
    app.document$.subscribe(function() {
        console.log("Material page changed, checking for Swagger...");
        
        // Гарантируем, что функция доступна в window родителя
        window.update_swagger_ui_iframe_height = window.update_swagger_ui_iframe_height;

        // Если на странице есть элементы swagger-ui-tag, 
        // имитируем событие загрузки, чтобы плагин "проснулся"
        const swaggers = document.querySelectorAll(".swagger-ui-tag");
        if (swaggers.length > 0) {
            setTimeout(function() {
                window.dispatchEvent(new Event('load'));
            }, 100);
        }
    });
}