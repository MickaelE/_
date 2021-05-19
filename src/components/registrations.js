import React from 'react'

const Registrations = ({ registrations: registrations }) => {
    return (
        <div>
            <center><h1>Registrations List</h1></center>

            {registrations.map((registration) => (
                <div class="card">
                    <div class="card-body">
                         <h5 class="card-title">{registration._id}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{registration.Lag}</h6>
                        <p class="card-text">{registration.personalia.namn_barn}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Registrations