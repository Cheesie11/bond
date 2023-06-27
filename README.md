# Bond
This personalized journal web application allows users to record and organize their thoughts, memories, and experiences. 
The application has a user-friendly interface and has the following features:
- user registration
- entry creation
- editing
- search

![Alt Text](https://github.com/Cheesie11/nodeDEV/blob/main/code/public/img/bondgit.png)

## How to get started 

- **Clone the repository**

- **After cloning this repository you should rename `.env.example` to `.env` and adapt as needed**

**Needed Software Applications**
- Docker Desktop
- Code Editor (VisualStudioCode)

**How to start the Docker Container**
- Open the downloaded Repository in your Code Editor
- Open your Terminal (in Code Editor)
- Run: `docker-compose up -d --build`
- Check if its successfully running on Docker Desktop

**How to access the Webapplication (requirement: node.js)**
- Open your Terminal in your Code Editor
- Switch to the "code" folder with `cd code`
- Run `node server.js`
- If everything worked you should get a generated Secret Key and the message "Listening on port 3000..."
- Click the following link to open the Webapplication: [`localhost`](http://localhost:3000/)
- Currently nothing is working because you don't have your Database correctly set up, we'll do that now

**Set up your Users / Entries**
- Go to adminer in which all your Data will be saved: [`adminer`](http://localhost:8088/)
- Make sure that your enter the same information, as in the following image (password: secret-pwd):

 ![](https://github.com/Cheesie11/nodeDEV/blob/main/code/public/img/adminer.png)
- Now you'll have to open the SQL-Commando and paste in the two bottom SQL Codes:

```sql
CREATE TABLE users_info (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE entries (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  date TIMESTAMP,
  happen VARCHAR(255),
  challenges VARCHAR(255),
  achievement VARCHAR(255),
  userid INTEGER
);
```
**Enjoy Bond**
