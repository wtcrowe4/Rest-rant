const React = require('react')

const Def = (html) => {
    return (
        <html>
            <head>
                {/* <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                <title>Rest-rant Review App</title>*/}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="/css/styles.css"></link>
            </head>
            <body>
                <div className="content">
                    {html.children}
                </div>
                <footer className="footer-footer">
                    My Links go here.
                </footer>
            </body>
        </html>
    )
}

module.exports = Def