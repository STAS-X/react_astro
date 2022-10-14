# Проект на основе островной технологии [Astro](https://astro.build)

Проект написан по мотивам [ролика](https://www.youtube.com/watch?v=-Jdk0bTh2-I) на ютуб канале Мининина
Основная особенность технологии Astro состоит в том, что она позволяет писать приложения оптимальной производительности,
за счет генерации MPA HTML-кода на сервере (SSR) и разделения/минификации исходного кода на статический и динамический ("остров").
Статический код содержит в себе неизменный контент, задачей которого является загрузка и визуализация на клиенте. Динамический код
предполагает интерактив с пользователем, что требует загрузки дополнительной информации, например, JS-скриптов. 
Минификация кода в статической части сайта происходит за счет генерации страницы путем формирования "чистого" HTML
без дополнительной подгрузки "тяжелого" функционала в виде JS-кода. Оптимизация рендеринга страницы и загрузки происходит за счет
генерации страницы на сервере (SSR). 
Таким образом, корректно разделив код на статику и динамику мы имеем возможность получить максимально эффективный и быстро работающий сайт 
с минимальными затратами в плане написания дополнительного кода.
Для преобразования статического кода в динамический (на уровне компонента) достаточно использовать одну из доступных директив Astro, 
которая указывает способ загрузки функционала компонента на клиента. Добавляя в props компонета директиву сlient:<visible | load>  
мы получаем полнофункциональный компонент (с загрузкой соответствующих JS-скриптов) по технологии eager(load - загрузка компонента происходит параллельно сайту)
или lazy loading (visible - загрузка компонента происходит только при условии попадания его в зону вилимости окна <ViewPort>).
Реализована возможность динамического "роутинга" по каждому компоненту продукта. Для его описания достаточно создать соответствующее наименование продукта
в структуре папок проекта и задать шаблон имени файла с указанием REST параметра в квадратных скобках, в котором описать структуру HTML-страницы одиночного продукта компонента.
Ниже описана общая структура сайта, а в папке dist находится продакшен сборка для проверки скорости хостинга проекта на клиенте.

## 🚀 Структура проекта

Проект содержит следующие файлы и папки:

```
/
├── dist/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   │   └── Navbar.astro
│   │   └── ProductCard.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
│       └── about.astro
│       └── products.astro
└── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.
Дириктория dist содержит build (продакшен сборку проекта), которая может быть запущена с помощью любого виртуального прокси web-сервера
(позволяющего захостить итоговую сборку проекта из папки на localhost для доступа через браузер).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
