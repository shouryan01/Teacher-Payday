import React from 'react';

import WeeklySleep from './WeeklySleep';
import MonthlySleep from './MonthlySleep';
import DayOfTheWeek from './DayOfTheWeek';
import { GraphsCont } from './style';

export default function Graphs() {
  return (
    <GraphsCont>
      <WeeklySleep />
      <MonthlySleep />
      <DayOfTheWeek />
    </GraphsCont>
  );
}