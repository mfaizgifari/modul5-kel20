import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./book.css";

const Book = () => {
  const navigate = useNavigate();

  const data = [
    {
      title: "Anna Karenina",
      id: 1,
      rate: 4,
      genre: "Drama",
      desc: "Anna Karenina adalah sebuah novel klasik Rusia yang ditulis oleh Leo Tolstoy. Buku ini menceritakan kisah Anna Karenina, seorang wanita bangsawan yang terjebak dalam cinta terlarang dan kehidupan yang rumit. Novel ini menggambarkan kehidupan masyarakat aristokrat Rusia pada abad ke-19, serta mengeksplorasi konflik moral, cinta, dan perasaan individu.",
      img: "https://m.media-amazon.com/images/I/91F9WNEThJL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Harry Potter",
      id: 2,
      rate: 4,
      genre: "Mystery, Supernatural",
      desc: "Harry Potter yang ditulis oleh J.K. Rowling adalah kisah fantasi populer tentang seorang anak yatim piatu bernama Harry Potter yang menemukan bahwa dia adalah seorang penyihir. Buku-buku ini mengikuti petualangan Harry dan teman-temannya di Hogwarts School of Witchcraft and Wizardry, dan perjuangan melawan Lord Voldemort. Serial ini dikenal karena dunianya yang kaya, karakter-karakter yang menarik, dan pesan moral yang mendalam.",
      img: "https://m.media-amazon.com/images/I/71DWj7cP0ML._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Yellowface",
      id: 3,
      rate: 3,
      genre: "Fiction",
      desc: "Yellowface adalah sebuah drama komedi yang ditulis oleh David Henry Hwang. Drama ini mengeksplorasi tema-tema seperti stereotip rasial dan representasi budaya dalam seni pertunjukan. Buku ini menggambarkan pengalaman penulis keturunan Asia Amerika yang berusaha menghadapi stereotip dan peran berdasarkan etnisitas.",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1671336608l/62047984.jpg",
    },
    {
      title: "Twillight",
      id: 4,
      rate: 4,
      genre: "Romance, Mystery",
      desc: "Twilight adalah novel pertama dalam seri buku yang ditulis oleh Stephenie Meyer. Ini adalah cerita roman vampir yang mengikuti percintaan antara Bella Swan dan Edward Cullen. Bella adalah seorang manusia biasa, sedangkan Edward adalah seorang vampir. Buku ini mengeksplorasi tema cinta, ketegangan, dan pertempuran antara kelompok vampir.",
      img: "https://th.bing.com/th/id/OIP.E9TgvacMS87W-wi6oZnWZQHaJl?pid=ImgDet&rs=1",
    },
    {
      title: "The Hobbits",
      id: 5,
      rate: 4,
      genre: "Mystery",
      desc: "The Hobbit adalah sebuah novel fantasi yang ditulis oleh J.R.R. Tolkien. Buku ini menceritakan petualangan seorang hobbit bernama Bilbo Baggins yang secara tak terduga terlibat dalam sebuah misi epik untuk merebut kembali harta karun dari naga Smaug. Ini adalah kisah yang mengasyikkan yang memperkenalkan pembaca ke dunia Middle-earth, yang kemudian menjadi latar belakang untuk The Lord of the Rings.",
      img: "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  const navigateToDetail = (item) => {
    navigate(`/book/detail/${item.id}`, { state: { movieData: item } });
  };

  return (
    <>
      <p id="books">Top Books</p>
      <div className="containerTop">
        {data.map((item, index) => (
          <Fragment key={item.id}>
            <CardBig
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
          <p id="books">All Books</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall
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
        <div className="column">
          <p id="books">All Books</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall
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
      </div>
    </>
  );
};

export default Book;
