# 1. Для работы с проектом использовать версию Node 18.14.0 и npm 9.3.1
# 2. Для установки зависимостей вызвать команду в корне проекта `npm install`
# 3. Для локальной разработки вызвать команду в корне проекта `npm run dev`
# 3. Для локального билда вызвать команду в корне проекта `npm run build`
# 4. Для запуска тестов вызвать команду в корне проекта `npm run test`


<!-- Примерчание: Хук useLocaleStorage можно было реализовать по двум сценарием:
1. Уже реализован, при каждом изменении значение помещать содержимое в localeStorage
2. Используя слушатель события на фазе "beforeUnload" брать значение и только тогда сохранять
 -->