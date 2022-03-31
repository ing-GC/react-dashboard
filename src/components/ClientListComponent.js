import { useState, useEffect } from 'react';
import Sidebar from "./SidebarComponent";
import { Link } from "react-router-dom";
import Header from "./HeaderComponent";
import axios from "axios";

const Main = () => {

    const [clients, setClients] = useState([]);

    useEffect(() => {
        getClients();
    }, []);

    const getClients = async () => {
        const response = await axios.get("http://localhost:5000/clients");
        setClients(response.data);
    }

    const deleteClient = async (id) => {
        await axios.delete(`http://localhost:5000/clients/${id}`)
        getClients();
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
                            Here you can find all the clients
                        </p>
                        <div className="row">
                            <div className="col-12 col-xl-11 mb-4 mb-lg-0">
                                <div className="card shadow-sm">
                                    <div className="d-flex justify-content-between card-header py-3">
                                        <h5 className="">Latest transactions</h5>
                                        <Link to="/add" className="btn btn-primary">New Client</Link>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-striped table-inverse table-responsive">
                                                <thead className="thead-inverse">
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Price</th>
                                                        <th>Status</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {clients.map((client) => (
                                                        <tr key={client.id}>
                                                            <td>{client.id}</td>
                                                            <td>{`${client.name} ${client.last_name}`}</td>
                                                            <td>{client.email}</td>
                                                            <td className='text-lowercase'>
                                                                <span className="badge rounded-pill bg-primary">{client.status}</span>
                                                            </td>
                                                            <td>
                                                                <Link to={`/card/client/${client.id}`} className="btn btn-sm btn-primary mr-1">Details</Link>
                                                                <button onClick={() => deleteClient(client.id)} className="btn btn-sm btn-danger">Delete</button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
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

export default Main