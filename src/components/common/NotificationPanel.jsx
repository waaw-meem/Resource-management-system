import React from "react";
import "./NotificationPanel.css";

const NotificationPanel = ({ notifications }) => {
    return (
        <div className="notification-panel">

            <div className="notification-arrow"></div>

            {notifications.map((item) => (
                <div className="notification-item" key={item.id}>

                    <div className="notification-left">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="notification-avatar"
                        />

                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.subText}</p>
                        </div>
                    </div>

                    <div className="notification-right">

                        {item.status === "approval" ? (
                            <div className="action-buttons">
                                <button className="accept-btn">
                                    ✓
                                </button>

                                <button className="reject-btn">
                                    ✕
                                </button>
                            </div>
                        ) : (
                            <>
                                <span>{item.time}</span>

                                {item.status === "new" && (
                                    <span className="notification-dot"></span>
                                )}
                            </>
                        )}
                    </div>

                </div>
            ))}

            <div className="view-all">
                View All
            </div>

        </div>
    );
};

export default NotificationPanel;