<div align="center">

# Чайный мануал

[English](README.md) · **Русский**

### Не спешить. Заварить. Попробовать.

Методы заваривания · Профили чая · Дегустация и посуда

![VuePress](https://img.shields.io/badge/VuePress-1-9ece6a?style=flat-square)
![Markdown](https://img.shields.io/badge/content-Markdown-7aa2f7?style=flat-square)
[![Website](https://img.shields.io/badge/read-GitHub_Pages-bb9af7?style=flat-square)](https://igorkramar.github.io/tea/)

[Читать онлайн](https://igorkramar.github.io/tea/) · [Разделы](#разделы) · [Локальный запуск](#локальный-запуск) · [Публикация](#публикация)

</div>

Личное руководство по чаю: как заваривать, на что обращать внимание во вкусе, какую посуду выбрать и как хранить запас. Читайте опубликованный сайт или открывайте Markdown-файлы прямо в репозитории.

**Язык материалов — русский.** Английская витрина описывает навигацию, запуск и публикацию. Мануал содержит личные заметки, а не медицинские рекомендации или обещания оздоровительного эффекта.

## Разделы

| Полка | Содержание |
|:---|:---|
| **Начать заваривать** | [Основы](../common/brewing_basics.md) · [Методы](../common/brewing_methods.md) |
| **Улуны** | [Габа Алишань](../teas/gaba_alishan.md) · [Да Хун Пао](../teas/da_hong_pao.md) |
| **Пуэры** | [Шу](../teas/shu_puer.md) · [Шэн](../teas/sheng_puer.md) · [Цзин Май Гу Шу](../teas/jing_mai_gu_shu.md) |
| **Другие профили** | [Дянь Хун](../teas/dian_hong_jin_si.md) · [Бай Му Дань](../teas/bai_mu_dan.md) · [Аньхуа Фу](../teas/anhua_fu_golden_flower.md) |
| **Чайный уголок** | [Хранение](../tips/storage.md) · [Посуда](../tips/teaware.md) · [Дегустация](../tips/tasting.md) |
| **Под рукой** | [Схемы](../schemes/brewing_diagrams.md) · [Чек-листы](../schemes/checklists.md) · [Решение проблем](../tips/troubleshooting.md) |

На [главной странице сайта](../README.md) также есть сезонные заметки и сочетания с едой. Её frontmatter используется VuePress, поэтому витрина GitHub находится отдельно в `.github/`.

## Локальный запуск

Существующий workflow собирает сайт на Node.js 18 и VuePress 1. Для воспроизводимой установки используйте lock-файл; обновление среды — отдельная задача.

```sh
git clone https://github.com/IgorKramar/tea.git
cd tea
npm ci
npm run docs:dev
```

Откройте `http://localhost:8080/tea/`. Сборка статического сайта:

```sh
npm run docs:build
```

Результат — `.vuepress/dist/`. Базовый путь `/tea/` настроен в [`.vuepress/config.js`](../.vuepress/config.js).

## Публикация

[Workflow развёртывания](workflows/deploy.yml) запускается при push в `main` или вручную. Он собирает сайт, загружает артефакт Pages и публикует его через GitHub Actions. Выберите **Settings → Pages → Source → GitHub Actions**. Подробнее: [заметки о развёртывании](../DEPLOY.md).

## Участие

Уточните профиль чая, шаг заваривания или ссылку. Отделяйте субъективные впечатления от фактических утверждений, сохраняйте русскоязычный мануал и проверяйте отображение Markdown локально перед отправкой изменений.

## Лицензия

На исходной главной странице указана MIT, но отдельного файла лицензии в текущем дереве нет. Права на сторонние материалы по ссылкам сохраняются за их владельцами.
