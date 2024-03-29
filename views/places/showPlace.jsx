const React = require('react')
const Def = require('../default')

const showPlace = (data) => {
    let comments = ( 
        <h3 className="inactive">
            <p>No comments yet.</p>
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            <p>Not yet rated.</p>
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => tot + c.stars, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐'
        }
        rating = (
            <h3>{stars} Stars</h3>
        )
        comments = data.place.comments.map(c => {
            return (
                <div key={c.id} className="border col-sm-3">
                    <h2 className="rant">{c.rant ? 'Rant 🤬' : 'Rave 😃'}</h2>
                    <h4>{c.content}</h4>
                    <h3><strong>- {c.author}</strong></h3>
                    <h4>Rating: {c.stars}</h4>
                    <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
                        <input type="submit" className="btn btn-danger small" value="Delete Comment" />    
                    </form>    
                </div>
            )
        })
    } 
    return(
        <Def>
            <title>{data.place.name}</title>
            <main>
                <h1>{data.place.name}</h1>
                <br />
                <div className="row">
                    <div className="col-sm-6" id="placeImage">
                        <img className="placePic" src={data.place.pic} alt={data.place.name}></img> 
                        <h3>Located in {data.place.city}, {data.place.state}.</h3>
                    </div>
                    <div className="col-sm-6" id="placeInfo">
                        <h2>Rating</h2>
                        {rating}
                        <br />
                        <h2>Description</h2>
                        <h4>{data.place.name} is a {data.place.cuisines} style restaurant.</h4>
                        <h4>{data.place.showEstablished()}</h4>
                        <div className="showbtns">
                            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning edit">
                                Edit
                            </a>
                            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                                <button type="submit" className="btn btn-danger delete">
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
                <div className="row border">
                    <h2>Want to Rant/Rave?</h2>
                    <form method="POST" action={`/places/${data.place.id}/comment`}>
                        <div className="row">
                            <div className="col-sm-10">
                                <label htmlFor="content">Comments</label>
                                <input className="form-control" type="text" id="content" name="content" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <label htmlFor="author">Author</label>
                                <input className="form-control" type="text" id="author" name="author" />
                            </div>
                            <div className="col-sm-5">
                                <label htmlFor="stars">Star Rating</label>
                                <input className="form-control slider" id="stars" name="stars" type="range" min="0" max="5" step="0.5" list="starslist" />
                                    <datalist id="starslist">
                                        <option value="0"></option>
                                        <option value=".5"></option>
                                        <option value="1" label="1">1</option>
                                        <option value="1.5"></option>
                                        <option value="2" label="2">2</option>
                                        <option value="2.5"></option>
                                        <option value="3" label="3">3</option>
                                        <option value="3.5"></option>
                                        <option value="4" label="4">4</option>
                                        <option value="4.5"></option>
                                        <option value="5" label="5">⭐</option>
                                    </datalist>
                            </div>
                            <div className="col-sm-2">
                                <label htmlFor="rant">Ranting?</label>
                                <input type="checkbox" id="rant" name="rant" />
                            </div>
                        </div>
                        <div className="submitBtn">
                            <input id="submitBtn" className="btn btn-primary" type="submit" value="Add Rant/Rave" />
                        </div>
                    </form>
                </div>
            </main>
        </Def>
    )
    
}

module.exports = showPlace