# **Project REST-Rant**

*REST-Rant is an app where users can create reviews for restaurants.*



**Have you ever thought to yourself...**

> Man that steak was amazing, I wish I could just tell everybody about it.  
*or*   
> That place was filthy, we should let people know so they don't eat there.  
*or*  
> The bartender made a cocktail I finally like, were going back, and other people should try it.  
*or*   
> The meal was over $100 and I'm still hungry, what a scam.  

**Well now you have a place to make those thoughts public, the REST-rant review app.**  

## Routes  
| Method  | Path                     | Purpose                                         |
| ------- | ------------------------ | ----------------------------------------------- |
| GET     | /                        | Home Page                                       |
| GET     | /places                  | Places index page                               |
| POST    | /places                  | Create new place                                |
| GET     | /places/new              | Form page for creating new place                |
| GET     | /places/:id              | Details about a particular place                |
| PUT     | /places/:id              | Update a particular place                       |
| GET     | /places/:id/edit         | Form page for editing an existing place         |
| DELETE  | /places/:id              | Delete a particular place                       |
| POST    | /places/:id/rant         | Create a rant (review) about a particular place |
| DELETE  | /places/:id/rant/:rantId | Delete a rant (review) about a particular place |
| GET     | *                        | 404 Page (any route not listed here)            |  
