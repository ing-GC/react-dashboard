import Client from "../models/Client.js";
import axios from "axios";

export const index = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.json(clients);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const show = async (req, res) => {
    try {
        const client = await Client.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(client[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const store = async (req, response) => {
    try {
        if (req.header('x-api-key') === undefined) {
            response.status(401).json({ message: 'Unauthorized' });
            return;
        }

        const cardInfo = await axios.get('https://randommer.io/api/Card', {
            headers: {
                "X-Api-Key": req.header('x-api-key')
            }
        })
            .then(res => {
                return {
                    card_number: res.data.cardNumber,
                    card_provider: res.data.type,
                    card_cvv: res.data.cvv,
                    card_pin: res.data.pin
                }
            })
            .catch(error => response.status(error.response.status).json(error.response.data));

        const client = await Client.create({ ...req.body, ...cardInfo });
        response.json({
            "message": "Client created successfully",
            "Client": client
        })
    } catch (error) {
        response.json({ message: error.message });
    }
}

export const update = async (req, res) => {
    try {
        const client = await Client.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Client updated successfully",
            "Client": client
        })
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const destroy = async (req, res) => {
    try {
        await Client.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "Client deleted successfully"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}