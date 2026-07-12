---
title: Basics Of FastAPI In Python
categories: random_stuff
tags: [fastapi, backend, async, databases]
---

# The Comprehensive Guide to Modern API Development with FastAPI and SQLAlchemy

Hello Everyone! Today we are shifting into modern backend design **FastAPI**.

While Flask is an excellent synchronous framework, **FastAPI** is a cutting-edge, high-performance web framework designed from the ground up for building production-ready APIs using modern Python features. It leverages asynchronous execution (`async`/`await`), automatic structural data validation via **Pydantic**, and native documentation generation out of the box.

Let's break down how to rebuild our entire backend pipeline using FastAPI, exploring why it has become the standard for modern enterprise development.

## 1. The ASGI Server Architecture: Why `uvicorn main:app --reload`?

In Flask, we used a WSGI (Web Server Gateway Interface) development server, which handles requests sequentially (one after the other). FastAPI uses **ASGI** (Asynchronous Server Gateway Interface), which is designed to handle thousands of concurrent incoming network connections simultaneously.

When you run `uvicorn main:app --reload` in your terminal, you are launching **Uvicorn**, a lightning-fast ASGI server wrapper.

### Why Do We Run Uvicorn?

* **Asynchronous Concurrency:** Traditional servers block a worker thread whenever a request is waiting on something slow (like a slow database query or an external API call). An ASGI server pauses the waiting request, handles hundreds of other incoming requests in the meantime, and resumes the original request the millisecond the database answers.
* **The Application Reference (`main:app`):** `main` tells Uvicorn to look inside your `main.py` script file, and `app` points directly to the instantiated FastAPI object inside it.
* **`--reload` (Hot Swapping):** Monitors your code changes. The exact instant you hit save, the Uvicorn workers reboot safely in milliseconds.

---

## 2. HTTP Operations, Status Codes, and Routes in FastAPI

FastAPI handles routing explicitly, using standard Python type hints to ensure data validation before it ever enters your backend functions.

### Operations and Decorator Syntax

FastAPI maps HTTP actions directly onto decorator methods named after the action itself (e.g., `@app.get()`, `@app.post()`, `@app.put()`, `@app.delete()`).

### Returning Explicit Status Codes

Instead of passing numbers or manual tuples back, FastAPI provides a clean `status` module that makes your code highly readable and readable.

```python
from fastapi import FastAPI, status

app = FastAPI()

@app.get("/health", status_code=status.HTTP_200_OK)
def health_check():
    return {"status": "operational", "message": "Server is running smoothly."}

```

---

## 3. Advanced Dynamic Routing and Data Extraction

FastAPI treats path parameters and query parameters with strict structural precision. It reads your function signature and automatically converts and validates incoming data types.

```python
from fastapi import FastAPI, Path, Query

app = FastAPI()

# 1. Dynamic Path Parameter with Type Validation
@app.get("/items/{item_id}")
def read_item(item_id: int):
    # FastAPI automatically throws a clean '422 Unprocessable Entity' error 
    # if a user tries to send a string like "/items/abc" instead of an integer.
    return {"item_id": item_id, "type": type(item_id).__name__}

# 2. Query Parameters (Extracted automatically from URL query strings)
@app.get("/search")
def search_database(q: str = None, limit: int = 10):
    # Matches URLs like: /search?q=python&limit=5
    return {"query": q, "limit": limit}

```

---

## 4. Input Validation Layer: Pydantic Schemas

One of FastAPI's greatest strengths is its native integration with **Pydantic**.

### What is a Pydantic Model?

When users submit `POST` form data or complex JSON payloads, we need a clean, structured way to validate the data before processing it. A Pydantic model defines the exact shape, structural rules, and data types that the incoming request payload **must** match.

```python
from typing import Optional
from pydantic import BaseModel, EmailStr, Field

# Define the structural schema blueprint for incoming registration requests
class UserSignUpSchema(BaseModel):
    username: str = Field(..., min_length=3, max_length=20)
    email: str
    age: int = Field(..., ge=18) # Age must be greater than or equal to 18
    premium_member: bool = False

```

---

## 5. Capturing Request Data (`Body` Payload vs. HTML Forms)

FastAPI is highly optimized for JSON API data exchange out of the box, but it can easily process classic HTML form submissions by installing the `python-multipart` module.

Here is how to capture both JSON and Form inputs side-by-side using the same Pydantic schema logic:

```python
from fastapi import FastAPI, Form, Depends
from pydantic import BaseModel

app = FastAPI()

class StudentPayload(BaseModel):
    name: str
    course: str

# A. Capturing a raw JSON Payload (Standard API behavior)
@app.post("/students/json")
def add_student_json(payload: StudentPayload):
    return {"source": "JSON Body", "received_data": payload.dict()}

# B. Capturing traditional HTML Form Data (Web Form submission behavior)
# We use Depends to unpack form elements directly into our schema layout cleanly
@app.post("/students/form")
def add_student_form(name: str = Form(...), course: str = Form(...)):
    return {"source": "HTML Form", "name": name, "course": course}

```

---

## 6. Asynchronous Database Integrations with SQLAlchemy ORM

To fully leverage FastAPI’s high-performance architecture, your database layer should ideally support asynchronous operations. We will use the async features of **SQLAlchemy** to build an isolated, non-blocking database pipeline.

### The Async Complete Data Pipeline Setup

