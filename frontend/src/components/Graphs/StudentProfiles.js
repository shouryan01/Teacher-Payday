import React from 'react';
import { Row, Col, Slider } from 'antd';
import { Radar, RadarChart, PolarGrid, 
  PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

const dataMaria = [
  { name: 'Math', x: 88 },
  { name: 'Science', x: 94 },
  { name: 'Family', x: 30 },
  { name: 'Health', x: 14 },
  { name: 'Income', x: 50 },
  { name: 'Athletics', x: 75 },
  { name: 'Language', x: 71 },
  { name: 'Community Service', x: 67 },
  { name: 'English', x: 85 },
];

const dataArya = [
  { name: 'Math', x: 68 },
  { name: 'Science', x: 60 },
  { name: 'Family', x: 70 },
  { name: 'Health', x: 70 },
  { name: 'Income', x: 30 },
  { name: 'Athletics', x: 100 },
  { name: 'Language', x: 71 },
  { name: 'Community Service', x: 67 },
  { name: 'English', x: 65 },
];

const dataGabriel= [
  { name: 'Math', x: 88 },
  { name: 'Science', x: 92 },
  { name: 'Family', x: 84 },
  { name: 'Health', x: 94 },
  { name: 'Income', x: 85 },
  { name: 'Athletics', x: 75 },
  { name: 'Language', x: 71 },
  { name: 'Community Service', x: 70 },
  { name: 'English', x: 75 },
];

const dataSree = [
  { name: 'Math', x: 60 },
  { name: 'Science', x: 64 },
  { name: 'Family', x: 93 },
  { name: 'Health', x: 99 },
  { name: 'Income', x: 100 },
  { name: 'Athletics', x: 75 },
  { name: 'Language', x: 50 },
  { name: 'Community Service', x: 40 },
  { name: 'English', x: 70 },
];

export default function StudentProfiles() {
    return (
        <div style={{justifyContent: 'center', alignItems: 'center'}}>
          <Row gutter={[16, 8]}>
              <Col span={12}> 
                {makeChart(dataMaria, "Ray Flanagan")}
              </Col>
              <Col span={12}> 
                {makeChart(dataSree, "Shouryan Nikam")}
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
            <Col span={12}> 
              {makeChart(dataArya, "Oprah Winfrey")}
            </Col>
            <Col span={12}> 
              {makeChart(dataGabriel, "Larry Ellison")}
            </Col>
          </Row>
        </div>
        
    )
}

function makeChart(data, name) {
  return (
    <RadarChart height={500} width={500} 
        outerRadius="80%" data={data} nameKey="name">
        <text x={500 / 2} y={20} fill="black" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="25">{name}</tspan>
        </text>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar dataKey="x" stroke="green" 
            fill="lightgreen" fillOpacity={0.5} />
        <Tooltip />
    </RadarChart>
  )
}