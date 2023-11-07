import { Fragment } from "react";

import CardProfile from "../component/CardProfile";
import "./Profile.css";
export default function Movie() {
  const data = [
    {
      nama: "Mulyadi Baskoro",
      id: 1,
      rate: 4,
      nim: "21120121130022",
      image:
        "https://awsimages.detik.net.id/community/media/visual/2022/01/10/15-twibbon-hut-pdi-perjuangan-bisa-diunggah-di-media-sosial.jpeg?w=600&q=90",
    },
    {
      nama: "Kumala Dewi",
      id: 2,
      rate: 4,
      nim: "21120121130024",
      image:
        "https://steamuserimages-a.akamaihd.net/ugc/1844801565386647524/C5B048B65C3FB718F2B9A12ACF5B4332A5D542FA/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    },
    {
      nama: "Muhamad Faiz",
      id: 3,
      rate: 4,
      nim: "21120121130047",
      image:
        "https://www.whiteboardjournal.com/wp-content/uploads/2022/01/unnamed-9-2.jpg",
    },
    {
      nama: "Dhammas Sachita",
      id: 4,
      rate: 4,
      nim: "21120121130081",
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
