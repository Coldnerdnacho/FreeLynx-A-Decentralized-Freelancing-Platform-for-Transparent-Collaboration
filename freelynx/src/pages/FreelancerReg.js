import React, { useState } from "react";

// Import images from src/assets/FreelancerReg
import freelancerLanding from "../assets/FreelancerReg/reg_bg.png";
import regBg from "../assets/FreelancerReg/freelancer_reg.png";
import q1Bg from "../assets/FreelancerReg/q1_bg.png";
import q2Bg from "../assets/FreelancerReg/q2_bg.png";
import q3Bg from "../assets/FreelancerReg/q3_bg.png";
import q4Bg from "../assets/FreelancerReg/q4_bg.png";
import q5Bg from "../assets/FreelancerReg/q5_bg.png";

function FreelancerReg() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Landing: START button positioned below the baked-in text */}
<div
  id="landing"
  style={{
    height: "115vh",
    backgroundImage: `url(${freelancerLanding})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative", // important for absolute positioning of button
  }}
>
  <div
    style={{
      position: "absolute",
      left: "6%",  // adjust this to align with text in image
      top: "82%",   // adjust this to position below the text
    }}
  >
    <button style={btnStart} onClick={() => scrollTo("register")}>
      START
    </button>
  </div>
</div>



      {/* Registration Section */}
      <div
        id="register"
        style={{
          height: "100vh",
          backgroundImage: `url(${regBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          padding: "3rem",
        }}
      >
        <div style={formCard}>
          <h2 style={{ fontSize: "2rem", color: "#14532d", fontWeight: "bold" }}>
            Create an account
          </h2>
          <p style={{ color: "#14532d", marginBottom: "1rem" }}>Let's get started!</p>

          {["Name", "Email", "Password"].map((label, idx) => (
            <div key={idx} style={{ marginBottom: "1rem" }}>
              <label style={labelStyle}>{label}</label>
              <input
                type={label === "Password" ? "password" : "text"}
                placeholder={
                  label === "Name"
                    ? "Olivia Wilson"
                    : label === "Email"
                    ? "john@email.com"
                    : "********"
                }
                value={
                  label === "Name" ? form.name : label === "Email" ? form.email : form.password
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    [label.toLowerCase()]: e.target.value,
                  })
                }
                style={inputStyle}
              />
            </div>
          ))}

          <button style={btnDark} onClick={() => scrollTo("q1")}>
            Sign up
          </button>
          <button style={btnDark}>Continue with email</button>
        </div>
      </div>

      {/* Q1 - left */}
      <QuestionSlide
        id="q1"
        bg={q1Bg}
        title="QUESTION #1"
        question="What's your primary skill area?"
        options={["Development", "Design", "Writing", "Marketing", "Other"]}
        onNext={() => scrollTo("q2")}
        align="left"
      />

      {/* Q2 - right */}
      <QuestionSlide
        id="q2"
        bg={q2Bg}
        title="QUESTION #2"
        question="How many years of experience do you have?"
        options={["Less than 1", "1–3 years", "4–6 years", "7+ years"]}
        onNext={() => scrollTo("q3")}
        align="right"
      />

      {/* Q3 - left */}
      <QuestionSlide
        id="q3"
        bg={q3Bg}
        title="QUESTION #3"
        question="What's your availability?"
        options={["Full-time", "Part-time", "Project based / Flexible"]}
        onNext={() => scrollTo("q4")}
        align="left"
      />

      {/* Q4 - right */}
      <QuestionSlide
        id="q4"
        bg={q4Bg}
        title="QUESTION #4"
        question="What's your expected hourly rate?"
        options={["<$20/hr", "$20–$50/hr", "$50–$100/hr", "$100+/hr"]}
        onNext={() => scrollTo("q5")}
        align="right"
      />

      {/* Q5 - left */}
      <QuestionSlide
        id="q5"
        bg={q5Bg}
        title="QUESTION #5"
        question="Do you agree to our terms?"
        options={[
          "Yes, I agree to the Terms of Service and Privacy Policy",
          "No, I do not agree",
        ]}
        onNext={() => alert("Freelancer registration completed!")}
        align="left"
      />
    </div>
  );
}

/* Reusable QuestionSlide */
const QuestionSlide = ({ id, bg, title, question, options, onNext, align = "left" }) => {
  // align: 'left' or 'right' -> controls which half the card sits on
  const justify = align === "right" ? "flex-end" : "flex-start";
  const paddingSide = align === "right" ? { paddingRight: "6rem" } : { paddingLeft: "6rem" };

  return (
    <div
      id={id}
      style={{
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: justify,
        alignItems: "center",
        ...paddingSide,
      }}
    >
      <div style={formCard}>
        <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>{title}</p>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "900", marginBottom: "1.2rem" }}>
          {question}
        </h2>

        {options.map((opt, idx) => (
          <div
            key={idx}
            style={{ ...optionStyle, cursor: "pointer" }}
            onClick={() => {
              /* you can capture selection here if needed */
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#86efac")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")}
          >
            {opt}
          </div>
        ))}

        <button style={btnCream} onClick={onNext}>
          NEXT
        </button>
      </div>
    </div>
  );
};

/* Shared styles */
const formCard = {
  background: "#ffffff",
  padding: "2rem",
  borderRadius: "1rem",
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  width: "100%",
  maxWidth: "480px",
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  borderRadius: "0.5rem",
  border: "1px solid #ccc",
  backgroundColor: "#bfecac",
  color: "#14532d",
  fontSize: "1rem",
};

const labelStyle = {
  display: "block",
  fontWeight: "600",
  marginBottom: "0.25rem",
  color: "#14532d",
};

const btnStart = {
  padding: "1.1rem 3rem",
  backgroundColor: "#e4f896ff", // light fresh green
  color: "#14532d",
  border: "2px solid #14532d",
  borderRadius: "3rem",
  fontWeight: "bold",
  fontSize: "1.2rem",
  cursor: "pointer",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  position: "relative", // Use relative positioning
  top: "-110px", // Adjust this value to move the button below the text
};


const btnCream = {
  marginTop: "1.6rem",
  padding: "0.75rem 2rem",
  backgroundColor: "#bbf7d0",
  color: "#14532d",
  border: "2px solid #14532d",
  borderRadius: "2rem",
  fontWeight: "bold",
  fontSize: "1rem",
  cursor: "pointer",
};

const btnDark = {
  width: "100%",
  padding: "0.75rem",
  backgroundColor: "#000000",
  color: "#ffffff",
  border: "none",
  borderRadius: "2rem",
  fontWeight: "700",
  fontSize: "1rem",
  marginBottom: "0.75rem",
  cursor: "pointer",
};

const optionStyle = {
  padding: "0.75rem",
  backgroundColor: "#f3f4f6",
  borderRadius: "0.5rem",
  marginBottom: "0.75rem",
  fontSize: "1rem",
  transition: "background 0.15s ease",
};

export default FreelancerReg;
