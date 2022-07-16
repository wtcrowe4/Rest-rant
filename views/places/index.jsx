const React = require('react')
const Def = require('../default')

const index = (data) => {
    let placesFormatted = data.places.map((place) => {
        return(
            <div className="col-sm-6">
                <h2 className="text-center">{place.name}</h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
            )
    })
    return(
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
        )
    
}

module.exports = index

// Warning: Each child in a list should have a unique "key" prop.

// Check the top-level render call using <main>. See https://reactjs.org/link/warning-keys for more information.
//     at div
//     in index