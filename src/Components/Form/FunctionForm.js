import { useState } from "react";

function FunctionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const [showDetails, setShowDetails] = useState(false);
  const [showName, setShowName] = useState("");
  const [showEmail, setShowEmail] = useState("");
  const [showPass, setShowPass] = useState("");
  const [showGender, setShowGender] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    setShowDetails(true);
    setShowName(name);
    setShowEmail(email);
    setShowPass(password);
    setShowGender(gender);

    setName("");
    setEmail("");
    setPassword("");
    setGender("");
  };
  return (
    <div className="App">
      <form className="form" onSubmit={submitForm}>
        <h3>Form</h3>
        <div className="form-data">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter Your Name"
            required
          />

          <label htmlFor="email">Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Your Email"
            required
          />

          <label htmlFor="password">Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter Your Password"
            required
          />

          <div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="Gender"
                id="Male"
                value="Male"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label class="form-check-label" for="Male">
                Male
              </label>
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="Gender"
                id="Female"
                value="Female"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label class="form-check-label" for="Female">
                Female
              </label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <div>
        <p>
          {showDetails ? (
            <>
              Name: {showName} <br />
              Email: {showEmail} <br />
              Password : {showPass} <br />
              Gender: {showGender}
            </>
          ) : null}
        </p>
      </div>
    </div>
  );
}

export default FunctionForm;
