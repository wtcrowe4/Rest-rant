const React = require('react')
const Def = require('../default')

const index = (data) => {
    let placesFormatted = data.places.map((place) => {
        return(
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}></img>
            </div>
            )
    })
    return(
        <Def>
            <main>
                <h1>Places Index</h1>
                {placesFormatted}
            </main>
        </Def>
        )
    
}

module.exports = index

// Warning: Each child in a list should have a unique "key" prop.

// Check the top-level render call using <main>. See https://reactjs.org/link/warning-keys for more information.
//     at div
//     in index