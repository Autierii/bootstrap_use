export default function Card() {
  return (
    <div className="d-flex mt-4 justify-content-around">
      <div className="card col-md-5">
        <img
          className="card-img-top w-100"
          src="https://picsum.photos/330/170/?blur5"
          alt=""
        />
      </div>
      <div className="card-body">
        <p className="card-text">
          Lorem ipsum, dolor sit amet consecetur adispiscing elit.
        </p>
      </div>
      <div className="card col-md-5">
        <img
          className="card-img-top w-100"
          src="https://picsum.photos/330/170/?blur5"
          alt=""
        />
      </div>
      <div className="card-body">
        <p className="card-text">
          Lorem ipsum, dolor sit amet consecetur adispiscing elit.
        </p>
      </div>
    </div>
  );
}
