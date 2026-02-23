# Информационная модель

## Модель предметной области

В рамках MVP проекта были выделены основные сущности с атрибутами и определены связи между ними.

Базовыми сущностями являются:

- клиент
- заказ
- товар
- бонусная система
- меню
- комбобургер
- товар
- ингредиент
- корзина
- оплата

![](out/class_diagram.svg)

## Модель данных

![](out/db_design.svg)

| Микросервис | Класс | Атрибуты (с типами) | Описание класса |
|:---|:---|:---|:---|
| **Сервис авторизации** | `Клиент` | `id: UUID`<br>`phoneNumber: String`<br>`passwordHash: String`<br>`createdAt: DateTime`<br>`lastLogin: DateTime`<br>`isActive: Boolean`<br>`role: String` | Учётная запись пользователя (покупателя). Содержит данные для аутентификации и роли. |
| **Сервис меню** | `Меню` | `id: UUID`<br>`name: String`<br>`description: String`<br>`isActive: Boolean`<br>`validFrom: DateTime`<br>`validTo: DateTime` | Совокупность категорий и товаров, действующая в определённый период (например, сезонное меню). |
| | `КатегорияТовара` | `id: UUID`<br>`name: String`<br>`parentCategory: UUID`<br>`sortOrder: Integer` | Группировка товаров (бургеры, напитки, гарниры). Поддерживает вложенность. |
| | `Товар` | `id: UUID`<br>`name: String`<br>`description: String`<br>`price: Decimal`<br>`photoUrl: String`<br>`isAvailable: Boolean`<br>`categoryId: UUID`<br>`recipeId: UUID` | Готовая позиция, доступная для заказа. Может быть простым блюдом или комбобургером (тогда `recipeId` указывает на рецепт комбо). |
| | `Ингредиент` | `id: UUID`<br>`name: String`<br>`proteins: Float`<br>`fats: Float`<br>`carbs: Float`<br>`calories: Integer`<br>`cost: Decimal`<br>`sortOrder: Integer`<br>`category: String`<br>`markupCoefficient: Float` | Составная часть блюда (булочка, котлета, соус). Хранит пищевую ценность и себестоимость. |
| | `Комбобургер` | `id: UUID`<br>`description: String`<br>`basePrice: Decimal`<br>`markup: Decimal`<br>`calories: Integer`<br>`protein: Float`<br>`fat: Float`<br>`carbs: Float`<br>`photoUrl: String` | Специальный тип товара, собранный из ингредиентов. Является наследником (или частью) товара. |
| | `Рецепт` | `id: UUID`<br>`productId: UUID`<br>`ingredientId: UUID`<br>`quantity: Integer`<br>`unit: String` | Связующая таблица: указывает, какие ингредиенты и в каком количестве входят в состав товара или комбобургера. |
| **Сервис заказов** | `Корзина` | `id: UUID`<br>`clientId: UUID`<br>`createdAt: DateTime`<br>`updatedAt: DateTime`<br>`status: String` | Временная корзина покупателя, в которой накапливаются товары до оформления заказа. |
| | `ПозицияКорзины` | `id: UUID`<br>`cartId: UUID`<br>`productId: UUID`<br>`quantity: Integer`<br>`priceAtAddition: Decimal` | Отдельная позиция (товар) в корзине с ценой на момент добавления. |
| | `Заказ` | `id: UUID`<br>`clientId: UUID`<br>`cartId: UUID`<br>`orderNumber: String`<br>`createdAt: DateTime`<br>`status: String`<br>`pickupMethod: String`<br>`pickupTime: DateTime`<br>`totalAmount: Decimal`<br>`bonusUsed: Integer`<br>`deliveryId: UUID` | Оформленный заказ. Содержит основную информацию о клиенте, сумме, способе получения и статусе. |
| | `СтатусЗаказа` | `id: UUID`<br>`orderId: UUID`<br>`status: String`<br>`changedAt: DateTime`<br>`comment: String` | Журнал изменения статусов заказа (история). |
| **Сервис оплаты** | `Оплата` | `id: UUID`<br>`orderId: UUID`<br>`paymentMethod: String`<br>`cardToken: String`<br>`amount: Decimal`<br>`status: String`<br>`transactionId: String`<br>`fiscalId: String`<br>`paidAt: DateTime` | Транзакция оплаты по заказу. Может быть проведена разными способами (карта, наличные, бонусы). |
| | `Чек` | `id: UUID`<br>`paymentId: UUID`<br>`fiscalNumber: String`<br>`fiscalDocument: String`<br>`fiscalSign: String`<br>`ofdUrl: String`<br>`createdAt: DateTime` | Фискальный чек, сформированный после оплаты в соответствии с 54-ФЗ. |
| **Бонусная система** | `БонусныйСчет` | `id: UUID`<br>`clientId: UUID`<br>`balance: Integer`<br>`lifetimePoints: Integer`<br>`tier: String`<br>`updatedAt: DateTime` | Бонусный счёт клиента, хранит текущий баланс, уровень лояльности и общее количество накопленных баллов. |
| | `БонуснаяТранзакция` | `id: UUID`<br>`accountId: UUID`<br>`orderId: UUID`<br>`amount: Integer`<br>`type: String`<br>`description: String`<br>`createdAt: DateTime` | Движение баллов по счёту: начисление, списание, сгорание. |
| | `ПравилоЛояльности` | `id: UUID`<br>`name: String`<br>`accrualRate: Float`<br>`burnAfterDays: Integer`<br>`minOrderAmount: Decimal` | Настройки бонусной программы: коэффициент начисления, срок жизни баллов, минимальная сумма заказа для активации. |
| **Сервис доставки** | `Доставка` | `id: UUID`<br>`orderId: UUID`<br>`address: String`<br>`courierId: UUID`<br>`status: String`<br>`estimatedDeliveryTime: DateTime`<br>`actualDeliveryTime: DateTime`<br>`deliveryCost: Decimal` | Заказ на доставку. Связан с конкретным заказом и курьером, отслеживает статус и время. |
| | `Курьер` | `id: UUID`<br>`name: String`<br>`phone: String`<br>`vehicle: String`<br>`isActive: Boolean`<br>`currentLocation: String` | Данные курьера: контакты, транспорт, активность и текущее местоположение (для трекинга). |