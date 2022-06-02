import Swal from "sweetalert2";
import "./Contact.css";

function SendButton(props) {
  return (
    <>
      <div className="submit">
        <input
          type="submit"
          value={props.value}
          onClick={() => {
            Swal.fire("Your mail has been sent!");
          }}
        />
      </div>
    </>
  );
}
export default SendButton;
