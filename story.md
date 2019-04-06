#Learn Vue 2: Step By Step

Vue is easily one of the most exciting additions to the front-end world in many years. With its intuitive API, and the fact that it can be applied to any type of application, it's no wonder why folks have gravitated to it as much as they have.

If you'd like to jump on board, let me show you, step by step, exactly what you need to know. It's the best way to learn Vue!

## 1. Basic Data Binding

Let's begin with a review of basic data binding in Vue. You'll get your first glimpse into the framework's wonderful, and automatic, reactivity.

Сравним классический JS и Vue.js

## 2. Setup Vue Devtools

Let's install Vue Devtools sooner, rather than later. As you'll see, this gives us a portal into any Vue instance on the page. Especially in these early stages, you'll get a lot of use out of this Chrome extension.

- Устанавливаем Vue Devtools
https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd
- Настраиваем открытие по локальным ссылкам
- Добавляем в код `Vue.config.devtools = true`
- Открыавем страницу и Chrome Dev Tools `Ctrl + Shift + I`

Экземпляр доступен в консоли с именем `$vm0`. Присвоим новое значениие `$vm0.message = 'I have been changed'`

Это и есть двухстороннее связываение - меняем источник данных - меняется везде в отображениях. Меняем в отображениях, меняется и источник данных.
