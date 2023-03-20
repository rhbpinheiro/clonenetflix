/* eslint-disable import/no-anonymous-default-export */
const API_KEY = '6977a098bcb7e6cb693c3d172e01b50a'

const API_BASE = "https://api.themoviedb.org/3"

/*
- oroginais da netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comédia
- romances 
- terrors 
- documentário
*/
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
//função para pegar as incormações
    getHomeList: async () => {
        return [
          {
            slug: "originals",
            title: "Originais do Netflix",
            itens: await basicFetch(
              `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
            ),
          },
          {
            slug: "trending",
            title: "Recomendados para Você",
            itens: await basicFetch(
              `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
            ),
          },
          {
            slug: "toprated",
            title: "Em Alta",
            itens: await basicFetch(
              `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
            ),
          },
          {
            slug: "action",
            title: "Ação",
            itens: await basicFetch(
              `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
            ),
          },
          {
            slug: "comedy",
            title: "Comédia",
            itens: await basicFetch(
              `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
            ),
          },
          {
            slug: "horror",
            title: "Terror",
            itens: await basicFetch(
              `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
            ),
          },
          {
            slug: "romance",
            title: "Romance",
            itens: await basicFetch(
              `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
            ),
          },
          {
            slug: "documentary",
            title: "Documentário",
            itens: await basicFetch(
              `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
            ),
          },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {}
        if(movieId) {
            switch(type) {
                case 'mobie':
                    info = await basicFetch(
                        `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
                    );
                break;    
                case 'tv':
                    info = await basicFetch(
                      `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
                    );
                break;
                default:
                    info = null;
                break;        
            }
        }
        return info

    }

}