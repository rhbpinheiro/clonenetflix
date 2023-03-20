/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import './App.css'
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {

    const [movieList, setMovieList] = useState([])
    const [featuredData, setFeaturedData] = useState(null)
    const [blackHeader, setBlackHeader] = useState(false)

    useEffect(() => {
        const loadAll = async () => {
            //pegando lista total
            let list = await Tmdb.getHomeList();
            setMovieList(list);
            //pegando o featured
            let originals = list.filter(i=>i.slug === 'originals')
            let randonChosen = Math.floor(Math.random() * 
                (originals[0].itens.results.length - 1))
            let chosen = originals[0].itens.results[randonChosen]  
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
            setFeaturedData(chosenInfo)
        }
        loadAll()
    }, [] )
    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10) {
                setBlackHeader(true)
            } else {
                setBlackHeader(false)
            }
        }
        window.addEventListener('scroll', scrollListener)
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, [])

    return (
      //1- header, 2-destaque, 3- as listas, 4- rodapé
      <div className="page">
        <Header black={blackHeader} />

        {featuredData && <FeaturedMovie item={featuredData} />}
        <section className="lists">
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} itens={item.itens} />
          ))}
        </section>
        <footer>
          Feito por Rodolpho Pinheiro
          <br />
          Direitos de imagem para Netflix
          <br />
          Dados buscados do site Themoviedb.org
        </footer>
        {movieList.length <= 0 && (
          <div className="loading">
            <img
              src="https://www.metageek.com/img/buffering-800px.gif"
              alt="Carregando"
            />
          </div>
        )}
      </div>
    );
}