# Bond
This personalized journal web application allows users to record and organize their thoughts, memories, and experiences. 
The application has a user-friendly interface and has the following features:
- user registration
- entry creation
- editing
- search

![Alt Text](https://github.com/Cheesie11/nodeDEV/blob/main/code/public/img/bondgit.png)

## How to get started 

**After cloning this repository you should rename .env.example to .env and adapt as needed**

**Needed Software Applications**
- Docker Desktop
- Code Editor (VisualStudioCode)

**How to start the Docker Container**
- Open the downloaded Repository in your Code Editor
- Open your Terminal (in Code Editor)
- Run: `docker-compose up -d --build`
- Check if its successfully running on Docker Desktop

**How to access the Webapplication**
- Open your Terminal in your Code Editor
- Switch to the "code" folder with `cd code`
- Run `node server.js`
- If everything worked you should get a generated Secret Key and the message "Listening on port 3000..."
- Click the following link to open the Webapplication: [`localhost`](http://localhost:3000/)

**How to check your Users / Entries**
- Go to adminer in which all your Data is saved: [`adminer`](http://localhost:8088/)
- Make sure that your enter the same information, as in the following image (password: secret-pwd):
 ![](https://github.com/Cheesie11/nodeDEV/blob/main/code/public/img/adminer.png)
- Now you can view either the users_info or the entries table.
