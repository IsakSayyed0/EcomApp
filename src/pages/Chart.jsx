import React from 'react'
import Chart from 'chart.js/auto'
import { Doughnut,Bar,Line,Pie } from 'react-chartjs-2';
//import { Chart } from 'react-chartjs-2'

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const MonthChart = () => {
  return (
    <div>
    <Bar
            data={data}
            width={600}
            height={400}
            options={{
              maintainAspectRatio: false
            }}
          />
    </div>
  )
}

export default MonthChart
