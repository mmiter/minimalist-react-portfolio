export default function handler(req, res) {
  res.status(200).json(
      [
          {
            "id": 1,
            "name": "Store Front-End",
            "desc": "Front-end of an online store for the game servers site",
            "imageUrl": "https://mtmcode.eu/demo/shop/preview.jpg",
            "tags": "HTML - CSS - Materialize.css - jQuery - MixltUp",
            "liveDemo": "https://mtmcode.eu/demo/shop/",
            "github": "https://github.com/mmiter/storeforgamecommunity/"
          },
          {
            "id": 2,
            "name": "Portfolio",
            "desc": "",
            "imageUrl": "",
            "tags": "React - Next.js - Axios - MaterialUI",
            "liveDemo": "/",
            "github": "/"
          },
          {
            "id": 3,
            "name": "MovieHouse",
            "desc": "Movie application, displays different categories of movies (popular, in theaters, trending etc) alongside a search option using TheMovieDB API for the data",
            "imageUrl": "",
            "tags": "React - Next.js - MaterialUI - Axios - ESLint & Prettier",
            "liveDemo": "/",
            "github": "https://github.com/mmiter/moviehouse"
          },
        ],
  )
}
