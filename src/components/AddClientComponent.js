import { useNavigate } from 'react-router-dom';
import Sidebar from "./SidebarComponent";
import Header from "./HeaderComponent";
import { useState } from 'react';
import axios from "axios";

const AddClient = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [last_name, setLastName] = useState("");
    const [last_name_2, setLastName2] = useState("");
    const [date_of_birth, setDateOfBirth] = useState("");
    const [status, setStatus] = useState("");
    const [asigned_analyst, setAnalyst] = useState("");
    const navigate = useNavigate();

    const saveClient = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/clients", {
            email: email,
            phone: phone,
            name: name,
            last_name: last_name,
            last_name_2: last_name_2,
            date_of_birth: date_of_birth,
            status: status,
            asigned_analyst: asigned_analyst,
        }, {
            headers: {
                "X-Api-Key": "f3b80c8d2c6a478e89445e919e625fff"
            }
        });

        navigate("/");
    }

    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
                        <h1 className="h4 mt-5 pt-5">Clients Dashboard</h1>
                        <p>
                            Here you can create new clients
                        </p>
                        <div className="row">
                            <div className="col-12 col-xl-11 mb-4 mb-lg-0">
                                <div className="card shadow-sm">
                                    <div className="d-flex justify-content-between card-header py-3">
                                        <h5 className="">Create new Client</h5>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={saveClient} className="row g-3">
                                            <div className="col-md-4">
                                                <label htmlFor="name" className="form-label">Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Gerardo"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="lastName"
                                                    placeholder="Gallardo"
                                                    value={last_name}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="lastName2" className="form-label">Last Name 2</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="lastName2"
                                                    placeholder="Cordero"
                                                    value={last_name_2}
                                                    onChange={(e) => setLastName2(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="birthday" className="form-label">Birthday</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="birthday"
                                                    value={date_of_birth}
                                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="gerardogcordero@outlook.com"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="phone" className="form-label">Phone</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="phone"
                                                    placeholder="4928692161"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="status" className="form-label">Status</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="status"
                                                    placeholder="PENDING, IN PROCESS, COMPLETED"
                                                    value={status}
                                                    onChange={(e) => setStatus(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="analyst" className="form-label">Asigned Analyst</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="analyst"
                                                    placeholder="Caroline"
                                                    value={asigned_analyst}
                                                    onChange={(e) => setAnalyst(e.target.value)}
                                                />
                                            </div>
                                            <div className="text-center pt-4 d-grid gap-2 col-3 mx-auto">
                                                <button className="btn btn-primary">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default AddClient