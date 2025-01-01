import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
      patientName: '',
      email: '',
      phoneNumber: '',
      sex: 'Male',
      specialization: '',
      hospital: '',
      date: '',
      medications: 'No',
      medicationList: '',
  });

  const handleChange = ({ target: { name, value } }) => {
      setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = ({ target: { value } }) => {
      setFormData({ ...formData, sex: value });
  };

  const handleMedicationRadioChange = ({ target: { value } }) => {
      setFormData({ ...formData, medications: value });
  };


  const handleSubmit = () => {
      console.log('Form Data:', formData);
  }

  return (
      <div className="appointment-form-container">
          <div className="appointment-form-overlay">
              <div className="form-wrapper">
                  <div className="form-content">
                      <h2 className="mb-4 text-center">HEALTH APPOINTMENT FORM</h2>
                      <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                              <input
                                  type="text"
                                  className="form-control form-control-lg"
                                  placeholder="Patient's Name"  
                                  name="patientName"
                                  value={formData.patientName}
                                  onChange={handleChange}
                                  required
                              />
                          </div>
                          <div className="mb-3">
                              <input
                                  type="email"
                                  className="form-control form-control-lg"
                                  placeholder="Email" 
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                              />
                          </div>
                          <div className="mb-3">
                              <input
                                  type="tel"
                                  className="form-control form-control-lg"
                                  placeholder="Phone Number"  
                                  name="phoneNumber"
                                  value={formData.phoneNumber}
                                  onChange={handleChange}
                                  required
                              />
                          </div>

                          <div className="mb-3">
                              <label className="form-label">Sex :</label>
                              <div className="form-check form-check-inline">
                                  <input
                                      className="form-check-input"
                                      type="radio"
                                      name="sex"
                                      id="male"
                                      value="Male"
                                      checked={formData.sex === "Male"}
                                      onChange={handleRadioChange}
                                      required
                                  />
                                  <label className="form-check-label" htmlFor="male">
                                      Male
                                  </label>
                              </div>
                              <div className="form-check form-check-inline">
                                  <input
                                      className="form-check-input"
                                      type="radio"
                                      name="sex"
                                      id="female"
                                      value="Female"
                                      checked={formData.sex === "Female"}
                                      onChange={handleRadioChange}
                                      required
                                  />
                                  <label className="form-check-label" htmlFor="female">
                                      Female
                                  </label>
                              </div>
                          </div>

                          <div className="mb-3">
                              <label className="form-label">Taking Any Medications Currently?*</label>
                              <div className="form-check form-check-inline">
                                  <input
                                      className="form-check-input"
                                      type="radio"
                                      name="medications"
                                      id="yes"
                                      value="Yes"
                                      checked={formData.medications === "Yes"}
                                      onChange={handleMedicationRadioChange}
                                      required
                                  />
                                  <label className="form-check-label" htmlFor="yes">
                                      Yes
                                  </label>
                              </div>
                              <div className="form-check form-check-inline">
                                  <input
                                      className="form-check-input"
                                      type="radio"
                                      name="medications"
                                      id="no"
                                      value="No"
                                      checked={formData.medications === "No"}
                                      onChange={handleMedicationRadioChange}
                                      required
                                  />
                                  <label className="form-check-label" htmlFor="no">
                                      No
                                  </label>
                              </div>
                          </div>

                          {formData.medications === "Yes" && (
                              <div className="mb-3">
                                  <input
                                      type="text"
                                      className="form-control form-control-lg"
                                      placeholder="Medication List"  
                                      name="medicationList"
                                      value={formData.medicationList}
                                      onChange={handleChange}
                                      required
                                  />
                              </div>
                          )}

                          <div className="d-flex justify-content-center">
                              <button type="submit" className="btn btn-primary btn-lg">
                                  Book Appointment
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default AppointmentForm;