import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from "./SidebarComponent";
import { Link } from "react-router-dom";
import Header from "./HeaderComponent";
import icon from "../ColorIcon.png";
import axios from "axios";

const CardClient = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [last_name, setLastName] = useState('');
    const [last_name_2, setLastName2] = useState('');
    const [date_of_birth, setDateOfBirth] = useState('');
    const [asigned_analyst, setAnalyst] = useState('');
    const [card_number, setCardNumber] = useState('');
    const [card_cvv, setCardCVV] = useState('');
    const [card_pin, setCardPin] = useState('');
    const { id } = useParams();

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
        setAnalyst(response.data.asigned_analyst);
        setCardNumber(response.data.card_number);
        setCardCVV(response.data.card_cvv);
        setCardPin(response.data.card_pin);

    }

    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
                        <div className="row pt-5 mt-5">
                            <div className="col-sm-12 col-md-10 col-lg-6 mx-auto">
                                <div className="p-5 shadow-sm border rounded">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-10 col-lg-10">
                                                <div className="row">
                                                    <div className="col-sm-2">
                                                        <img src={icon} alt="ColorIcon" className="card-image" />
                                                    </div>
                                                    <div className="col-sm-10 col-md-10 col-lg-10 p-0">
                                                        <p className="card-title mb-0">{`${name} ${last_name} ${last_name_2}`}</p>
                                                        <small className="fw-light mb-0 pt-0">ID: {id}</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-2 col-lg-2">
                                                <div className="dropdown open">
                                                    <button className="btn btn-primary btn-sm dropdown-toggle" type="button" id="triggerId"
                                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ESTATUS
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="triggerId">
                                                        <button className="dropdown-item" href="#">IN PROCESS</button>
                                                        <button className="dropdown-item text-success" href="#">COMPLETED</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row pt-3">
                                            <div className="col-lg-8">
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                                        <p className="fw-light mb-0">MAIL</p>
                                                        <p>{email}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                                        <p className="fw-light mb-0">FECHA DE NACIMIENTO</p>
                                                        <p>{date_of_birth}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                                        <p className="fw-light mb-0">TELÉFONO</p>
                                                        <p>{phone}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                                        <p className="fw-light mb-0 pb-0">ANALISTA ASIGNADO</p>
                                                        <p className="pt-0">{asigned_analyst}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 bg-card-info p-5 rounded d-none d-lg-block">
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                                        <p className="fw-light mb-0">FULL NAME</p>
                                                        <p>{`${name} ${last_name} ${last_name_2}`}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                                        <p className="fw-light mb-0">CARD NUMBER</p>
                                                        <p>{card_number}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <p className="fw-light mb-0">CVV</p>
                                                        <p>{card_cvv}</p>
                                                    </div>
                                                    <div className="col-4">
                                                        <p className="fw-light mb-0">PIN</p>
                                                        <p>{card_pin}</p>
                                                    </div>
                                                    <div className="col-4">
                                                        <p className="fw-light mb-0">EXP</p>
                                                        <p>12/22</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-lg-12 pt-3 d-flex justify-content-end">
                                                <Link to={`/edit/${id}`} className="edit-info-link">
                                                    EDITAR
                                                </Link>
                                            </div>
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

export default CardClient