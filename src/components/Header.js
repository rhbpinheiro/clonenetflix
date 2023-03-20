/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Header.css'

export default ({black}) => {
    return (
      <header className={black ? 'black' : ''}>
        <div className="header--logo">
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix"
            />
          </a>
        </div>
        <div className="header--user">
          <a href="/">
            <img
              src="https://occ-0-6649-3851.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUoj4FT-0Rr558WbETiintMnmH2JKw4l_p4MdMoxqVx7YXwsvLvvnGUtx3HKZN_BJFH4EHpXn5KqSCBVxLrRz0n4gk64yyeAFw.png?r=229"
              alt="Usuário"
            />
          </a>
        </div>
      </header>
    );
}