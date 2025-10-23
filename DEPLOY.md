# 🚀 Деплой чайного мануала на GitHub Pages

## ✅ Исправлена проблема с Jekyll!

Проблема была в конфликте версий Ruby в Gemfile. Теперь у вас есть **два варианта**:

### 🎯 Вариант 1: Простой HTML сайт (РЕКОМЕНДУЕТСЯ)

#### 1. Создание репозитория на GitHub
1. Создайте новый репозиторий на GitHub
2. Назовите его `tea` (или любое другое имя)
3. Сделайте его **публичным** для GitHub Pages

#### 2. Загрузка файлов
```bash
# В вашей папке с мануалом
git init
git add .
git commit -m "Добавлен чайный мануал"
git branch -M main
git remote add origin https://github.com/yourusername/tea.git
git push -u origin main
```

#### 3. Настройка GitHub Pages
1. Перейдите в **Settings → Pages**
2. **Source**: "GitHub Actions"
3. GitHub автоматически найдет файл `.github/workflows/simple-pages.yml`
4. Сохраните

#### 4. Проверка
- Сайт будет доступен по адресу: `https://yourusername.github.io/tea`
- Первый деплой займёт 2-3 минуты

### 🔧 Вариант 2: Jekyll сайт (исправлен)

Если хотите использовать Jekyll:
1. Используйте файл `.github/workflows/pages.yml`
2. Убедитесь, что Gemfile не содержит `github-pages` гем
3. Настройте Source: "GitHub Actions"

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
