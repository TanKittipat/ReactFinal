import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [pc, setPcData] = useState({
    id: "",
    brand: "",
    model: "",
    price: "",
    CPU_type: "",
    image: "https://source.unsplash.com/random/200x200/?computer",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setPcData({ ...pc, [e.target.name]: e.target.value });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const pcData = {
      brand: pc.brand,
      model: pc.model,
      price: pc.price,
      CPU_type: pc.CPU_type,
      image: pc.image,
    };
    fetch("http://localhost:8000/computers/" + id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(pcData),
    })
      .then((res) => {
        alert("Save Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title">
                <h2>Add New Computer</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="id">ID</label>
                      <input
                        type="text"
                        disabled
                        name="id"
                        id="id"
                        value={id}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="brand">Brand</label>
                      <input
                        type="text"
                        required
                        name="brand"
                        id="brand"
                        value={pc.brand}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="model">Model</label>
                      <input
                        type="text"
                        required
                        name="model"
                        id="model"
                        value={pc.model}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="price">Price</label>
                      <input
                        type="number"
                        required
                        name="price"
                        id="price"
                        value={pc.price}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="CPU_type">CPU</label>
                      <input
                        type="text"
                        required
                        name="CPU_type"
                        id="CPU_type"
                        value={pc.CPU_type}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="image">Image</label>
                      <input
                        type="text"
                        required
                        name="image"
                        id="image"
                        value={pc.image}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
