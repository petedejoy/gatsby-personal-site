import React, { PureComponent } from 'react';
import styles from "../../css/postTemplate.module.css"
import {
  ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, Scatter,
} from 'recharts';

const data = [
  {
    name: 'Oct 17', revenue: 42, stars: 11500
  },
  {
    name: 'Jan 18', revenue: 57, stars: 12250
  },
  {
    name: 'Apr 18', revenue: 50, stars: 13000
  },
  {
    name: 'Jul 18', revenue: 59, stars: 13500
  },
  {
    name: 'Oct 18', revenue: 72, stars: 14000
  },
  {
    name: 'Jan 19', revenue: 85, stars: 14750
  },
  {
    name: 'Apr 19', revenue: 89, stars: 15250
  },
  {
    name: 'Jul 19', revenue: 99, stars: 16000
  },
  {
    name: 'Oct 19', revenue: 109, stars: 16750
  },
  {
    name: 'Jan 20', revenue: 123, stars: 17250
  },
  {
    name: 'Apr 20', revenue: 130, stars: 18000
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9xopwa9v/';

  render() {
    return (
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" label={{ value: 'Revenue in Millions', angle: -90, position: 'insideLeft', dy: 75 }} width={60} />
            <YAxis yAxisId="right" orientation="right" label={{ value: 'Github Stars on OSS MongoDB', angle: -90, position: 'outsideRight', dx: 40 }} width={60} />
            <Tooltip />
            <Legend align="center" verticalAlign="bottom" width="110%" />
            <Bar yAxisId="left" dataKey="revenue" barSize={70} fill="#302c43" />
            <Line yAxisId="right" type="linear" dataKey="stars" stroke="#3772FF" />
            {/* <Scatter dataKey="cnt" fill="red" /> */}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
