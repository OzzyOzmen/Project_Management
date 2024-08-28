# Project-Management

# Configs
   - create .env file and add these inside
      MONGO_URI=mongodb+srv://username:password@projectmanagement.x6fzwop.mongodb.net/?retryWrites=true&w=majority&appName=ProjectManagement
      WEBSITE_URL=http://localhost:3001
      PORT=3000
      NODE_ENV=production
      JWT_SECRET=testkey35

    # Email Configuration
      Email_HOST=your_smtp_host
      EMAIL_PROVIDER=your_email_provider
      SMTP_PORT=your_smtp_port
      EMAIL=your_email_address
      PASSWORD=your_email_password
      
   - type npm update in main directory, backend directory and frontend directory
   - change proxy "http://localhost:3000" in package.json in frontend file
   - process.env.PORT || 3000; port in server.js in backend file
   - in frontend directory type npm i jsonwebtoken
   - in frontend directory type npm i react-tsparticles
   - in frontend directory type npm i tsparticles
   - in frontend directory type export NODE_OPTIONS=--openssl-legacy-provider
  


# Features
   - Fully responsive 
   - Authorization with email confirmation
   - Notification system
   - Real time communications between users
   - Upload profile picture
   - Create and join projects
   		- ### Project
          - Add Lists
          - Add Tasks
          - Drag Lists and tasks to change their position
          - Update Task, List and Project title by clicking on it
          - Invite users either by typing their username/email or by invite link
          - Update user's permissions or kick them from project
          - Group chat
          - Archived Tasks menu with option to retrieve or delete them
          - Settings menu with option to change project's theme, background (with option to upload your own image) and option to delete project available only for project creator
          - #### List options:
            - Add new task
            - Transfer tasks to other list
            - Archive tasks inside
            - Delete List and archive tasks inside
          - #### Task modal:
            - Add rich text description
            - Assign users to task (user's will later receive notifications about this task)
            - Apply, update and crete labels
            - #### Add mini to-do lists:
              - Add, edit and delete to-do tasks
              - Mark them as finished
              - Hide finished to-do tasks
            - Add deadline
            - Copy task
            - Watch task to receive notifications
            - Transfer to different list
            - Archive and delete task
            - Add, edit and delete comments 
