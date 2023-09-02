# User Information Form

A web-based form that allows users to submit their information. The submitted data is stored and an email confirmation is sent to the user.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributors](#contributors)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- Users can input their personal information.
- Data is stored on the backend.
- An email confirmation is sent to the user with the submitted information.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Nodemailer (for sending emails)
- FormData (for handling form data)

## Project Structure

- **public**: Contains static files (HTML, CSS, images). 
  - `index.html`: The main HTML file for the form.
  - `styles.css`: Stylesheet for the form.
- `server.js`: The Node.js/Express.js server that handles form submissions and emails.
- `user-data.json`: A JSON file where user data is stored temporarily.

## Usage

1. Clone the repository to your local machine.


git clone https://github.com/rock2107/UIforms.git

2. Install the required Node.js modules.
```bash
---cd user-information-form
---npm install
```
3. Run npm start in terminal or command prompt from project directory:
```bash
node server.js
```
4. Access the form in your web browser at http://localhost:1000.

-Fill out the form and submit it. 
-You will receive a confirmation email.

## Configuration
To configure email sending, replace the Gmail email and password in server.js with your own Gmail credentials.
Customize the form's appearance by modifying the styles.css file.

## Contributors
Shirshant Gupta
guptashirshant2107@gmail.com

## License & copyright
This project is licensed under the MIT License. See the LICENSE.md file for details.

## Acknowledgments
Inspiration: Provide credit or acknowledgment to any external resources, libraries, or tutorials that inspired or helped with your project.
