import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Reservation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setData] = useState("");
    const [time, setTime] = useState("");
    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:4000/api/vl/reservation/send",
                { firstName, lastName, email, phone, date, time },
                {
                    headers: {
                        "Content_Type": "application.jsom",
                    },
                    withCredentials: true,
                }
            );
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone(0);
            setData("");
            setTime("");
            navigate("/success")
        } catch (error) {
            toast.error(error)
        }
    }
    return <section className="reservation" id='reservation'>
        <div className="container">
            <div className="banner">
                <img src="/reservation.png" alt="res" />
            </div>
            <div className="banner">
                <div className="reservation_form_box">
                    <h1>MAKE A RESERVATION</h1>
                    <p> For Further Qoestions, Please Call </p>
                    <form >
                        <div>
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />

                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder='date'
                                value={date}
                                onChange={(e) => setData(e.target.value)}
                            />

                            <input
                                type="text"
                                placeholder='Time'
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder='Phone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />

                        </div>
                        <button type='submit' onClick={handleReservation}>
                            RESERVE NOW("")
                            <span>
                                <HiOutlineArrowNarrowRight />
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}

export default Reservation