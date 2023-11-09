import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [pcData, setPcData] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/computers/" + id)
      .then((res) => res.json())
      .then((data) => {
        setPcData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <div className="container">
          <div className="card row">
            <div className="card-title">
              <h2 className="std-center">Computer Detail</h2>
            </div>
            {pcData && (
              <div className="card-body">
                <img
                  src={pcData.image + "&" + pcData.id}
                  alt="computer"
                  className="rounded mx-auto d-block"
                />{" "}
                <br />
                <div className="card-text">
                  <h3>
                    {pcData.brand} ({pcData.id})
                  </h3>
                  <h4>Details : </h4>
                  <h5>Model : {pcData.model}</h5>
                  <h5>Price : {pcData.price}</h5>
                  <h5>CPU : {pcData.CPU_type}</h5>
                </div>
                <Link className="btn btn-danger" to="/">
                  Back to Listing
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
