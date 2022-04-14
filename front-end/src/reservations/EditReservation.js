import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";
import ReservationForm from "./ReservationForm";
import { postReservation, editReservation, listReservations } from "../utils/api";

function EditReservation({edit}){
    useEffect(() => {
        if (edit) {
            if (!reservation_id) return null;

            loadReservations()
                .then((response) => response.find((reservation) => reservation.reservation_id === Number(reservation_id)))
                .then(fillFields)
        }

        function fillFields(foundReservation) {
            if (!foundReservation || foundReservation.status !== "booked") {
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

        async function loadReservations() {
            const abortController = new AbortController();
            return await listReservations(null, abortController.signal)
                .catch(setReservationsError)
        }
    }, [edit, reservation_id]);
}

export default EditReservation;