```python
import os
from fastapi import FastAPI, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy import Column, Integer, String, select
from pydantic import BaseModel

# 1. Initialize FastAPI Application
app = FastAPI(title="Async FastAPI Database Pipeline")

# 2. Database Architectural Configurations (Using Async SQLite driver)
DATABASE_URL = "sqlite+aiosqlite:///./fastapi_app.db"

engine = create_async_engine(DATABASE_URL, echo=True)
AsyncSessionLocal = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)
Base = declarative_base()

# 3. SQLAlchemy Database Model Class Definition
class DBStudent(Base):
    __tablename__ = "students"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    course = Column(String, nullable=False)

# 4. Initialize Database Tables on Startup Loop Context
@app.on_event("startup")
async def startup_database_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

# 5. Dependency Injection Pattern to manage Database Sessions safely
async def get_db_session():
    async with AsyncSessionLocal() as session:
        yield session # Yield ensures the session cleanly closes after the request completes

# 6. Pydantic Validation Schema for Request Data Inputs
class StudentCreateSchema(BaseModel):
    name: str
    course: str

# 7. Complete Core Write Route Integration
@app.post("/students", status_code=status.HTTP_201_CREATED)
async def create_student_record(payload: StudentCreateSchema, db: AsyncSession = Depends(get_db_session)):
    # Instantiate database model using data validated by Pydantic
    new_student = DBStudent(name=payload.name, course=payload.course)
    
    db.add(new_student)
    await db.commit()       # Await the database write operation without blocking the server
    await db.refresh(new_student)
    return new_student

# 8. Complete Core Read Route Integration
@app.get("/students")
async def fetch_all_students(db: AsyncSession = Depends(get_db_session)):
    # Execute query using an explicit select statement
    result = await db.execute(select(DBStudent))
    students_list = result.scalars().all()
    return students_list

```

---

## 7. Session Cookies vs. Stateless JWT Architecture

In Flask, we relied on server-side sessions, where the server keeps track of logged-in users by storing state data in memory or files. For modern APIs, FastAPI shifts to a stateless **JWT (JSON Web Token)** architecture.

### Why Use JWT Over Server Sessions?

* **Stateless Scaling:** In a stateless setup, the server does not save any session data in its memory. Instead, once a user logs in, the server generates a signed cryptographic token called a JWT and hands it to the browser.
* **Self-Contained Data:** The client attaches this token to the header of every subsequent request. The server simply verifies the token's signature using its secret key. If the signature is valid, the request is instantly authorized, making it highly scalable across multi-server networks.

---

## 8. Implementing Security: Authentication & Authorization

Let's build a secure authentication pipeline using JWT tokens. To make this work seamlessly, we will use FastAPI's built-in OAuth2 security utilities (`OAuth2PasswordBearer`).

```python
from datetime import datetime, timedelta
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import jwt, JWTError
from pydantic import BaseModel

app = FastAPI()

# Security Configurations
SECRET_KEY = "super_high_level_production_secret_key_salt"
ALGORITHM = "HS256"
TOKEN_EXPIRATION_MINUTES = 30

# Secure security gateway locator target configuration
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# --- TOKEN GENERATION UTILITY ---
def create_access_token(data: dict):
    payload_to_encode = data.copy()
    expire_time = datetime.utcnow() + timedelta(minutes=TOKEN_EXPIRATION_MINUTES)
    payload_to_encode.update({"exp": expire_time})
    return jwt.encode(payload_to_encode, SECRET_KEY, algorithm=ALGORITHM)

# --- MIDDLEWARE AUTHENTICATION GATE DEPENDENCY ---
async def get_current_user_gate(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate signature credentials. Please log in again.",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        # Decode the cryptographically signed JWT token payload
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        role: str = payload.get("role")
        if username is None:
            raise credentials_exception
        return {"username": username, "role": role}
    except JWTError:
        raise credentials_exception

# --- ROUTES ---

@app.post("/token")
def authenticate_user(form_data: OAuth2PasswordRequestForm = Depends()):
    # Simulated database validation check
    if form_data.username == "vipin" and form_data.password == "secure123":
        # Generate token payload containing identity markers and authorization roles
        token = create_access_token(data={"sub": form_data.username, "role": "admin"})
        return {"access_token": token, "token_type": "bearer"}
    
    raise HTTPException(status_code=400, detail="Incorrect username or password configuration.")

@app.get("/admin/panel")
def view_admin_panel(current_user: dict = Depends(get_current_user_gate)):
    # Authorization Access Check
    if current_user["role"] != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, 
            detail="Access Denied: You do not have sufficient authorization privileges."
        )
        
    return {"message": f"Welcome back Administrator {current_user['username']}! Opening control systems..."}

```

---

## 9. Automatic Interactive Documentation (Swagger UI)

One of the most useful out-of-the-box features of FastAPI is its automatic interactive documentation.

The moment you declare your Pydantic schemas and add type hints to your routes, FastAPI automatically generates a complete openAPI documentation portal for your project.

### How to Access the Docs Portal

While your Uvicorn server is running locally, open your web browser and navigate to:

* **Swagger UI Documentation:** `http://127.0.0.1:8000/docs` (An interactive testing dashboard where you can run live test queries directly from your browser).
* **ReDoc Documentation:** `http://127.0.0.1:8000/redoc` (A beautifully clean, structured corporate documentation layout).