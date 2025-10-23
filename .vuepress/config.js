module.exports = {
  title: 'Чайная энциклопедия',
  description: 'Полное руководство по чайной культуре',
  base: '/tea/',
  
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'GitHub', link: 'https://github.com/IgorKramar/tea' }
    ],
    
    sidebar: 'auto',
    
    // Дополнительные настройки для лучшего отображения
    displayAllHeaders: true, // Показывать все заголовки
    activeHeaderLinks: true, // Авто-скролл к заголовкам
    lastUpdated: 'Последнее обновление', // Показывать дату обновления
    
    // Опционально: если хотите кастомную структуру позже
    // sidebar: {
    //   '/': 'auto',
    //   '/common/': 'auto', 
    //   '/teas/': 'auto'
    // }
  },
  
  // Дополнительные плагины для надежности
  plugins: [
    ['@vuepress/active-header-links'],
    ['@vuepress/search'],
    ['@vuepress/nprogress']
  ],
  
  // Настройки для сборки
  dest: '.vuepress/dist',
  evergreen: true
}