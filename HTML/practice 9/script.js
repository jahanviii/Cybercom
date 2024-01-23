$(document).ready(function () {

  $.validator.addMethod("gender", function (value, element) {
    return value !== "select";
  }, "Please select a gender.");

  $("#patientHistoryForm").validate({

    rules: {
      gender: {
        required: true,
      },
      firstName: {
        required: true,
        minlength: 2
      },
      lastName: {
        required: true,
        minlength: 2
      },
      patientEmail: {
        required: true,
        email: true
      },
      month: {
        required: true
      },
      birthDay: {
        required: true
      },
      birthYear: {
        required: true
      },
      patientHeight: {
        required: true
      },
      PatientWeight: {
        required: true
      },
      patientReason: {
        required: true
      },
      agree: "required"
    },

    // messages as per rules
    messages: {
      gender: {
        required: "This field is required",
      },
      firstName: {
        required: "Please enter the first name.",
        minlength: "Your name must consist of at least 2 characters"
      },
      lastName: {
        required: "Please enter the last name.",
        minlength: "Your name must consist of at least 2 characters"
      },
      patientEmail: {
        required: "Please enter a valid email address.",
        email: "Please enter a valid email address."
      },
      month: {
        required: "Please select a month."
      },
      birthDay: {
        required: "Please select a day."
      },
      birthYear: {
        required: "Please select a year."
      },
      patientHeight: {
        required: "Please enter the patient's height."
      },
      patientWeight: {
        required: "Please enter the patient's weight."
      },
      patientReason: {
        required: "Please provide a reason for seeing the doctor."
      },
      agree: "Please accept our policy"
    },

    errorPlacement: function (error, element) {
      error.css("color", "red");
      error.insertAfter(element);
    },

    highlight: function (element, errorClass, validClass) {
      $(element).css("border", "1px solid red");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).css("border", "1px solid #ccc");
    },

    submitHandler: function (form) {
      alert("Your details have been added successfully");
      form.submit();
    },
  });
});