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

## 9. Practical Component Exercise #1: Message

Let's begin reviewing the process of creating an assortment of practical components for your own projects. We'll start with a simple one: convert Bulma's "message" component into a full-fledged Vue component with behavior.

Bulma интересна тем, что у нее уже есть система компонентов, например, сообщения:
https://bulma.io/documentation/components/

Как дают имена компонентам:
```
<message>
<airbus-message> // бизнес название
```

Как спрятать модальное окно? Первый вариант - написать скрытие элемента в стиле Jquery. Второй - используя состояния во Vue - `<article class="message" v-show="isVisible">`.

А еще, всю конструкцию:
```
<button class="delete" aria-label="delete" @click="hideModal"></button>
...
methods: {
    hideModal() {
        this.isVisible = false;
    }
}
```
Можно заменить одной строчкой:
```
<button class="delete" aria-label="delete" @click="isVisible = false"></button>
```

## 10. Practical Component Exercise #2: Modal

Let's move on to our next practical component exercise. A traditional modal box provides some key learning points. In particular, we're going to learn how to communicate between components. What happens if one Vue instance or component needs to be notified when a particular action takes place? How might we broadcast such things?

https://packagecontrol.io/packages/Vuejs%20Snippets%20Airbnb

Какой подход к созданию компонентов?
1. Делаем чистый HTML того, что желаем получить;
2. Вырезаем и пишем `<modal></modal>`;
3. Создаем в Vue компонент;

А как сделать общение компонента с Vue instance?

slot - щель, щёлка - через нее идет передача данных в компоненты.

## 11. Practical Component Exercise #3: Tabs

Let's review one more practical component exercise, before moving on to new topics. Let's re-create the common tabs feature that you've seen on so many websites. This will give us a number of interesting techniques to review.

`ul#tabs>li*3>a[href=#]` (Emmet should be installed)

По ходу создания, смотрим в консоль:
- `console.log(this.$children)`
- `$vm0.$children.forEach(tab => console.log(tab.name))`

`created()` - событие выполняется в момент создания компонента;

Рефакторинг.
- Мы меняем пришедшие свойства, а это не хорошо. Создадим отдельное значение выбранной вкладки;
- Добавим вывод текста вкладки, в зависимости от выбора: `<div v-show="isActive"><slot></slot></div>`;
- Добавим в ссылках имена Табов, чтобы по ссылке открывался соответсвующий Таб.

## 12. Component Communication Example #1: Custom Events

Let's begin reviewing the options you have, when it comes to communication between Vue components. Or, in other words, how can one component notify another about a particular action or event that just took place?

```
<coupon v-on:applied="onCouponApplied"></coupon>

// сокращенный вариант
<coupon @applied="onCouponApplied"></coupon>
```

## 13. Component Communication Example #2: Event Dispatcher

The next choice you have, to allow for communication between Vue components, is creating your own event dispatcher. Don't worry: this is much easier than it sounds, due to the fact that every Vue instance already implements the necessary interface!

## 14. Named Slots in a Nutshell

So far, we've only reviewed default component slots. Or, in other words, "take this bit of content, and insert it right there, as designated by the `slot` tags. But what about when we require more control? A modal component is a perfect example of this. If you want to slot a header section in one place, and a footer section in another, named slots are exactly what you need.

Можно использовать станадртные теги и они на выходе остаются такими:
```
<modal>
    <h1 slot="title">Modal title from slot</h1>
</modal>
```

Можно использовать станадртные теги Vue и они на выходе становятся "пустыми":
```
<modal>
    <template slot="title">Modal title from slot</template>
</modal>
```

Это значение в шаблоне по умолчанию:
```
<slot>Defaul content.</slot>
```

## 15. Single-Use Components and Inline Templates

Not every component needs to be generic and reusable. Sometimes, a single, view-specific component is exactly what the doctor ordered. In this episode, we'll review the basic concept, and then discuss when you might reach for the `inline-template` attribute to nest your template directly in your HTML file.

## 16. Webpack and vue-cli

Let's begin focusing on structure, and how you'll build actual applications with Vue. That means we're ready to learn both Webpack and vue-cli. I will warn you ahead of time: this can be a little confusing. But just stick with me, and we'll iron out all the kinks as best as we can.

As an aside, if you use Laravel, you'll be happy to know that the framework offers some facilities to make this whole process even simpler. We'll review that soon.

https://webpack.github.io/
https://github.com/vuejs/vue-cli

