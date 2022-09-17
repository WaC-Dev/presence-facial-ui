import React from 'react';

export const EventList = () => {
    return (
        <div className='container'>
            <h3>Liste des evenements</h3><hr />
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Type</th>
                    <th scope="col">Date</th>
                    <th scope="col">Place</th>
                    <th scope="col">Participant</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Event01</th>
                        <td>Cours de PROG1</td>
                        <td>Cours</td>
                        <td>2022-09-14 à 08:00</td>
                        <td>HEI - Ivandry</td>
                        <td>Groupe 1</td>
                    </tr>
                    <tr>
                        <th scope="row">Event02</th>
                        <td>Cours de Français</td>
                        <td>Cours</td>
                        <td>2022-09-14 à 08:00</td>
                        <td>Alliance Française</td>
                        <td>Groupe 2</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
};
