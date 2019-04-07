# Learn Vue 2: Step By Step

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

## 3. Lists

In real life, we're often working with arrays, rather than strings. In this episode, you'll learn how to use the `v-for` directive to filter through a list of items and render them on the page. We'll also continue our review of reactivity, in the process.

Проверим реактивность:
- в консоле наберем `app.names.push('Susan')`, работает;

Сделать вывод адресов сайтов вместе с ссылками.

Теперь давайте сделаем добавление в список через элементы формы.

Небольшой рефакторинг - перенос Jquery в экземпляр Vue.

## 4. Vue Event Listeners

In the previous episode, we defaulted to traditional event listeners and DOM traversal. Luckily, though, there's a simpler way with Vue. Let's review the `v-on` directive for registering event listeners.

Справочник по обработке событий:
https://ru.vuejs.org/v2/guide/events

`v-on:` и `@`, выбираем последнее.

## 5. Attribute and Class Binding

We haven't yet reviewed attribute binding in Vue. This is a key concept to understand, so make sure that you pay attention over the next few minutes. We can use the `v-bind` directive to bind a property in our model to any element attribute.

`v-bind:title` и `:title`, выбираем последнее.

Поставим через консоль другое значение `app.className = 'color-blue'`.

Можно устанавливать значения через булевые переменные. Сделаем кнопку, цвет которой будет меняться через нажатия.

## 6. The Need for Computed Properties

Often, you'll find that a piece of data needs a bit of calculation, before it's rendered onto the page. In such instances, Vue's computed properties are exactly what you require.

Работа с массивом через консоль:
`app.tasks[0].completed = false`

Домашнее задание - сделать список задач с кнопками и добавлением задач.
https://jsfiddle.net/razvantirboaca/9aqsjj30/
https://codepen.io/kingRayhan/full/MoLrXX/
https://codepen.io/yusufkandemir/pen/EOxEQO
http://jsfiddle.net/jmhozgww/

## 7. Components 101

Let's begin reviewing Vue components. You'll make heavy use of these, as you begin to harness all that Vue has to offer, so pay special attention to the next several episodes.

```
<ul>
    <li>Go to the store</li>
</ul>

<!-- what is different? -->
<task-list>
    <task>Go to the store</task>
</task-list>

```

## 8. Components Within Components

Not only can we create single components, but, of course, any component may further consist of child components. In this episode, let's review a basic example of that very thing.

For multiline templates use \` instead '.

Обязательно в шаблонах делаем корневой элемент, иначе будет ошибка в шаблоне.
