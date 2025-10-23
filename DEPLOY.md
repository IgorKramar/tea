# 🚀 Деплой чайного мануала на GitHub Pages

## Быстрый старт

### 1. Создание репозитория на GitHub
1. Создайте новый репозиторий на GitHub
2. Назовите его `tea` (или любое другое имя)
3. Сделайте его публичным для GitHub Pages

### 2. Загрузка файлов
```bash
# Клонируйте ваш репозиторий
git clone https://github.com/yourusername/tea.git
cd tea

# Скопируйте все файлы мануала в репозиторий
# (все .md файлы, index.html, _config.yml, etc.)

# Добавьте и закоммитьте
git add .
git commit -m "Добавлен чайный мануал"
git push origin main
```

### 3. Настройка GitHub Pages

#### Вариант A: Простой HTML сайт
1. Перейдите в Settings → Pages
2. Source: Deploy from a branch
3. Branch: main
4. Folder: / (root)
5. Сохраните

#### Вариант B: Jekyll сайт
1. Перейдите в Settings → Pages
2. Source: GitHub Actions
3. GitHub автоматически найдет workflow файл

### 4. Проверка
- Сайт будет доступен по адресу: `https://yourusername.github.io/tea`
- Первый деплой может занять 5-10 минут

## 🎨 Кастомизация

### Изменение темы
Отредактируйте `_config.yml`:
```yaml
theme: minima  # или другая тема
```

### Добавление CSS
Создайте файл `assets/css/style.scss`:
```scss
---
---

@import "minima";

// Ваши кастомные стили
body {
  font-family: 'Your Font', sans-serif;
}
```

### Настройка навигации
В `_config.yml`:
```yaml
navigation:
  - title: "Главная"
    url: "/"
  - title: "Чайная карта"
    url: "/mood-map"
```

## 🔧 Troubleshooting

### Проблема: Сайт не обновляется
- Проверьте, что все файлы закоммичены
- Подождите 5-10 минут для обновления
- Проверьте Actions tab в GitHub

### Проблема: Ссылки не работают
- Убедитесь, что пути к файлам правильные
- Для Jekyll используйте относительные пути: `[текст](teas/gaba_alishan.md)`

### Проблема: Jekyll не работает
- Проверьте `_config.yml` на синтаксические ошибки
- Убедитесь, что все гемы установлены
- Проверьте логи в Actions

## 📱 Мобильная версия

Сайт автоматически адаптируется под мобильные устройства благодаря:
- Responsive дизайн в `index.html`
- Jekyll темы с мобильной поддержкой
- Viewport meta tag

## 🔍 SEO оптимизация

### Автоматическая SEO
Jekyll автоматически добавляет:
- Meta теги
- Sitemap.xml
- RSS feed
- Open Graph теги

### Ручная оптимизация
В начале каждого .md файла добавьте:
```yaml
---
title: "Название страницы"
description: "Описание для поисковиков"
keywords: "чай, заваривание, мануал"
---
```

## 🎯 Продвинутые возможности

### Добавление поиска
Используйте плагин `jekyll-simple-search`:
```yaml
plugins:
  - jekyll-simple-search
```

### Добавление комментариев
Интегрируйте Disqus или Giscus:
```yaml
disqus:
  shortname: your-disqus-shortname
```

### Аналитика
Добавьте Google Analytics в `_config.yml`:
```yaml
google_analytics: UA-XXXXXXXX-X
```

---

*Ваш чайный мануал теперь доступен всему миру! 🍵*
