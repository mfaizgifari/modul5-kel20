import { Fragment } from "react";

import CardProfile from "../component/CardProfile";
import "./Profile.css";
export default function Movie() {
  const data = [
    {
      nama: "Mulyadi Baskoro",
      id: 1,
      rate: 4,
      nim: "211201211",
      genre: "horror",
      image:
        "https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn&legacyStatusCode=true",
    },
    {
      nama: "Kumala Dewi",
      id: 2,
      rate: 4,
      nim: "21120121120010",
      genre: "horror",
      image:
        "https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn&legacyStatusCode=true",
    },
    {
      nama: "Muhamad Faiz Gifari",
      id: 3,
      rate: 4,
      nim: "21120121130047",
      genre: "horror",
      image: "https://jkt48.com/profile/azizi_asadel.jpg?v=20230116",
    },
    {
      nama: "Dhammas Sachita",
      id: 4,
      rate: 4,
      nim: "21120121130081",
      genre: "horror",
      image:
        "https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn&legacyStatusCode=true",
    },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p id="movies">Profile Kelompok 20</p>
        </div>
        {data.map((item, index) => (
          <Fragment key={item.id}>
            <CardProfile
              nama={item.nama}
              image={item.image}
              nim={item.nim}
              genre={item.genre}
              onClick={() => alert("item id = " + item.id)}
            />
            {data.length === index + 1 && (
              <div
                style={{
                  marginBottom: 80,
                }}
              />
            )}
          </Fragment>
        ))}
      </div>
    </>
  );
}
