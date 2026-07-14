---
date: '2026-01-05'
tags:
- random_stuff
- flask
- backend
- database
- python
title: Basics Of Flask In Python
---

## 1. The Development Server: Why Do We Run `flask run`?

When building a website, your Python script cannot talk directly to incoming web traffic out of the box. It needs a gateway module to listen to network ports.

When you execute the terminal command `flask run` (or invoke `app.run()`), Flask initializes a built-in, local **Development Web Server**.

### What Happens Behind the Scenes?

* **Port Binding:** The server occupies a specific software gateway on your machine—typically **Port 5000** on your local loopback address (`127.0.0.1` or `localhost`).
* **The Infinite Loop:** The server runs a continuous loop, monitoring that port. When a browser sends a request, the server intercepts the network packets and hands them over to your Python code.
* **Hot Reloading / Debug Mode:** When debug mode is active, the server monitors your files. The instant you save a change, it restarts itself automatically, allowing you to see updates instantly without manual resets.

---

## 2. HTTP Methods, Status Codes, and Routes

To process incoming traffic, your server needs to know *where* a user is going and *what* action they want to perform.

### What is a Route?

A **Route** is a URL path pattern mapped directly to a specific Python function. When a user visits that path, Flask intercepts the URL and executes the associated function (called a **View Function**).

### HTTP Methods (Actions)

Every web request specifies an action type. The two most common methods are:

* **`GET`:** Used exclusively to request and retrieve data from the server. It should not modify the application state.
* **`POST`:** Used to send data (like form submissions or file uploads) to the server to create or update resources.

### HTTP Status Codes

When your server sends a response back to the client, it includes a three-digit numerical flag indicating the outcome of the request:

