import React from "react";

const Notification = ({ showNotification }) => {
    return showNotification.show ? (
        <div>
            {showNotification.msg}
        </div>
    ) : null
}

export default Notification;
