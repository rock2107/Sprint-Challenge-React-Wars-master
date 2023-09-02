document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Create an object to hold user data
        const userData = {};
        // Personal Information
        userData.name = form.querySelector('#name').value;
        userData.email = form.querySelector('#email').value;
        userData.age = form.querySelector('#age').value;
        userData.education = form.querySelector('#education').value;
        userData.institute = form.querySelector('#institute').value;
        userData.study = form.querySelector('#study').value;

        // Work Experience
        const workExperience = form.querySelector('input[name="workExperience"]:checked');
        if (workExperience) {
            userData.workExperience = workExperience.value;
        }

        userData.workDetails = form.querySelector('#workDetails').value;

        // Canadian Study Information
        userData.admittedToCanada = form.querySelector('#admittedToCanada').value;
        userData.programInCanada = form.querySelector('#programInCanada').value;
        userData.applyingFromCountry = form.querySelector('#applyingFromCountry').value;
        userData.futureGoals = form.querySelector('#futureGoals').value;
        userData.englishListening = form.querySelector('#englishListening').value;
        userData.englishReading = form.querySelector('#englishReading').value;
        userData.englishSpeaking = form.querySelector('#englishSpeaking').value;
        userData.englishWriting = form.querySelector('#englishWriting').value;

        const firstYearTuition = form.querySelector('input[name="firstYearTuition"]:checked');
        if (firstYearTuition) {
            userData.firstYearTuition = firstYearTuition.value;
        }

        userData.tuitionFeePaid = form.querySelector('#tuitionFeePaid').value;

        const gic = form.querySelector('input[name="gic"]:checked');
        if (gic) {
            userData.gic = gic.value;
        }

        userData.gicAmountPaid = form.querySelector('#gicAmountPaid').value;

        // Send data to the backend
        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            form.reset();
            
            
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error submitting form');
        });
    });

   
});