| Status Range | Category | Common Examples |
| --- | --- | --- |
| **`2xx`** | **Success** | `200 OK` (Request succeeded), `201 Created` (Resource built) |
| **`3xx`** | **Redirection** | `302 Found` (Temporary redirect to another page) |
| **`4xx`** | **Client Errors** | `400 Bad Request`, `401 Unauthorized`, `404 Not Found` (Path doesn't exist) |
| **`5xx`** | **Server Errors** | `500 Internal Server Error` (Your Python code crashed) |

---

## 3. Dynamic Routing

Static routes look for an exact match (like `/about`). However, real-world platforms need routes that change dynamically based on user input, like looking up a specific profile ID (`/user/4`).

**Dynamic Routing** allows you to embed variable placeholders directly inside your URL rule layouts using angle brackets. Flask extracts these variables from the path and passes them straight into your function as keyword arguments.

```python
from flask import Flask

app = Flask(__name__)

# Dynamic route extracting an integer value
@app.route('/user/<int:user_id>')
def show_user_profile(user_id):
    return f"Displaying records for User ID: {user_id}"

# Dynamic route extracting a string value
@app.route('/category/<string:name>')
def show_category(name):
    return f"Category Page: {name.upper()}"

if __name__ == "__main__":
    app.run(debug=True)

```

---

## 4. UI Layering: Jinja2 Templating Engine

Returning raw text strings from your Python code isn't practical for building real websites. We need a way to return structured HTML pages dynamically. Flask uses the **Jinja2 Templating Engine** to mix dynamic Python values directly into static HTML files.

Your HTML template files must live inside a specific folder named **`templates`** right next to your script.

### Essential Jinja Syntax Tags

* **`{{ expression }}` (Interpolation):** Prints the value of a variable or expression directly onto the page.
* **`{% logic_block %}` (Control Flow):** Executes logical operations like loops (`for`) and conditions (`if`).

### Sample Template: `templates/gallery.html`

```html
<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>
    <h1>Welcome, {{ username }}!</h1>

    {% if items %}
        <ul>
        {% for item in items %}
            <li>Product: {{ item }}</li>
        {% endfor %}
        </ul>
    {% else %}
        <p>No products found in storage.</p>
    {% endif %}
</body>
</html>

```

### Flask Render Implementation:

```python
from flask import Flask, render_template

@app.route('/dashboard')
def dashboard():
    user = "Vipin"
    products = ["Laptop", "Mouse", "Keyboard"]
    # Renders the template and passes Python variables into it
    return render_template('gallery.html', username=user, items=products)

```

---

## 5. Capturing User Inputs: Form Submissions (`GET` vs. `POST`)

To handle data sent by users through HTML forms, we need Flask's global **`request`** utility object. How you read this data depends entirely on the HTTP method used by the form.

### A. Reading `GET` Data via Query Strings

When a form uses `method="GET"`, the input fields are appended directly onto the end of the URL as a query string (e.g., `/search?query=python`).

* **Capture Tool:** **`request.args.get('key_name')`**

### B. Reading `POST` Data via Form Payloads

When a form uses `method="POST"`, the data is safely packaged inside the body payload of the network request, keeping it hidden from the browser address bar.

* **Capture Tool:** **`request.form.get('key_name')`**

### The Complete Data Sequence Implementation

First, let's create our input form template: `templates/register.html`

```html
<!DOCTYPE html>
<html>
<body>
    <h2>User Registration Form (POST)</h2>
    <form action="/submit-form" method="POST">
        <label>Username:</label>
        <input type="text" name="user_field">
        <button type="submit">Register</button>
    </form>

    <h2>Search Archive (GET)</h2>
    <form action="/submit-form" method="GET">
        <label>Query:</label>
        <input type="text" name="search_field">
        <button type="submit">Search</button>
    </form>
</body>
</html>

```

Next, let's process both forms in our Python backend script:

```python
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('register.html')

@app.route('/submit-form', methods=['GET', 'POST'])
def handle_form_submission():
    if request.method == 'POST':
        # Capture input data hidden inside the POST body payload
        username = request.form.get('user_field')
        return f"[POST SUCCESS] Saved User: {username}"
        
    elif request.method == 'GET':
        # Capture input data appended to the URL query string
        search_query = request.args.get('search_field')
        return f"[GET SUCCESS] Searched Archive For: {search_query}"

if __name__ == "__main__":
    app.run(debug=True)

```

---

## 6. Integrating a Database: ORM and SQLAlchemy

A **Database** is a structured, persistent system designed to store, query, and manage application data safely.

Instead of writing raw, error-prone SQL text strings directly in our Python code, we use an **ORM (Object-Relational Mapper)** called **SQLAlchemy**.

### What is an ORM?

An ORM acts as a translation bridge between your Python code and your database engine. It allows you to interact with database tables as normal Python classes, and rows of data as standard object instances. You never have to write raw SQL commands to insert, update, or delete records.

### Comprehensive Model Setup and Data Flow Pipeline

Let's build a complete app that captures web form data and saves it directly to a database file using **Flask-SQLAlchemy**:

```python
import os
from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Configure a local SQLite database file named 'app_database.db'
base_dir = os.path.abspath(os.path.dirname(__name__))
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(base_dir, 'app_database.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the ORM engine
db = SQLAlchemy(app)

# --- DATABASE MODEL DEFINITION ---
# This class acts as a blueprint to automatically generate our database table
class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    course = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f"<Student {self.name}>"


# Create the database tables automatically inside the application context
with app.app_context():
    db.create_all()


# --- APP ROUTES ---

@app.route('/add-student', methods=['POST'])
def add_student():
    # 1. Capture user data from the form payload
    form_name = request.form.get('student_name')
    form_course = request.form.get('student_course')

    if form_name and form_course:
        # 2. Instantiate a new Python object from our Model class
        new_student = Student(name=form_name, course=form_course)
        
        # 3. Use SQLAlchemy to stage and commit the record to the database
        db.session.add(new_student)
        db.session.commit()

    return redirect('/students')

@app.route('/students')
def list_students():
    # Fetch all records out of the database as a list of Python objects
    all_students = Student.query.all()
    return f"Database Records: {all_students}"

if __name__ == "__main__":
    app.run(debug=True)
```

Here is the complete Database Migrations section designed to fit right at the end of **Section 6 (Integrating a Database)** inside your Flask guide.

---

### 6.1 Database Schema Evolution: Flask-Migrate

In development, we used `db.create_all()` to build our database tables. However, `db.create_all()` has a significant limitation: it only builds tables if they do not exist. If you modify your class model later (e.g., adding a `phone_number` column or changing an explicit variable constraint), `db.create_all()` will completely ignore the changes.

While you *could* delete the database file and start over, this destroys all your data. To evolve your database schema without losing information, we use **Flask-Migrate** (powered by **Alembic** under the hood).

#### Rebuilding the Backend Framework to Support Migrations

To implement migrations, install the extension package via terminal (`pip install Flask-Migrate`) and initialize the engine directly alongside your standard database connections:

```python
import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate  # 1. Import the migration wrapper class

app = Flask(__name__)

base_dir = os.path.abspath(os.path.dirname(__name__))
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(base_dir, 'app_database.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# 2. Bind Flask and SQLAlchemy together inside the Migration Engine
migrate = Migrate(app, db)

# Define your data model class exactly as before
class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    course = db.Column(db.String(100), nullable=False)
    # Assume we add this new field later during development:
    email = db.Column(db.String(120), unique=True) 

# Note: We completely remove db.create_all() now! 
# The terminal CLI will manage the database state from here on.

```

#### The Lifecycle Migration Terminal Commands

Once configured, Flask-Migrate exposes a new group of interactive commands under the `flask db` umbrella terminal tool:

1. **`flask db init`** Run this **only once** when you first set up your project. It initializes a brand-new storage repository folder called `migrations/` inside your project directory to keep track of schema history version files.
2. **`flask db migrate -m "Any descriptive message tag"`** This command tells Alembic to scan your current Python model classes and compare them against your live database structure. It automatically generates a step-by-step delta version script tracking the changes (like adding our new `email` field).
3. **`flask db upgrade`** Applies the generated script changes straight to your database. Your live tables will update in milliseconds without altering or losing any existing user records!
4. **`flask db downgrade`** If you ever push a broken database update or need to revert to a previous version, running this command instantly rolls your database schema back one step.

---

## 7. Security: Authentication vs. Authorization

When building production web apps, you must protect user resources and secure your backend routes. Security is divided into two distinct steps:

### Authentication (Who are you?)

Authentication is the process of verifying a user's identity. This is typically done through a login system where the user provides credentials (like a username and password) to prove they are who they say they are.

### Authorization (What are you allowed to do?)

Once a user is authenticated, authorization determines their permissions and access levels. It checks if the identified user has permission to perform a specific action, such as viewing an admin panel or deleting a record.

> 🔒 **Summary Security Rule:** **Authentication** always happens first. Once the app knows *who* you are, **Authorization** kicks in to decide *what* you can do.

Here are the comprehensive sections to append to the bottom of your Flask course architecture. They cover stateless tracking (Cookies), stateful tracking (Sessions), and secure session automation via **Flask-Login**.

---

## 8. Managing Stateless Data: Cookies

By default, the HTTP protocol is completely **stateless**. This means a web server treats every single request as a completely anonymous communication from a stranger—it has no native memory to know if the same user clicked a link two seconds ago.

To solve this, we use **Cookies**.

### What is a Cookie?

A cookie is a tiny text file sent by a web server and stored directly on the client's web browser. Every time the browser makes a new request to that same server, it automatically appends that cookie text file to its outgoing network header payload.

### Flask Implementation: Setting and Reading Cookies

```python
from flask import Flask, make_response, request

app = Flask(__name__)

@app.route('/set-cookie')
def set_cookie():
    # We must explicitly construct a response object to append cookie headers
    response = make_response("Cookie has been successfully dropped!")
    
    # set_cookie(key, value, max_age in seconds)
    response.set_cookie('user_theme', 'dark', max_age=60*60*24) 
    return response

@app.route('/get-cookie')
def get_cookie():
    # Read incoming cookie headers using request.cookies
    active_theme = request.cookies.get('user_theme', 'default-light')
    return f"The user's preferred visual theme layout is: {active_theme}"

```

---

## 9. Secure Stateful Tracking: Server-Side Sessions

While cookies are highly useful, they are insecure for storing structural states like user IDs or privilege levels because the raw text file sits on the user's browser, where it can be modified or manipulated.

To store sensitive data safely, we upgrade to **Sessions**.

### How Do Sessions Work?

* The actual data values are stored securely on the **Backend Server**.
* Flask signs the data cryptographically and packages it into a secure, tamper-proof cookie.
* To prevent users from editing session values, you must configure a cryptographically strong **`secret_key`** inside your app configurations. If a user tries to modify their session cookie file, Flask's engine will detect the signature break and reject it immediately.

```python
from flask import Flask, session, redirect, url_for

app = Flask(__name__)

# Mandatory signing key configuration to secure server sessions
app.secret_key = 'super_secret_secure_signing_salt_key'

@app.route('/login-session')
def login_session():
    # Write values directly into the session map exactly like a python dictionary
    session['logged_in_user'] = 'Vipin Master Instructor'
    session['user_clearance'] = 'Admin'
    return "User session successfully initialized."

@app.route('/profile-session')
def profile_session():
    # Read data from the session map safely using .get()
    if 'logged_in_user' in session:
        return f"Welcome back, {session.get('logged_in_user')}. Status: {session.get('user_clearance')}"
    return "Access Denied: No active session sequence found."

@app.route('/logout-session')
def logout_session():
    # Clear out specific keys or wipe the entire map clear to sign out
    session.pop('logged_in_user', None)
    session.pop('user_clearance', None)
    return "Session terminated successfully."

```

---

## 10. Automated User Management: Flask-Login

Managing login sessions, tracking user IDs, manually building access control checks, and checking user states across hundreds of views can quickly become unmanageable.

**Flask-Login** is an extension that automates the entire authentication lifecycle.

### Core Architectural Requirements

To integrate Flask-Login, your User database model class *must* inherit properties from **`UserMixin`**. This automatically grants your database records access to built-in helper properties like:

* `.is_authenticated` (Returns `True` if the user is securely signed in).
* `.is_active` (Confirms if the account status is active).

### Complete Authentication Pipeline Implementation

```python
from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user

app = Flask(__name__)
app.secret_key = 'another_ultra_secure_secret_key'

# Initialize Database Configurations
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)

# --- 1. INITIALIZE THE FLASK-LOGIN MANAGER ---
login_manager = LoginManager()
login_manager.init_app(app)

# Define where to redirect users if they try to access a protected route without logging in
login_manager.login_view = 'login'

# --- 2. DEFINE THE USER MODEL WITH USERMIXIN ---
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), nullable=False) # Note: Production passwords must be hashed!

# --- 3. THE USER LOADER FUNCTION ---
# This callback helper fetches the user object from the database using the ID stored in the session cookie
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# Create database tables automatically
with app.app_context():
    db.create_all()


# --- 4. APP VIEW ROUTE CONTROLS ---

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        form_user = request.form.get('username')
        form_pass = request.form.get('password')
        
        # Look up if the user exists in our database
        user = User.query.filter_by(username=form_user).first()
        
        if user and user.password == form_pass:
            # Automates the entire login process, drops secure cookies, and handles session caching
            login_user(user)
            return redirect(url_for('secure_dashboard'))
        else:
            return "Invalid Username or Password configuration."
            
    return '''
        <form method="POST">
            Username: <input type="text" name="username"><br>
            Password: <input type="password" name="password"><br>
            <input type="submit" value="Login">
        </form>
    '''

@app.route('/dashboard')
@login_required  # Authorization Gate: Blocks anonymous traffic completely
def secure_dashboard():
    # current_user represents the fully instantiated object data of the logged-in user
    return f"Welcome to the Private Dashboard, {current_user.username}! Your ID is {current_user.id}."

@app.route('/logout')
@login_required
def logout():
    # Clears out tracking context tokens and signs the user out cleanly
    logout_user()
    return "You have been logged out securely."

if __name__ == "__main__":
    app.run(debug=True)

```
