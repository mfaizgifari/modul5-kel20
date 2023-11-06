import "./CardProfile.css";
export default function CardProfile(props) {
  return (
    <div className="containerBig">
      <img src={props.image} alt="" className="posterBig" id="image" />
      <div className="descriptionBig">
        <div>
          <p id="title">{props.nama}</p>
          <p id="nim">{props.nim}</p>
          <p id="genre">{props.genre}</p>
        </div>
      </div>
    </div>
  );
}
