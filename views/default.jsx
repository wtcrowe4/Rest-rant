const React = require('react')

const Def = (html) => {
    return (
        <html>
            <head>
                {/* <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}
                <title>Rest-rant Review App</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def