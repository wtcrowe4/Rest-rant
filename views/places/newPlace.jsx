const React = require('react')
const Def = require('../default')

const newPlace = (data) => {
    return(
        <Def>
            <title>Add New Place</title>
            <main>
                <h1>Create New Place</h1>
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisine Type</label>
                        <input className="form-control" id="cuisines" name="cuisines" required />
                    </div>
                    <div className="submitBtn">
                        <input id="submitBtn" className="btn btn-primary" type="submit" value="Add Place" />
                    </div>
                </form>
            </main>
        </Def>
        )
    
}

module.exports = newPlace