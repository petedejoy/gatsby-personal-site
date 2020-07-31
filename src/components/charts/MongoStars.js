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
import CustomTooltip from "./CustomTooltip"
import { format, add, differenceInCalendarDays } from "date-fns"

const data = [
    {
        Date: new Date(2010, 4, 1).getTime(),
        Stars: 1170
    },
    {
        Date: new Date(2011, 8, 3).getTime(),
        Stars: 2370
    },
    {
        Date: new Date(2013, 7, 28).getTime(),
        Stars: 3600
    },
    {
        Date: new Date(2014, 7 ,20).getTime(),
        Stars: 4830
    },
    {
        Date: new Date(2015, 2, 12).getTime(),
        Stars: 6030
    },
    {
        Date: new Date(2015, 9, 20).getTime(),
        Stars: 7260
    },
    {
        Date: new Date(2016, 4, 20).getTime(),
        Stars: 8490
    },
    {
        Date: new Date(2016, 10, 29).getTime(),
        Stars: 9690
    },
    {
        Date: new Date(2017, 5, 6).getTime(),
        Stars: 10920
    },
    {
        Date: new Date(2017, 11, 21).getTime(),
        Stars: 12150
    },
    {
        Date: new Date(2018, 5, 15),
        Stars: 13350
    },
    {
        Date: new Date(2018, 11, 13).getTime(),
        Stars: 14580
    },
    {
        Date: new Date(2019, 5, 13).getTime(),
        Stars: 15810
    },
    {
        Date: new Date(2019, 11, 22).getTime(),
        Stars: 17010
    },
    {
        Date: new Date(2020, 6, 29).getTime(),
        Stars: 18295
    }
]

const startDate = new Date(2010, 4, 1);
const endDate = new Date(2020, 6, 29);

const getTicks = (startDate, endDate, num) => {
    const diffDays = differenceInCalendarDays(endDate, startDate);
  
    let current = startDate,
      velocity = Math.round(diffDays / (num - 1));
  
    const ticks = [startDate.getTime()];
  
    for (let i = 1; i < num - 1; i++) {
      ticks.push(add(current, { days: i * velocity }).getTime());
    }
  
    ticks.push(endDate.getTime());
    return ticks;
  };
  

const dateFormatter = date => {
    return format(new Date(date), "dd/MMM");
};

const domain = [dataMin => dataMin, () => endDate.getTime()];
const ticks = getTicks(startDate, endDate, 5);

export default () => (
    <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                {/* <LineChart width={750} height={400} data={data}> */}
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="Date"
                    hasTick
                    scale="time"
                    tickFormatter={dateFormatter}
                    type="number"
                    domain={domain}
                    ticks={ticks}
                />
                <YAxis label={{ value: 'Stars', angle: -90, position: 'insideLeft' }} width={80} />
                <Tooltip content={<CustomTooltip />} />
                {/* <Bar
                    dataKey="Revenue"
                    stroke="#302c43"
                    fill="#302c43"
                /> */}
                <Line type="monotone" dataKey="Stars" stroke="#82ca9d" />
                {/* </LineChart> */}
            </LineChart>
        </ResponsiveContainer>
    </div>
)