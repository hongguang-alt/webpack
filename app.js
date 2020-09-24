if (typeof window === 'undefined') {
    global.window = {}
}
const express = require('express')
const { renderToString } = require('react-dom/server')
const SSR = require('./dist/search-server.js')


const server = (port) => {
    const app = express()

    app.use(express.static('./dist'))

    app.get('/search', (req, res) => {
        res.status(200).send(renderMakeUp(renderToString(SSR)))
    })

    app.listen(port, () => {
        console.log('服务器已经启动，请访问' + port + '端口')
    })
}

const renderMakeUp = (html) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div id='root'>
            ${html}
        </div>
    </body>
    </html>`
}
server(process.env.NODE_ENV || 3000)

