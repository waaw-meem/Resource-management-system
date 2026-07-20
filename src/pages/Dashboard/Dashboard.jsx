import React from 'react'
import useMenuContext from "../../hooks/useMenuContext"
import Navbar from '../../components/layout/Navbar'
import Configuration from '../../features/Configuration'
import DashboardBanner from '../../components/common/DashboardBanner'
import InfoCard from '../../components/common/InfoCard'
import TableGrid from '../../features/TableGrid'

const Dashboard = () => {
  const { isSettingOpen } = useMenuContext();

  return (
    <div className='container'>
      {isSettingOpen && <Configuration />}
      <DashboardBanner
        title="Digital Consulting Events"
        event="Training on React Patterns & Best Practices with Next.js"
      />
      <InfoCard />

      <TableGrid />
    </div>
  )
}

export default Dashboard