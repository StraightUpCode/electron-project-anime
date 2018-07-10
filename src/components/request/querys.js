
export let ViewerQuery = `
query{
    Viewer{
      id,
      name
      stats{
        watchedTime
      }
      favourites{
        anime(page: 1, perPage: 3){
          nodes{
            title{
              romaji
            }
          }
          
        }
      }
    }
  }
`
export let SearchQuery =``
export let ResultQuery=``
export let MediaListQuery = ``

