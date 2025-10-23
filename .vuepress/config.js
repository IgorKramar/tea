module.exports = {
  title: 'Чайная энциклопедия',
  description: 'Полное руководство по чайной культуре',
  base: '/', // важно указать base для корневой директории
  
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Основы', link: '/common/brewing_basics.md' },
      { text: 'Чаи', link: '/teas/sheng_puer.md' }
    ],
    
    sidebar: 'auto'
  }
}