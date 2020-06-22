module.exports = {
    title: '彭智慧',
    description: '个人博客',
    port: 9006,
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '../public/plogo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    serviceWorker: true,
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav:[ // 导航栏配置
            {text: '前端', link: './front/' },
            {text: 'Java', link: '/java/'},
            {text: 'Go', link: '/golang/'}
        ],
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
}
