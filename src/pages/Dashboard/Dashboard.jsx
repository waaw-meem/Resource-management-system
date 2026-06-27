import React from 'react'
import useMenuContext from "../../hooks/useMenuContext"
import Navbar from '../../components/layout/Navbar'
import Configuration from '../../features/Configuration'

const Dashboard = () => {
  const { isSettingOpen } = useMenuContext();

  return (
    <div>
      {isSettingOpen && <Configuration />}
    </div>
  )
}

export default Dashboard