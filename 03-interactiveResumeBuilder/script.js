var form = document.getElementById('resumeBuilder');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('tel').value;
    var qualification = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var resumeHTML = "\n    <h2><b>Resume: </b></h2>\n    <h3><b>Name:</b></h3>\n    <p>".concat(name, "</p>\n\n    <h3><b>Email:</b></h3>\n    <p> ").concat(email, "</p>\n    \n    <h3><b>Phone:</b></h3>\n    <p>").concat(phone, "</p>\n    \n    <h3><b>Qualification:</b></h3>\n    <p>").concat(qualification, "</p>\n    \n    <h3><b>Skills:</b></h3>\n    <p>").concat(skills, "</p>\n\n    <h3><b>Experience:</b></h3>\n    <p> ").concat(experience, "</p>");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        alert('Please fill in all fields');
    }
    ;
});
