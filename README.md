# Programming Quotes API

**Programming Quotes API for open source projects.**

Docs: [programming-quotes-api.herokuapp.com](https://programming-quotes-api.herokuapp.com)

Convention: The names of the authors are as on Wikipedia.

I am open to your feature requests. Also, you can send me your client apps if you want to share it with the world :)

## API Documentation

GET [`/quotes`](https://programming-quotes-api.herokuapp.com/quotes) (get all quotes)

GET [`/quotes/random`](https://programming-quotes-api.herokuapp.com/quotes/random) (get random quote)

GET [`/quotes/5a6ce86f2af929789500e824`](https://programming-quotes-api.herokuapp.com/quotes/5a6ce86f2af929789500e824) (get quote by id)

GET [`/quotes/author/Edsger W. Dijkstra`](https://programming-quotes-api.herokuapp.com/quotes/author/Edsger%20W.%20Dijkstra) (get quote by author)

You can also POST, PUT, PATCH and DELETE. See [API documentation](https://programming-quotes-api.herokuapp.com) for more.

## Author info

You can use Wikipedia API for author's image and info. 

To get author's image:

[`https://en.wikipedia.org/w/api.php?action=query&titles=Fred%20Brooks&prop=pageimages&format=json&pithumbsize=250`](https://en.wikipedia.org/w/api.php?action=query&titles=Fred%20Brooks&prop=pageimages&format=json&pithumbsize=250)

To get author info:

[`https://en.wikipedia.org/w/api.php?action=query&titles=Fred%20Brooks&prop=extracts&format=json&exintro=1`](https://en.wikipedia.org/w/api.php?action=query&titles=Fred%20Brooks&prop=extracts&format=json&exintro=1)

Note that you can change `titles`, `pithumbsize` and other params. The `%20` character (as in `Fred%20Brooks`) is for empty space.

## Development

Start the project locally:

```
dotnet build
dotnet watch run
```

Listening on: http://localhost:5000

Deploy:

```
heroku login
heroku git:remote -a programming-quotes-api
heroku buildpacks:set https://github.com/jincod/dotnetcore-buildpack

git push heroku master
```

## Tutorials

- Web API: https://docs.microsoft.com/en-us/learn/modules/build-web-api-aspnet-core/
- Web API: https://channel9.msdn.com/Series/Beginners-Series-to-Web-APIs?page=2
- Auth: https://jasonwatmore.com/post/2021/07/29/net-5-role-based-authorization-tutorial-with-example-api
- Auth: https://medium.com/@marcosvinicios_net/asp-net-core-3-authorization-and-authentication-with-bearer-and-jwt-3041c47c8b1d
- Deploy: https://stackoverflow.com/questions/29100993/how-to-deploy-net-application-to-heroku

## TODO

- add User patch
