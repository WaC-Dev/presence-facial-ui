import React from 'react';

export const CreateEvent = () => {
    return (
        <div className='container'>
            <form className='my-5'>
                <h3>Create Event</h3><hr />
                <div className="row">
                    <div className="col-md-6">
                        <div >
                            <h5>Type d'evenement</h5>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" name="eventTypeRadio" id="exampleRadios1" value="course" checked />
                                    Cours
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" name="eventTypeRadio" id="exampleRadios2" value="examen" />
                                    Examen
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" name="eventTypeRadio" id="exampleRadios2" value="autre" />
                                    Autre
                                </label>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <h5>Nom de l'evenement</h5>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Nom de l'evenement" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h5>Participant de l'evenement</h5>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" />
                                Enseignant
                            </label><br />
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" />
                                Administrateur
                            </label><br />
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" />
                                Groupe 1
                            </label><br />
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" />
                                Goupe 2
                            </label><br />
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" />
                                Groupe 3
                            </label>
                        </div>
                        <div className="mt-2">
                            <h5>Place</h5>
                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option selected value="HEI">HEI - Ivandry</option>
                                <option value="AFT">Alliance Française - Andavamamba</option>
                                <option value="CALL">A distance (Call)</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <button type="submit" className="mt-5 form-control btn btn-lg btn-dark">Submit</button>
            </form>
        </div>
    );
};
