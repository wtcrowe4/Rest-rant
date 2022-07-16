const React = require('react')
const Def = require('./default')

const error404 = () => {
    return(
        <Def title="404 Not Found">
            <main>
                {/* <h1>404: Page not found</h1>
                <p>Oops, sorry we can't find this page.</p> */}
                <img src="/images/404.jpg" alt="404 Picture"></img> 
                <a href='https://www.freepik.com/search?format=search&from_query=404+food&premium=0&query=404&selection=1'>www.freepik.com</a>
            </main>
        </Def>
        )
}

module.exports = error404