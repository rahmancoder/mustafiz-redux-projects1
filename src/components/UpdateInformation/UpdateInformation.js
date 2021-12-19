import React from 'react';
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import { connect } from "react-redux";

const UpdateInformation = ({ informations, updateInformation }) => {

    const { id } = useParams();
    const history = useHistory();
    const currentInformation = informations.find(
        (information) => information.id === parseInt(id)
    );

    useEffect(() => {
        setName(currentInformation.name);
        setEmail(currentInformation.email);
        setPhone(currentInformation.phone);
    }, [currentInformation]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const checkContactEmailExists = informations.filter((information) =>
            information.email === email && information.id !== currentInformation.id
                ? information
                : null
        );
        const checkContactPhoneExists = contacts.filter((information) =>
            information.phone === phone && contact.id !== currentInformation.id
                ? information
                : null
        );

        if (!email || !name || !phone) {
            return toast.warning("EMpty Fields please fill");
        }
        if (checkContactEmailExists.length > 0) {
            return toast.error("Email Taken");
        }
        if (checkContactPhoneExists.length > 0) {
            return toast.error("Number Wrong");
        }

        const data = {
            id: currentInformation.id,
            email,
            name,
            phone,
        };

        updateInformation(data);
        toast.success("Update Information Successfully");
        history.push("/");
    };



    return (
        <div className="container">
            <div className="row d-flex flex-column">
                <button
                    className="btn btn-dark ml-auto my-5"
                    onClick={() => history.push("/")}
                >
                    Go back
                </button>
                <div className="col-md-6 mx-auto shadow p-5">
                    {currentContact ? (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={name}
                                    placeholder={"Name"}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={email}
                                    placeholder={"Email"}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={phone}
                                    placeholder={"Phone"}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="form-group d-flex align-items-center justify-content-between my-2">
                                <button type="submit" className="btn btn-primary">
                                    Update Informations
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => history.push("/")}
                                >
                                    cancel
                                </button>
                            </div>
                        </form>
                    ) : (
                        <h1 className="text-center">No Information Found</h1>
                    )}
                </div>
            </div>
        </div>
    );
};

// export default UpdateInformation;


const mapStateToProps = (state) => ({
    informations: state,
});
const mapDispatchToProps = (dispatch) => ({
    updateInformation: (data) => {
        dispatch({ type: "UPDATE_INFORMATION", payload: data });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateInformation);