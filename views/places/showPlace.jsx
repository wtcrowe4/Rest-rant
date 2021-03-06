const React = require('react')
const Def = require('../default')

const showPlace = (data, id) => {
    return(
        <Def>
            <main>
                <div id="placeInfo">
                    <h1>{data.place.name}</h1>
                    <h2>Rating</h2>
                    <p>Currently unrated.</p>
                    <h2>Description</h2>
                    <p>{data.place.name} is a {data.place.cuisines} style restaurant and it is located in {data.place.city}, {data.place.state}</p>
                    <p>Established in {data.place.founded}.</p>
                    <h2>Comments</h2>
                    <p>No comments yet.</p>
                </div>
                <div id="placeImage">
                    <img className="placePic" src={data.place.pic} alt={data.place.name}></img> 
                </div>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
              
            </main>
        </Def>
    )
    
}

module.exports = showPlace