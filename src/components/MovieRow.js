/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


export default ({title,itens}) => {

    const [scrollX, setScrollX] = useState(0)
    
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if (x > 0) {
            x = 0
            
        }
        setScrollX(x)
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listw = itens.results.length * 150
        if((window.innerWidth - listw) > x) {
            x = (window.innerWidth - listw) - 60 
        }
        setScrollX(x)
    }

    return (
      <div className="movieRow">
        <h2>{title}</h2>
        <div className="movieRow--left" onClick={handleLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }} />
        </div>
        <div className="movieRow--right" onClick={handleRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }} />
        </div>
        <div className="movieRow--listarea">
          <div className="movieRow--list" style={{ 
                marginLeft: scrollX,
                width: itens.results.length * 150
          }}>
            {itens.results.length > 0 &&
              itens.results.map((item, key) => (
                <div key={key} className="movieRow--item">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                    alt={item.origina_title}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
}