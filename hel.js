$('#formVali').validate({
    rules: {
        name: "required",
        email: "required",
        phone: "required"
    },messages:{
        name: "Please enter your name"
    }
});