const React = require('react')

const Def = (html) => {
    return (
        <html>
            <head>
                {/* <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                <title>Rest-rant Review App</title>*/}
                <link rel="icon" type="image/png" href="/images/cutlery.png"></link>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link rel="stylesheet" href="/css/styles.css"></link>
            </head>
            <body>
                <div id="navBar" className="fixed-top">
                    <ul>
                        <li>
                            <a href="/">
                            <button type="button" id="homeBtn" className="btn-primary">Home Page</button>
                            </a>
                        </li> 
                        <li>
                            <a href="/places">
                            <button type="button" id="homePlaceBtn" className="btn-primary">Places Page</button>
                            </a>
                        </li>
                        <li>
                            <a href="/places/newPlace">
                            <button type="button" id="newPlaceBtn" className="btn-primary">New Place Page</button>
                            </a>
                        </li>
                    </ul>
                    
                </div>
                
                <div className="content">
                    <a id="favLink" href="https://www.flaticon.com/free-icons/restaurant" title="restaurant icons">Restaurant icons created by Freepik - Flaticon</a>
                    {html.children}
                </div>
                <footer className="footer-footer fixed-bottom d-flex justify-content-center">
                    <a title="GitHub" href="https://github.com/wtcrowe4" className="fa fa-github social"></a>
                    <a title="LinkedIn" href="https://www.linkedin.com/in/thomas-crowe-0a8313167" className="fa fa-linkedin social"></a>
                    <a title="Instagram" href="https://www.instagram.com/tcroweiv" className="fa fa-instagram social"></a>
                    <a title="Facebook" href="https://www.facebook.com/tcrowe4" className="fa fa-facebook social"></a>
                    <a title="Email" href="mailto:wcrowe@g.clemson.edu" className="fa fa-envelope social"></a>
                </footer>
            </body>
        </html>
    )
}

module.exports = Def