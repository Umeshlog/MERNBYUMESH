import React, { useEffect, useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.eroor);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  //we arestoring data in state
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  //send the data to backend
  const contactForm = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;
    console.log(`${name}`);
    console.log(`${email}`);
    console.log(`${phone}`);
    console.log(`${message}`);

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (res.status === 400 || !data) {
      console.log("mesage not send");
      window.alert("mesage not send");
    } else { 
      alert("MESSAGE SEND");
      setUserData({ ...userData, message: "" });
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
            {/* phone number */}
            <div className="d-flex justify-content-start box1">
              <i class="zmdi zmdi-phone-in-talk  icon"></i>
              <div>
                <h3>phone</h3>
                <p>9340131116</p>
              </div>
            </div>

            {/* email number */}
            <div className="d-flex justify-content-start box1">
              <i class="zmdi zmdi-email icon"></i>
              <div>
                <h3>Email</h3>
                <p>umeshpatel@2001</p>
              </div>
            </div>

            {/* address number */}
            <div className="d-flex justify-content-start box1">
              <i class="zmdi zmdi-city icon"></i>
              <div>
                <h3>Address</h3>
                <p>Indore</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact  us form page */}
      <div className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">Get In Touch</div>
                <form method="POST" id="contact_form">
                  <div className="contact_form_name  d-flex justify-content-between align-item-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      onChange={handleInputs}
                      name="name"
                      value={userData.name}
                      placeholder="your name"
                      required="true"
                    />

                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      onChange={handleInputs}
                      name="email"
                      value={userData.email}
                      placeholder="your email"
                      required="true"
                    />

                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      onChange={handleInputs}
                      name="phone"
                      value={userData.phone}
                      placeholder="your phone number"
                      required="true"
                    />
                  </div>

                  <div className="contact_form_text mt-5">
                    <textarea
                      className="text_feild"
                      onChange={handleInputs}
                      name="message"
                      value={userData.message}
                      placeholder="massege"
                      cols="127"
                      rows="9"
                    ></textarea>
                  </div>

                  <div className="contact_form_button ">
                    <button
                      className="btn btn-primary "
                      type="submit"
                      onClick={contactForm}
                    >
                      send massege
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
