import fetch from 'isomorphic-fetch'

export function getSeries() {
  return fetch(`http://www.omdbapi.com/?apikey=15faecaf&t=chef's%20table&Season=1`)
}

export function getEpisode(id) {
  return fetch(`http://www.omdbapi.com/?apikey=15faecaf&i=${id}`)
}