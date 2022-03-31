import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const EditClient = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [last_name, setLastName] = useState('');
    const [last_name_2, setLastName2] = useState('');
    const [date_of_birth, setDateOfBirth] = useState('');
    const [status, setStatus] = useState('');
    const [asigned_analyst, setAnalyst] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const updateClient = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/clients/${id}`, {
            email: email,
            phone: phone,
            name: name,
            last_name: last_name,
            last_name_2: last_name_2,
            date_of_birth: date_of_birth,
            status: status,
            asigned_analyst: asigned_analyst,
        });
        navigate(`/card/client/${id}`);
    }

    useEffect(() => {
        getClientById();
    }, []);

    const getClientById = async () => {
        const response = await axios.get(`http://localhost:5000/clients/${id}`);

        setEmail(response.data.email);
        setPhone(response.data.phone);
        setName(response.data.name);
        setLastName(response.data.last_name);
        setLastName2(response.data.last_name_2);
        setDateOfBirth(response.data.date_of_birth);
        setStatus(response.data.status);
        setAnalyst(response.data.asigned_analyst);
    }

    return (
        <div className="container mt-5 rounded shadow-sm p-5">
            <form onSubmit={updateClient} className="row g-3">
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
                        placeholder="12/05/1995"
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
                <div className="col-md-4">
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
                <div className="col-md-4">
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
                <div className="col-12 text-center pt-4">
                    <button className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default EditClient