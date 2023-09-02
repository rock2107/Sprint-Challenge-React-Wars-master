const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');

const app = express();
const port = 1000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/submit', (req, res) => {
    const {
        name,
        email,
        age,
        education,
        institute,
        study,
        workExperience,
        workDetails,
        admittedToCanada,
        programInCanada,
        applyingFromCountry,
        futureGoals,
        englishListening,
        englishReading,
        englishSpeaking,
        englishWriting,
        firstYearTuition,
        tuitionFeePaid,
        gic,
        gicAmountPaid,
    } = req.body;

    // Save data to a JSON file (simplified, not secure for production)
    const userData = {
        name,
        email,
        age,
        education,
        institute,
        study,
        workExperience,
        workDetails,
        admittedToCanada,
        programInCanada,
        applyingFromCountry,
        futureGoals,
        englishListening,
        englishReading,
        englishSpeaking,
        englishWriting,
        firstYearTuition,
        tuitionFeePaid,
        gic,
        gicAmountPaid,
    };

    fs.writeFileSync('user-data.json', JSON.stringify(userData, null, 2));

    // Send confirmation email
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'guptashishu2107@gmail.com', // Replace with your Gmail email
            pass: 'uvcjpnvdyjxanbih',        // Replace with your Gmail password
        },
    });

    const mailOptions = {
        from: 'guptashishu2107@gmail.com',
        to: email,
        subject: 'Thank you for your submission',
        text: `Dear ${name},\n\nThank you for your submission. We have received your message \n\n With Regards \n Shirshant`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
           
             res.status(200).send('Data saved and email sent successfully');
             
            // window.location.href='SubmitForm.html'
        }
    });
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
