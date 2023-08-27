"use strict";
class Person {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    details() {
        console.log(`name:${this.firstName + ' ' + this.lastName}\n age:${this.age}\n address:${this.address}`);
    }
}
class MedicalStaff extends Person {
    constructor(staffID, position, department, firstName, lastName, age, address) {
        super(firstName, lastName, age, address);
        this.staffID = staffID;
        this.position = position;
        this.department = department;
    }
}
class Patient extends Person {
    constructor(patientId, phoneNumber, emergencyContact, firstName, lastName, age, address, medicalHistory = []) {
        super(firstName, lastName, age, address);
        this.patientId = patientId;
        this.phoneNumber = phoneNumber;
        this.emergencyContact = emergencyContact;
        this.medicalHistory = medicalHistory;
    }
    getId() {
        return this.patientId;
    }
    updateMedicalHistory(appointment) {
        this.medicalHistory.push(appointment);
    }
    details() {
        console.log('patient:');
        super.details();
        console.log(`id:${this.patientId}\n phoneNumber:${this.phoneNumber}\n emergencyContact: ${this.emergencyContact}\n medicalHistory:`);
        for (const appointment of this.medicalHistory) {
            appointment.showAppointment();
        }
    }
}
class Doctor extends MedicalStaff {
    constructor(doctorId, firstName, lastName, specialization, age, address, staffID, position, department, availability) {
        super(staffID, position, department, firstName, lastName, age, address);
        this.availability = availability;
        this.doctorId = doctorId;
        this.specialization = specialization;
    }
    details() {
        console.log('doctor:');
        super.details();
        console.log(`id:${this.doctorId}\n specialization:${this.specialization}\n staffId:${this.staffID}\n position:${this.position}\n department:${this.department}\n availabilityStart:${this.availability.start}\n availabilityEnd:${this.availability.end}`);
    }
}
class Appointment {
    constructor(patient, doctor, date, time) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
    }
    showAppointment() {
        console.log(`Appointment Details:`);
        // this.patient.details();
        // this.doctor.details();
        console.log(`Date: ${this.date}, Time: ${this.time}`);
    }
}
class Hospital {
    constructor(hospitalName) {
        this.patients = [];
        this.doctors = [];
        this.appointments = [];
        this.hospitalName = hospitalName;
    }
    addPatient(patient) {
        this.patients.push(patient);
    }
    addDoctor(doctor) {
        this.doctors.push(doctor);
    }
    addAppointment(appointment) {
        this.appointments.push(appointment);
    }
    showAllAppointment() {
        console.log(`All Appointments:`);
        for (const appointment of this.appointments) {
            appointment.showAppointment();
        }
    }
    appointmentByDoctorId(doctorId) {
        for (const appointment of this.appointments) {
            if (appointment.doctor.staffID === doctorId)
                appointment.showAppointment();
        }
    }
    appointmentByPatientId(patientId) {
        for (const appointment of this.appointments) {
            if (appointment.patient.getId() === patientId)
                appointment.showAppointment();
        }
    }
    appointmentByDate() {
        console.log(`Appointments for Today:`);
        const today = new Date();
        const todayDateString = today.toLocaleDateString();
        for (const appointment of this.appointments) {
            if (appointment.date === todayDateString)
                appointment.showAppointment();
        }
    }
}
// Creating instances and adding them to the hospital
const patient1 = new Patient(1, 5070050, '123-456-789', 'Ari', 'Smith', 33, 'Israel');
const patient2 = new Patient(2, 6070660, '987-654-321', 'Lion', 'Dol', 44, 'Israel');
const doctor1 = new Doctor(3, 'Alice', 'Levi', 'Cardiology', 50, 'Israel', 101, 'Cardiologist', 'Cardiology', { start: '08:00 AM', end: '03:00 PM' });
const doctor2 = new Doctor(4, 'Jo', 'Sol', 'Cardiology', 60, 'Israel', 102, 'Cardiologist', 'Cardiology', { start: '09:00 AM', end: '04:00 PM' });
const appointment1 = new Appointment(patient1, doctor1, '15-09-2023', '10:00 AM');
const appointment2 = new Appointment(patient2, doctor2, '10-05-2023', '11:00 AM');
patient1.updateMedicalHistory(appointment1);
patient1.details();
const myHospital = new Hospital("Community Hospital");
myHospital.addPatient(patient1);
myHospital.addPatient(patient2);
myHospital.addDoctor(doctor1);
myHospital.addDoctor(doctor2);
myHospital.addAppointment(appointment1);
myHospital.addAppointment(appointment2);
// myHospital.showAllAppointment();
