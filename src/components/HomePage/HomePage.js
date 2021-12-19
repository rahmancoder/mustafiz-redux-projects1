import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = ({ informations, deleteInformation }) => {
    return (
        <div className="container">
            <div className="row d-flex flex-column">
                <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
                    Add New Information
                </Link>
                <div className="col-md-10 col-sm mx-auto my-4">
                    <table className="table table-hover">
                        <thead className="table-header bg-warning text-white">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {informations.length > 0 ? (
                                informations.map((information, id) => (
                                    <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{information.name}</td>
                                        <td>{information.email}</td>
                                        <td>{information.phone}</td>
                                        <td>
                                            <Link
                                                to={`/edit/${information.id}`}
                                                className="btn btn-sm btn-primary mr-1"
                                            >
                                                Update
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() => deleteInformation(information.id)}
                                                className="btn btn-sm btn-danger"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <th>No Information found</th>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// export default HomePage;

const mapStateToProps = (state) => ({
    informations: state,
}); const mapDispatchToProps = (dispatch) => ({
    deleteInformation: (id) => {
        dispatch({ type: "DELETE_INFORMATION", payload: id });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);