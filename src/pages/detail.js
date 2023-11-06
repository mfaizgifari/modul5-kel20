import React from "react";
import { useParams } from "react-router-dom";

export default function DetailMovie() {
  const { id } = useParams();

  // Di sini, Anda dapat melakukan permintaan ke server atau mengambil data dari suatu sumber
  // berdasarkan id untuk menampilkan detail film yang sesuai.

  // Contoh: Ambil data film berdasarkan id (Anda perlu menyesuaikannya dengan cara Anda mengelola data)
  const movieData = {
    title: "John Wick",
    id: id,
    rate: 4,
    genre: "action, crime",
    img: "https://dafunda.com/wp-content/uploads/2019/05/john-wick-4.jpg",
  };

  return (
    <div>
      <img src={movieData.img} />
      <h2>{movieData.id}</h2>
      <h2>{movieData.title}</h2>
      <p>Genre: {movieData.rate}</p>
      <p>{movieData.genre}</p>
      {/* Tampilkan informasi lainnya tentang film */}
         
    </div>
  );
}
