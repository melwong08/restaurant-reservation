import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";
import {createReservation, editReservation, listReservations} from "../utils/api";

function NewReservation ({loadDashboard, edit}){
    const history = useHistory();
    const {reservation_id} = useParams();

    const [reservationsError, setReservationsError] = useState(null);
    const [errors, setErrors] = useState([]);
    const [apiError, setApiError] = useState(null);

    const initalFormState = {
        first_name: "",
        last_name: "",
        mobile_number: "",
        reservation_date: date,
        reservation_time: "12:00",
        people: 1
    }
    const [formData, setFormData] = useState(initialFormState);
    
    useEffect(() => {
        if(edit){
            if(!reservation_id) return null;

            loadReservations()
            .then((response) => response.find(reservation) => reservation.reservation_id === Number(reservation_id))
            .then(fillFields);
        }

        function fillFields(foundReservation) {
			if(!foundReservation || foundReservation.status !== "booked") {
				return <p>Only booked reservations can be edited.</p>;
			}

			const date = new Date(foundReservation.reservation_date);
			const dateString = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + (date.getDate())).slice(-2)}`;
	
			setFormData({
				first_name: foundReservation.first_name,
				last_name: foundReservation.last_name,
				mobile_number: foundReservation.mobile_number,
				reservation_date: dateString,
				reservation_time: foundReservation.reservation_time,
				people: foundReservation.people,
			});
		}

        async function loadReservations(){
            const abortController = new AbortController();
            return await listReservations(null, abortController.signal)
            .catch(setReservationsError)
        }
    }, [edit, reservation_id]);

    const handleChange = ({target}) => {
        let value = target.value;

        if(target.name === "people"){
            if(value < 1){
                value = 1;
                value = Number(value);
            }
        }
            setFormData({
                ...formData,
                [target.name]: value,
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postReservation(formData).then(response => {
            history.push(`/dashboard?date=$(formData.reservation_date)`)
        })
        .catch((error) => {
            setReservationsError(error)
        })
    }

    return(
        <div>
            <h1>New Reservation Form</h1>
            <ErrorAlert error={reservationsError} /> 
            <form onSubmit={handleSubmit}>
                <label htmlFor="first_name">
                    Enter Your First Name:
                    <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        onChange={handleChange}
                        value={formData.first_name} />
                </label>
                <label htmlFor="last_name">
                    Enter Your Last Name:
                    <input
                        id="last_name"
                        type="text"
                        name="last_name"
                        onChange={handleChange}
                        value={formData.last_name} /> 
                </label>
                <label htmlFor="mobile_number">
                    Enter Mobile Number:
                    <input  
                        id="mobile_number"
                        type="tel"
                        name="mobile_number"
                        onChange={handleChange}
                        value={formData.mobile_number} /> 
                </label>
                <label htmlFor="reservation_date">
                    Select Reservation Date:
                    <input
                        id="reservation_date"
                        type="date"
                        name="reservation_date"
                        onChange={handleChange}
                        value={formData.reservation_date} />
                </label>
                <label htmlFor="reservation_time">
                    Select Reservation Time:
                    <input
                        id="reservation_time"
                        type="time"
                        name="reservation_time"
                        onChange={handleChange}
                        value={formData.reservation_time} /> 
                </label>
                <label htmlFor="people">
                    Set number of guests:
                    <input
                        id="people"
                        type="number"
                        name="people"
                        onChange={handleChange}
                        value={formData.people} />
                </label>
                <button type="submit">Submit</button>
            </form>
            <button type="cancel" onClick={()=>history.goBack()}>Cancel</button>
        </div>
    )
}

export default NewReservation;