import React from 'react'
import useMemo from 'react'
import StatCard from './StatCard'
import DonutCard from './DonutCard'
import UtilizationChart from './UtilizationCard'
import useDonutContext from '../../hooks/useDonutContext'

import UserIconWithWhite from "../../assets/svg/users-white.svg"
import AddUserWhiteIcon from "../../assets/svg/add-user-white.svg"
import "./InfoCard.css"

const InfoCard = () => {

  const { developmentLabels,
    developmentSeries,
    studioLabels,
    studioSeries,
    resources
  } = useDonutContext()

  return (
    <div className="dashboard-grid">

  <div className="stats-grid">

    <StatCard
      title="Total Resources"
      value={resources?.length || 0}
      icon={UserIconWithWhite}
    />

    <StatCard
      title="Talent Pool"
      value={resources?.length || 0}
      icon={AddUserWhiteIcon}
      variant="pool"
    />

    <DonutCard
      title="Development Resources"
      labels={developmentLabels}
      series={developmentSeries}
      colors={["#3A0CA3", "#DC2F02", "#7209B7", "#4361EE"]}
    />

    <DonutCard
      title="Studio Resources"
      labels={studioLabels}
      series={studioSeries}
      colors={["#E85D04", "#264653", "#F4A261"]}
    />

  </div>

  <div className="utilization-wrapper">
    <UtilizationChart />
  </div>

</div>
  )
}

export default InfoCard