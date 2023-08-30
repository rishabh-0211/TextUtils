import React from "react";
function Alert(props) {
  const captilise = (word) => {
    const message = word.toLowerCase();
    return message.charAt(0).toUpperCase() + message.slice(1);
  };
  return (
    props.alert && (
      <>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert">
          <strong>{captilise(props.alert.type)}</strong>: {props.alert.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"></button>
        </div>
      </>
    )
  );
}

export default Alert;
