<div align="center">

# 🚀 EmployeeHub AI

### Smart Employee Management System

<p>
  A modern full-stack employee management platform built with
  <strong>React + Django REST Framework</strong>.
</p>

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=24&duration=3000&pause=1000&color=6366F1&center=true&vCenter=true&width=600&lines=Employee+Management+System;React+%2B+Django+REST+Framework;JWT+Authentication;Leave+Request+Management;Built+for+Real+World+Use" />

<br/><br/>

![React](https://img.shields.io/badge/React-2026-blue?style=for-the-badge&logo=react)
![Django](https://img.shields.io/badge/Django-REST-092E20?style=for-the-badge&logo=django)
![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python)
![JWT](https://img.shields.io/badge/JWT-Authentication-black?style=for-the-badge&logo=jsonwebtokens)

</div>

---

## ✨ About The Project

**EmployeeHub AI** is a full-stack employee management application designed to demonstrate how a modern React frontend communicates with a Django REST backend.

The application provides employee management, authentication, and leave request functionality through a clean and responsive interface.

The project focuses on building a real-world architecture rather than a simple CRUD application.

---

## 🎯 Features

### 🔐 Authentication

- JWT-based authentication
- Login system
- Access & refresh tokens
- Protected API endpoints
- Automatic access-token refresh
- Logout functionality

### 👨‍💼 Employee Management

- Add employees
- View employees
- Update employees
- Delete employees
- Employee details
- Department information
- Salary management

### 🏖️ Leave Management

- Submit leave requests
- Select employees from the UI
- Casual, Sick and Emergency leave
- Start and end dates
- Leave reason
- Pending / Approved / Rejected status
- View previous leave requests

### ⚡ REST API

- Django REST Framework
- Model serializers
- APIView / Generic API views
- JWT authentication
- Request validation
- Database integration

---

## 🏗️ Architecture

```text
                    ┌──────────────────────┐
                    │      React UI        │
                    │                      │
                    │  Components / Pages  │
                    └──────────┬───────────┘
                               │
                               │ Axios
                               ▼
                    ┌──────────────────────┐
                    │    Django REST API   │
                    │                      │
                    │ Views + Serializers  │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Django ORM       │
                    │                      │
                    │ Models + Validation  │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      Database        │
                    └──────────────────────┘
