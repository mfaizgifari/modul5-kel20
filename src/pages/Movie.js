import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css";

export default function Movie() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;
  const navigate = useNavigate();

  const poster = [
    {
      title: "John Wick",
      id: 1,
      rate: 4,
      genre: "Action, Crime, Thriller",
      desc: "John Wick: Chapter 4 Ini adalah film thriller aksi Amerika 2023 yang disutradarai dan diproduksi oleh Chad Stahelski dan ditulis oleh Shay Hatten dan Michael Finch. Film ini adalah sekuel dari John Wick: Chapter 3 – Parabellum (2019) dan instalasi keempat dalam franchise John Wick. Film ini dibintangi oleh Keanu Reeves sebagai karakter utama, bersama Donnie Yen, Bill Skarsgård, Laurence Fishburne, Hiroyuki Sanada, Shamier Anderson, Lance Reddick, Rina Sawayama, Scott Adkins, Clancy Brown, dan Ian McShane. Dalam film ini, John Wick berusaha membalas dendam pada High Table dan mereka yang meninggalkannya mati.",
      img: "https://www.thesouthafrican.com/wp-content/uploads/2020/11/a7645d89-john.jpg",
    },
    {
      title: "The Godfather",
      id: 2,
      rate: 5,
      genre: "Biography, Drama, History",
      desc: "The Godfather Ini adalah film kejahatan epik Amerika 1972 yang disutradarai oleh Francis Ford Coppola, yang menulis skenario bersama Mario Puzo, berdasarkan novel laris Puzo tahun 1969 dengan judul yang sama. Film ini menceritakan keluarga Corleone di bawah kepemimpinan Vito Corleone (Brando) dari tahun 1945 hingga 1955. Film ini berfokus pada transformasi putra bungsunya, Michael Corleone (Pacino), dari orang luar keluarga yang enggan menjadi bos mafia yang kejam.",
      img: "https://i1.wp.com/rizalubis.id/wp-content/uploads/2014/07/The-Godfather.png?fit=730%2C410&ssl=1",
    },
    {
      title: "The Dark Knight",
      id: 3,
      rate: 4,
      genre: "Action",
      desc: "The Dark Knight Ini adalah film superhero 2008 yang disutradarai oleh Christopher Nolan dari skenario yang ditulis bersama dengan saudaranya Jonathan. Berdasarkan superhero Batman dari DC Comics, ini adalah sekuel dari Batman Begins (2005) dan instalasi kedua dalam Trilogi The Dark Knight. Plotnya mengikuti Batman, letnan polisi James Gordon, dan jaksa distrik Harvey Dent, yang membentuk aliansi untuk membongkar kejahatan terorganisir di Gotham City. Upaya mereka digagalkan oleh Joker, seorang mastermind anarkis yang berusaha menguji sejauh mana Batman akan pergi untuk menyelamatkan kota dari kekacauan.",
      img: "https://m.media-amazon.com/images/I/713-KpFv1rL.jpg",
    },
    {
      title: "Pulp Fiction",
      id: 3,
      rate: 5,
      genre: "Crime, Drama",
      desc: "Pulp Fiction Ini adalah film kejahatan Amerika 1994 yang ditulis dan disutradarai oleh Quentin Tarantino dari cerita yang dia konsepkan dengan Roger Avary. Film ini menceritakan empat kisah yang saling terkait tentang kejahatan dan kekerasan di Los Angeles, California. Film ini dibintangi oleh John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, dan Uma Thurman",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmTKx8YC_KLbi3L5gcOn_9UGvaHY27XyKB9A&usqp=CAU",
    },
    {
      title: "Oppenheimer",
      id: 5,
      rate: 4,
      genre: "Biography, Drama, History",
      desc: "Oppenheimer Ini adalah film thriller biografi epik 2023 yang ditulis dan disutradarai oleh Christopher Nolan. Film ini dibintangi oleh Cillian Murphy sebagai J. Robert Oppenheimer, fisikawan teoretis Amerika yang dikreditkan sebagai “bapak bom atom” karena perannya dalam Proyek Manhattan — upaya Perang Dunia II yang mengembangkan senjata nuklir pertama. Berdasarkan biografi American Prometheus tahun 2005 oleh Kai Bird dan Martin J. Sherwin, film ini menceritakan karier Oppenheimer, dengan cerita terutama berfokus pada studinya, arahnya dalam Proyek Manhattan selama Perang Dunia II, dan jatuhnya dari anugerah karena sidang keamanannya pada tahun 1954.",
      img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
  ];
  const data = [
    {
      title: "John Wick",
      id: 1,
      rate: 4,
      genre: "Action, Crime, Thriller",
      desc: "John Wick: Chapter 4 Ini adalah film thriller aksi Amerika 2023 yang disutradarai dan diproduksi oleh Chad Stahelski dan ditulis oleh Shay Hatten dan Michael Finch. Film ini adalah sekuel dari John Wick: Chapter 3 – Parabellum (2019) dan instalasi keempat dalam franchise John Wick. Film ini dibintangi oleh Keanu Reeves sebagai karakter utama, bersama Donnie Yen, Bill Skarsgård, Laurence Fishburne, Hiroyuki Sanada, Shamier Anderson, Lance Reddick, Rina Sawayama, Scott Adkins, Clancy Brown, dan Ian McShane. Dalam film ini, John Wick berusaha membalas dendam pada High Table dan mereka yang meninggalkannya mati.",
      img: "https://www.thesouthafrican.com/wp-content/uploads/2020/11/a7645d89-john.jpg",
    },
    {
      title: "The Godfather",
      id: 2,
      rate: 5,
      genre: "Biography, Drama, History",
      desc: "The Godfather Ini adalah film kejahatan epik Amerika 1972 yang disutradarai oleh Francis Ford Coppola, yang menulis skenario bersama Mario Puzo, berdasarkan novel laris Puzo tahun 1969 dengan judul yang sama. Film ini menceritakan keluarga Corleone di bawah kepemimpinan Vito Corleone (Brando) dari tahun 1945 hingga 1955. Film ini berfokus pada transformasi putra bungsunya, Michael Corleone (Pacino), dari orang luar keluarga yang enggan menjadi bos mafia yang kejam.",
      img: "https://i1.wp.com/rizalubis.id/wp-content/uploads/2014/07/The-Godfather.png?fit=730%2C410&ssl=1",
    },
    {
      title: "The Dark Knight",
      id: 3,
      rate: 4,
      genre: "Action",
      desc: "The Dark Knight Ini adalah film superhero 2008 yang disutradarai oleh Christopher Nolan dari skenario yang ditulis bersama dengan saudaranya Jonathan. Berdasarkan superhero Batman dari DC Comics, ini adalah sekuel dari Batman Begins (2005) dan instalasi kedua dalam Trilogi The Dark Knight. Plotnya mengikuti Batman, letnan polisi James Gordon, dan jaksa distrik Harvey Dent, yang membentuk aliansi untuk membongkar kejahatan terorganisir di Gotham City. Upaya mereka digagalkan oleh Joker, seorang mastermind anarkis yang berusaha menguji sejauh mana Batman akan pergi untuk menyelamatkan kota dari kekacauan.",
      img: "https://m.media-amazon.com/images/I/713-KpFv1rL.jpg",
    },
    {
      title: "Pulp Fiction",
      id: 3,
      rate: 5,
      genre: "Crime, Drama",
      desc: "Pulp Fiction Ini adalah film kejahatan Amerika 1994 yang ditulis dan disutradarai oleh Quentin Tarantino dari cerita yang dia konsepkan dengan Roger Avary. Film ini menceritakan empat kisah yang saling terkait tentang kejahatan dan kekerasan di Los Angeles, California. Film ini dibintangi oleh John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, dan Uma Thurman",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmTKx8YC_KLbi3L5gcOn_9UGvaHY27XyKB9A&usqp=CAU",
    },
    {
      title: "Oppenheimer",
      id: 5,
      rate: 4,
      genre: "Biography, Drama, History",
      desc: "Oppenheimer Ini adalah film thriller biografi epik 2023 yang ditulis dan disutradarai oleh Christopher Nolan. Film ini dibintangi oleh Cillian Murphy sebagai J. Robert Oppenheimer, fisikawan teoretis Amerika yang dikreditkan sebagai “bapak bom atom” karena perannya dalam Proyek Manhattan — upaya Perang Dunia II yang mengembangkan senjata nuklir pertama. Berdasarkan biografi American Prometheus tahun 2005 oleh Kai Bird dan Martin J. Sherwin, film ini menceritakan karier Oppenheimer, dengan cerita terutama berfokus pada studinya, arahnya dalam Proyek Manhattan selama Perang Dunia II, dan jatuhnya dari anugerah karena sidang keamanannya pada tahun 1954.",
      img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
  ];

  const navigateToDetail = (item) => {
    navigate(`/movie/detail/${item.id}`, { state: { movieData: item } });
  };

  return (
    <>
      <p id="movies">Top Movies</p>
      <div className="containerTop">
        {poster.map((item, index) => (
          <Fragment key={item.id}>
            <CardBig
              title={item.title}
              img={item.img}
              genre={item.genre}
              size={STAR_SIZE}
              color={STAR_COLOR}
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
          <p id="movies">All Movies</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall
                title={item.title}
                img={item.img}
                genre={item.genre}
                size={STAR_SIZE}
                color={STAR_COLOR}
                onClick={() => navigateToDetail(item)}
              />
              {data.length === index + 1 && (
                <div style={{ marginBottom: 80 }} />
              )}
            </Fragment>
          ))}
        </div>
        <div className="column">
          <p id="movies">All Movies</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall
                title={item.title}
                img={item.img}
                genre={item.genre}
                size={STAR_SIZE}
                color={STAR_COLOR}
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
}
