import "./Contact.css";
import SendButton from "./SendButton";

function Contact() {
  return (
    <>
      <div className="persenal-info">
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="text" placeholder="E-mail" />
      </div>
      <div className="text">
        <textarea cols="30" rows="10"></textarea>
      </div>

      <SendButton value={"Submit"} />
    </>
  );
}

export default Contact;