Как устроен отдельный Вуе-компонент (https://vue-loader.vuejs.org/ru/):
- Шаблон;
- Скрипт;
- CSS;

Приступим к установке:
```
npm install -g @vue/cli
vue --version // -V
npm install -g @vue/cli-init
vue init webpack-simple hello-vue

// В файле app.vue видим шаблон, скрипт и стили.

npm install
npm run dev
```

В файле `app.vue` видим шаблон, скрипт и стили.

Добавляем компонент и проверяем работу.

## 17. Hot Module Replacement

Hot module replacement is incredibly cool. Yes, it will automatically refresh the page each time you change a component; however, what's particularly neat is that the state for all components will remain unchanged. Think of it like "Live Reload" for every single component in your application. In this video, I'll quickly demonstrate how it works.

Что означает ключ `--hot`?
```
"dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
```

Это - Hot Module Replacement. Фокус в том, что меняя компоненты и скрипты, страница перезагружается с внесенными изменениями, но значения и состояния остаются те же.
```
    <h2>The Count Is: {{ count }}</h2>
    <h2>Count: {{ count }}</h2>
    <p>
        <button @click="count += 1">Increment</button>
        <button @click="count += 10">Increment</button>
    </p>
```

18. Vue Ajax Requests With Axios

Vue doesn't provide any specific AJAX functionality out of the box. Instead, you have the entire spectrum of the JavaScript community to pull from. Maybe you're already using jQuery? If so, `$.ajax` will do the trick. Want a native option? Consider the fetch API (just don't forget to include a polyfill for older browsers). Or, maybe a general purpose library will do the trick? In this lesson, we'll review *Axios*: a clean and simple HTTP request API that you can be integrated into any project within seconds.

- Устанавливаем Ларавел. Это будет Бэкэндом;
- В Ларавел есть папка `/resources`, в которой настраиваются все фронт-энд модули, но мы все сделаем через `/public`;
- начинаем работу с файлом `/public/js/app.js`;
- создаем роут `/skills`;
- какие у нас есть варианты для ajax? - Vanila JS, Jquery, Axios!
- https://github.com/mzabriskie/axios
- сначала возвращаем сырой ответ;
- теперь сделаем в vue `data: { skills: [] }` и будем возвращать результат запроса туда;
- выведем на страницу массив, обходя Blade `@{{ skills }}`;
```
<li v-for="skill in skills">@{{ skill }}</li>
// or...
<li v-for="skill in skills" v-test="skill"></li>
```

Еще вопрос - использовать Vue Resources или Axios?
Сегодня предпочтительнее использовать Axios.

Но мы перепишем заключительный код, используя прототипы.

## 19. Object-Oriented Forms: Part 1

Let's review some techniques that we might implement to DRY up our form interactions. If you've ever noticed yourself writing the same exact code, over and over, for each form, then extracting a Form class may be exactly what you need. Let's get started with part one of this two-part series.

Подготавливаем основу:
- устанавливаем Ларавел;
- `php artisan make:controller ProjectsController --resource`;
- `php artisan make:model Project`;
- `public\js\app.js`;
- создаем вьюшки;
- `php artisan make:migration create_projects_table` и добавляем поля;
- создаем БД и прописываем её в `.env`;
- проверяем, работает!

При этом активно работаем с консолью, вкладка *Network*, смотрим какие ошибки генерирует Ларавер, какой код ответа сервера и т.д. Работа с JS - это *XHR*.

Теперь поработаем с валидацией:
- `required` не работает в Сафари и др.;
- смотрим, что вернет Ларавел, если не ввести одно поле... Да, вот - "message: "The given data was invalid.", errors: {description: ["The description field is required."]}";
- итак, алгоритм следующий, берем ответ Ларавела и показываем пользователю;
- To quickly disable tokens (for this example, not production), comment out:
```
\App\Http\Middleware\VerifyCsrfToken::class, 
in app/Http/Kernel.php
```
- когда высветилась ошибка валидации и начинаем вводить, то она должна "уходить":
```
 <span class="help is-danger" v-text="errors.get('description')" @keydown="errors.clear('description')"></span>
```
- но если у нас много полей ввода? Везде не поставишь! Можно поставить на форме:
```
<form method="POST" action="/projects" @submit.prevent="onSubmit" @keydown="errors.clear($event.target.name)">
```
- теперь отключим вывод подсказок ошибок в форме:
```
has(field) {
    return this.errors.hasOwnProperty(field);
}
```
