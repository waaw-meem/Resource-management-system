import React, { useState, useEffect } from 'react'
import "./configuration.css"
import ConfigCard from '../components/common/ConfigCard'
import axios from 'axios'

const Configuration = () => {
    const [config, setConfig] = React.useState([])

    useEffect(() => {
        const response = axios.get('http://localhost:3001/configurations')

        response.then((res) => {
            setConfig(res.data)
            console.log(res.data)
        }).catch((error) => {
            console.log(error);
        });

    }, [])

    return (
        <div className="configuration-container">
            <div className="container">
                <h2 class="secondary-heading">Configurations</h2>
            <div className="config-card-container">
                {config.map((item) => {
                    return (
                        <ConfigCard
                            key={item.id}
                            icon={item.icon}
                            description={item.description}
                            title={item.title} />
                    )
                })}
            </div>
            </div>
        </div>
    )
}

export default Configuration