abstract class Person {
    firstName: string;
    lastName: string;
    age: number;
    address: string;

    constructor(firstName: string, lastName: string, age: number, address: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }

    details(): void {
        console.log(`name:${this.firstName + ' ' + this.lastName}\n age:${this.age}\n address:${this.address}`);
    }
}

class MedicalStaff extends Person {
    staffID: number;
    position: string;
    department: string;

    constructor(staffID: number, position: string, department: string, firstName: string, lastName: string, age: number, address: string) {
        super(firstName, lastName, age, address);
        this.staffID = staffID;
        this.position = position;
        this.department = department;
    }
}

class Patient extends Person {
    private patientId: number;
    phoneNumber: number;
    emergencyContact: string;
    medicalHistory

    constructor(patientId: number, phoneNumber: number, emergencyContact: string, firstName: string, lastName: string, age: number, address: string, medicalHistory: Appointment[] =[] ) {
        super(firstName, lastName, age, address);
        this.patientId = patientId;
        this.phoneNumber = phoneNumber;
        this.emergencyContact = emergencyContact;
        this.medicalHistory = medicalHistory;
    }

    public getId(): number {
        return this.patientId;
    }

    updateMedicalHistory(appointment:Appointment): void {
        this.medicalHistory.push(appointment);
    }

    details(): void {
        console.log('patient:');
        super.details();
        console.log(`id:${this.patientId}\n phoneNumber:${this.phoneNumber}\n emergencyContact: ${this.emergencyContact}\n medicalHistory:`)
    }
}

class Doctor extends MedicalStaff {
    availability: { start: string, end: string };
    doctorId: number
    specialization: string
    constructor(doctorId: number, firstName: string, lastName: string, specialization: string, age: number, address: string, staffID: number, position: string, department: string, availability: { start: string, end: string }) {
        super(staffID, position, department, firstName, lastName, age, address);
        this.availability = availability;
        this.doctorId = doctorId;
        this.specialization = specialization;
    }

    details(): void {
        console.log('doctor:');
        super.details();
        console.log(`id:${this.doctorId}\n specialization:${this.specialization}\n staffId:${this.staffID}\n position:${this.position}\n department:${this.department}\n availabilityStart:${this.availability.start}\n availabilityEnd:${this.availability.end}`);
    }
}

class Appointment {
    patient: Patient;
    doctor: Doctor;
    date: string;
    time: string;

    constructor(patient: Patient, doctor: Doctor, date: string, time: string) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
    }

    showAppointment(): void {
        console.log(`Appointment Details:`);
        this.patient.details();
        this.doctor.details();
        console.log(`Date: ${this.date}, Time: ${this.time}`);
    }
}

class Hospital {
    patients: Patient[] = [];
    doctors: Doctor[] = [];
    appointments: Appointment[] = [];
    hospitalName: string;

    constructor(hospitalName: string) {
        this.hospitalName = hospitalName;
    }

    addPatient(patient: Patient): void {
        this.patients.push(patient);
    }

    addDoctor(doctor: Doctor): void {
        this.doctors.push(doctor);
    }

    addAppointment(appointment: Appointment): void {
        this.appointments.push(appointment);
    }

    showAllAppointment(): void {
        console.log(`All Appointments:`);
        for (const appointment of this.appointments) {
            appointment.showAppointment();
        }
    }

    appointmentByDoctorId(doctorId: number): void {
        for (const appointment of this.appointments) {
            if (appointment.doctor.staffID === doctorId)
                appointment.showAppointment();
        }
    }

    appointmentByPatientId(patientId: number): void {
        for (const appointment of this.appointments) {
            if (appointment.patient.getId() === patientId)
                appointment.showAppointment();
        }
    }

    appointmentByDate(): void {
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

const patient1 = new Patient(1, 5070050, '123-456-789' , 'Ari', 'Smith', 33, 'Israel');
const patient2 = new Patient(2, 6070660, '987-654-321', 'Lion', 'Dol', 44, 'Israel');
const doctor1 = new Doctor(3, 'Alice', 'Levi', 'Cardiology', 50, 'Israel', 101, 'Cardiologist', 'Cardiology', { start: '08:00 AM', end: '03:00 PM' });
const doctor2 = new Doctor(4, 'Jo', 'Sol', 'Cardiology', 60, 'Israel', 102, 'Cardiologist', 'Cardiology', { start: '09:00 AM', end: '04:00 PM' });
const appointment1 = new Appointment(patient1, doctor1, '15-09-2023', '10:00 AM');
const appointment2 = new Appointment(patient2, doctor2, '10-05-2023', '11:00 AM');

patient1.updateMedicalHistory(appointment1)
patient1.details()

const myHospital = new Hospital("Community Hospital");
myHospital.addPatient(patient1);
myHospital.addPatient(patient2);
myHospital.addDoctor(doctor1);
myHospital.addDoctor(doctor2);
myHospital.addAppointment(appointment1);
myHospital.addAppointment(appointment2);
// myHospital.showAllAppointment();
