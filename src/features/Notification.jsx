import React, { useState, useEffect } from 'react'
import NotificationPanel from '../components/common/NotificationPanel'
import axios from 'axios'
import "./notification.css"

const Notification = () => {
    const [notifications, setNotifications] = useState([])

    useEffect(() => {
        const response = axios.get('http://localhost:3001/notifications')
        response.then((res) => {
            setNotifications(res.data)
            console.log('data',res.data)
        }).catch((error) => {
            console.log(error);
         })

        
    }
, [])
    return (
        <div>
             <NotificationPanel notifications={notifications} />
        </div>
    )
}

export default Notification