const React = require('react')
const Def = require('../default')

const showPlace = (data) => {
    let comments = ( 
        <h3 className="inactive">
            <p>No comments yet.</p>
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div key={c.id} className="border col-sm-3">
                    <h2 className="rant">{c.rant ? 'Rant 🤬' : 'Rave 😃'}</h2>
                    <h4>{c.content}</h4>
                    <h3><strong>- {c.author}</strong></h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    } 
    return(
        <Def>
            <title>{data.place.name}</title>
            <main>
                <h1>{data.place.name}</h1>
                <div className="row">
                    <div className="col-sm-6" id="placeImage">
                        <img className="placePic" src={data.place.pic} alt={data.place.name}></img> 
                        <h3>Located in {data.place.city}, {data.place.state}.</h3>
                    </div>
                    <div className="col-sm-6" id="placeInfo">
                        <h2>Rating</h2>
                        <p>Currently unrated.</p>
                        <h2>Description</h2>
                        <h4>{data.place.name} is a {data.place.cuisines} style restaurant.</h4>
                        <h4>{data.place.showEstablished()}</h4>
                        <div className="showbtns">
                            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                                Edit
                            </a>
                            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                                <button type="submit" className="btn btn-danger">
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row border">
                    <h2>Comments</h2>
                    <div className="row">
                        {comments} 
                    </div>   
                </div>
                    
              
            </main>
        </Def>
    )
    
}

module.exports = showPlace