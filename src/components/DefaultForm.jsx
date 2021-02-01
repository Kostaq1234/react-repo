import { useState } from "react";

export default function DefaultForm() {
  const [name, setName] = useState("");
  const [surname, setsurName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [hasBeenSubmitted, sethasBeenSubmitted] = useState(false);
  function handleSubmit() {
    sethasBeenSubmitted(true);
  }
  function resetFields() {
    sethasBeenSubmitted(false);
    setName("");
    setsurName("");
    setEmail("");
    setPhoneNumber("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="surname"
        value={surname}
        onChange={(event) => setsurName(event.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="text"
        placeholder="phone number"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      {hasBeenSubmitted && (
        <>
          {" "}
          <h1>You have submitted these data</h1>
          <ul>
            <li>Name:{name}</li>
            <li>Surname:{surname}</li>
            <li>Email:{email}</li>
            <li>Phone Number:{phoneNumber}</li>
          </ul>
          <button onClick={resetFields}>Reset Fields</button>
        </>
      )}
    </div>
  );
}
