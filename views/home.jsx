const React = require('react')
const Def = require('./default')

const home = () => {
    return(
        <Def>
            <main>
                <h1>Home</h1>
                    <div>
                        <a href="/places">
                            <button className="btn-primary">Places Page</button>
                        </a>
                    </div>
                    <img src="/images/steak.jpg" alt="Steak Picture"></img>
                    <div>
                        <a href="https://pixabay.com/photos/steak-sirloin-meat-beef-food-1083567/">Image by dbreen on Pixaby</a>
                    </div>
                
            </main>
        </Def>
        )
}

module.exports = home