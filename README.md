# Hospital Management System

## Project Overview
The **Hospital Management System** is a full-stack application designed to streamline hospital operations by efficiently managing patients, doctors, appointments, and other essential aspects of healthcare management. This project integrates a powerful backend built with Spring Boot and a dynamic frontend developed using Angular.

---

## Features
- **Patient Management**: Add, update, and delete patient records.
- **Doctor Management**: Manage doctor profiles and schedules.
- **Appointment Scheduling**: Book, update, and cancel appointments.
- **Authentication**: Secure login functionality with role-based access control (e.g., patients cannot access admin-specific controllers).
- **Dashboard**: Overview of hospital operations.
- **Search and Filters**: Quickly find relevant information.
- **Error Handling**: Comprehensive exception handling for robust and user-friendly error reporting.

---

## Tech Stack
### Backend:
- **Spring Boot**: For developing RESTful APIs.
- **Spring Data JPA**: For interacting with the database.
- **Hibernate**: As the ORM framework.
- **MySQL**: Relational database used to store hospital data.
- **MySQL Workbench**: For database management.
- **Postman**: For API testing.

### Frontend:
- **Angular**: For creating a responsive and dynamic user interface.

---

## Exception Handling
### Backend:
- Custom exception classes for specific scenarios:
  - **`AppointmentNotValidException`**: Thrown when appointment data is invalid.
  - **`IdMismatchException`**: Thrown when an entity's ID does not match during updates.
  - **`PaymentNotValidException`**: Thrown when payment details are invalid.
  - **`PrescriptionNotValidException`**: Thrown when prescription data is invalid.
  - **`ReceptionistNotFoundException`**: Thrown when a receptionist is not found in the database.
  - **`ResourceNotFoundException`**: Generic exception for resources not found.
  - **`RoomDuplicateException`**: Thrown when attempting to create a duplicate room.
- Centralized exception handling using `@ControllerAdvice` and `@ExceptionHandler` annotations.
- Error responses structured with clear messages and HTTP status codes.
- Role-based access restrictions enforced using Spring Security.

### Frontend:
- Global error handling in Angular using `HttpInterceptor` for displaying user-friendly error messages.
- Validation errors and API errors are appropriately shown to the user.

---

## API Testing
- APIs were tested using **Postman** to ensure proper functionality and reliability.
- Import the provided Postman collection (if available) to test all endpoints.

---

## Project Structure

### Backend (Spring Boot):
- **Controller Layer**: Handles incoming API requests.
- **Service Layer**: Contains business logic.
- **Repository Layer**: Interfaces with the database.

### Frontend (Angular):
- **Components**: For modular and reusable UI elements.
- **Services**: For HTTP requests and state management.
- **Modules**: For feature-based organization.

---

## Key Entities
### 1. Admin
- Manages overall system operations.
- Responsible for adding and managing doctors, patients, and other users.

### 2. Doctor
- Handles patient consultations and medical records.
- Manages schedules and availability for appointments.

### 3. Patient
- Books appointments and accesses prescriptions and medical records.
- Updates personal information and payment details.
- Restricted from accessing admin-specific functionalities.

### 4. Booking Appointment
- Represents an appointment between a patient and a doctor.
- Includes details such as date, time, and status (e.g., confirmed, canceled).

### 5. Payment
- Handles billing and payment records for patient services.
- Stores transaction details.

### 6. Prescription
- Records medications and treatments prescribed to a patient.
- Linked to patient and doctor entities.

### 7. Receptionist
- Facilitates patient registration and appointment scheduling.
- Acts as a bridge between patients and doctors.

---

## Future Enhancements
- Add role-based authentication (e.g., Admin, Doctor, Patient).
- Implement reporting and analytics dashboards.
- Enable cloud-based database storage.
- Add support for SMS and email notifications.

---
## Acknowledgments
Special thanks to EduBridge for training support and guidance.

