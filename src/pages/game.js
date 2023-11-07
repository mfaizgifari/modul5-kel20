import { Fragment } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./game.css";

const Game = () => {
  const navigate = useNavigate();

  const data = [
    {
      title: "Cyberpunk 2077",
      id: 1,
      rate: 4,
      genre: "Action, Open World",
      desc: "Cyberpunk 2077 Ini adalah game role-playing aksi 2020 yang dikembangkan oleh CD Projekt Red dan diterbitkan oleh CD Projekt, berdasarkan seri game Mike Pondsmith. Dalam game ini, pemain mengasumsikan peran V, seorang tentara bayaran di kota fiktif “Night City”, di mana mereka harus berurusan dengan dampak dari perampokan yang salah yang mengakibatkan “bio-chip” cybernetik eksperimental yang mengancam untuk perlahan-lahan menimpa pikiran V.",
      img: "https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/b9ea2dc46d95cf9fa3f77209e27ae7a6488368f1-1920x1080.jpg",
    },
    {
      title: "GTA V",
      id: 2,
      rate: 4,
      genre: "Action, Open World",
      desc: "Grand Theft Auto V (GTA 5) Ini adalah game petualangan aksi 2013 yang dikembangkan oleh Rockstar North dan diterbitkan oleh Rockstar Games. Game ini mengikuti tiga protagonis — pensiunan perampok bank Michael De Santa, gangster jalanan Franklin Clinton, dan pengedar narkoba dan senjata Trevor Philips — dan upaya mereka untuk melakukan perampokan sambil berada di bawah tekanan dari agen pemerintah yang korup dan penjahat yang kuat.",
      img: "https://cdn1-production-images-kly.akamaized.net/XznoBZcs4cKsVCKXiMyHhfYCrGM=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/796713/original/094485900_1421485203-GTAV-Review.jpg",
    },
    {
      title: "Valorant",
      id: 3,
      rate: 3,
      genre: "Action,Shooting",
      desc: "Valorant Ini adalah game penembak taktis hero orang pertama yang dikembangkan dan diterbitkan oleh Riot Games. Pemain bermain sebagai salah satu dari sekumpulan Agen, karakter berdasarkan beberapa negara dan budaya di seluruh dunia. Dalam mode game utama, pemain ditugaskan untuk tim penyerang atau pembela dengan masing-masing tim memiliki lima pemain di dalamnya.",
      img: "https://www.acerid.com/wp-content/uploads/2021/05/thumbnail-1.jpg",
    },
    {
      title: "Apex Legends",
      id: 4,
      rate: 4,
      genre: "First Person Shooter",
      desc: "Apex Legends Ini adalah game penembak hero taktis orang pertama gratis yang dikembangkan dan diterbitkan oleh Respawn Entertainment dan Electronic Arts. Game ini menempatkan dua tim, Counter-Terrorists dan Terrorists, satu sama lain dalam berbagai mode game berbasis tujuan.",
      img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg",
    },
    {
      title: "CS2",
      id: 5,
      rate: 4,
      genre: "First Person Shooter",
      desc: "Counter-Strike 2 (CS2) Ini adalah game penembak taktis orang pertama multipemain yang dikembangkan dan diterbitkan oleh Valve. Ini adalah instalasi utama kelima dalam seri Counter-Strike. Dikembangkan sebagai versi yang diperbarui dari entri utama sebelumnya, Counter-Strike: Global Offensive (2012), game ini diumumkan pada 22 Maret 2023 dan dirilis pada 27 September 2023, menggantikan Global Offensive di Steam",
      img: "https://files.bo3.gg/uploads/news/9099/title_image/960x480-1e5cc4703e97abe18753513ecfff2484.webp",
    },
  ];

  const navigateToDetail = (item) => {
    navigate(`/game/detail/${item.id}`, { state: { movieData: item } });
  };

  return (
    <>
      <p id="games">Top Games</p>
      <div className="containerTop">
        {data.map((item, index) => (
          <Fragment key={item.id}>
            <CardBig
              key={item.id}
              title={item.title}
              img={item.img}
              genre={item.genre}
              onClick={() => navigateToDetail(item)}
            />
            {data.length === index + 1 ? (
              <div style={{ marginRight: 40 }} />
            ) : null}
          </Fragment>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="games">All Games</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall
                title={item.title}
                img={item.img}
                genre={item.genre}
                onClick={() => navigateToDetail(item)}
              />
              {data.length === index + 1 && (
                <div style={{ marginBottom: 80 }} />
              )}
            </Fragment>
          ))}
        </div>
        <div className="column">
          <p id="games">All Games</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall
                title={item.title}
                img={item.img}
                genre={item.genre}
                onClick={() => navigateToDetail(item)}
              />
              {data.length === index + 1 && (
                <div style={{ marginBottom: 80 }} />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Game;
