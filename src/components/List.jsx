import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const List = () => {
  const [pcData, setPcData] = useState(null);
  const navigate = useNavigate(); // Corrected usage
  useEffect(() => {
    fetch("http://localhost:8000/computers")
      .then((res) => res.json())
      .then((response) => {
        setPcData(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const loadEdit = (id) => {
    navigate("/computer/edit/" + id);
  };

  const loadDetail = (id) => {
    navigate("/computer/detail/" + id);
  };

  const removePc = (id) => {
    if (window.confirm("Do you want to remove ?")) {
      fetch("http://localhost:8000/computers/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Remove Successful !!!");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Computer Lists</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/computer/add" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered table-dark table-striped">
            <thead className="bg-dark text-white">
              <tr>
                <td>Id</td>
                <td>Brand</td>
                <td>Model</td>
                <td>Price</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {pcData &&
                pcData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.brand}</td>
                    <td>{item.model}</td>
                    <td>{item.price}</td>
                    <td className="actions">
                      <a
                        className="btn btn-success"
                        onClick={() => {
                          loadEdit(item.id);
                        }}
                      >
                        Edit
                      </a>
                      <a
                        className="btn btn-danger"
                        onClick={() => {
                          removePc(item.id);
                        }}
                      >
                        Delete
                      </a>
                      <a
                        className="btn btn-primary"
                        onClick={() => {
                          loadDetail(item.id);
                        }}
                      >
                        Detail
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
