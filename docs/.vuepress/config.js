const path = require('path');
var fs = require('fs');

module.exports = {
    title: 'Gruppe Adler Wiki',
    dest: './dist',
    base: '/vuepress-wiki/',
    locales: {
        '/de/': {
            lang: 'de',
            description: 'Hier findest du alles von Organisationssturkur bis zu Taktikgelaber.'
        },
        '/en/': {
            lang: 'en-US',
            description: 'Hier findest du alles von Organisationssturkur bis zu Taktikgelaber.'
        },
    },
    theme: 'gruppe-adler-theme',
    themeConfig: {
        repo: 'gruppe-adler/vuepress-wiki',
        editLinks: true,
        docsDir: 'docs',
        locales: {
            '/de/': {
                label: 'Deutsch',
                selectText: 'Sprachen',
                editLinkText: 'Diese Seite auf GitHub bearbeiten',
                lastUpdated: 'Als letztes geupdatet',
                nav: [
                    { text: 'Missionen', link: '/de/missionen/' },
                    { text: 'Mods', link: '/de/mods/' },
                    { text: 'Organisatorisches', link: '/de/organisatorisches/' },
                    { text: 'Taktik', link: '/de/taktik/' },
                    { text: 'Technik', link: '/de/technik/' }
                ],
                sidebar: {
                    '/de/missionen/': getSidebarItems('Missionen', '/de/missionen'),
                    '/de/mods/': getSidebarItems('Mods', '/de/mods'),
                    '/de/organisatorisches/': getSidebarItems('Organisatorisches', '/de/organisatorisches'),
                    '/de/taktik/': getSidebarItems('Taktik', '/de/taktik'),
                    '/de/technik/': getSidebarItems('Technik', '/de/technik')
                  }
            },
            '/en/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated' ,
                nav: []
            }
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': path.resolve(__dirname, '../assets/')
            }
        }
    },
    plugins: ['@vuepress/medium-zoom'] 
}

function getSidebarItems(name, relativePath, intro) {

    // get all markdown files
    let files = fs.readdirSync(path.resolve(__dirname, `..${relativePath}`)).filter(f => f.match(/\.md$/i));
    
    // add readme to front
    let i = files.findIndex(f => f.match(/README\.md/i));
    if (i > -1) {
        files.splice(i, 1);
        files.unshift('README.md')
    }

    let sites = files.map(f => {
        if (f == 'README.md') return ['', intro || 'Einleitung'];

        return f.slice(0, -3); // remove .md extension 
    });

    return [
        {
            title: name,
            collapsable: false,
            children: sites
        }
    ]
}