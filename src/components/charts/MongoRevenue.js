import React from 'react'
import styles from "../../css/postTemplate.module.css"
import {
    ResponsiveContainer,
    LineChart,
    BarChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts'
const data = [
    {
        year: '2017',
        Revenue: 115
    },
    {
        year: '2018',
        Revenue: 166
    },
    {
        year: '2019',
        Revenue: 267
    },
    {
        year: '2020',
        Revenue: 422
    }
]
export default () => (
    <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                {/* <LineChart width={750} height={400} data={data}> */}
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{ value: 'Year', dy: 20 }} height={50} />
                <YAxis label={{ value: 'Revenue in Millions', angle: -90, position: 'insideLeft', dy: 100 }} width={80} />
                <Tooltip />
                <Bar
                    dataKey="Revenue"
                    stroke="#302c43"
                    fill="#302c43"
                />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                {/* </LineChart> */}
            </BarChart>
        </ResponsiveContainer>
    </div>
)