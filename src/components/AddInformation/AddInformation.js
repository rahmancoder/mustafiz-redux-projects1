import React, { useState } from 'react';
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { toast } from "react-toastify";

const AddInformation = ({ informations, addInformation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const checkContactEmailExists = informations.filter((information) =>
            information.email === email ? information : null
        );
        const checkContactPhoneExists = informations.filter((information) =>
            information.phone === phone ? information : null
        );

        if (!email || !name || !phone) {
            return toast.warning("EMpty field fill please");
        }
        if (checkContactEmailExists.length > 0) {
            return toast.error("EMail taken");
        }
        if (checkContactPhoneExists.length > 0) {
            return toast.error("Wrong Number");
        }

        const data = {
            id: informations.length > 0 ? informations[informations.length - 1].id + 1 : 0,
            email,
            name,
            phone,
        };

        addInformation(data);
        toast.success("Added Information Successfully");
        history.push("/");
    };



    return (
        <div className="container-fluid">
            <h1 className="text-center text-danger py-3 display-2">Add Information</h1>
            <div className="row">
                <div className="col-md-6 p-5 mx-auto shadow">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="number"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="btn btn-block btn-dark"
                                type="submit"
                                value="Add Information"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

// export default AddInformation;


const mapStateToProps = (state) => ({
    informations: state,
});
const mapDispatchToProps = (dispatch) => ({
    addInformation: (data) => {
        dispatch({ type: "ADD_INFORMATION", payload: data });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddInformation);