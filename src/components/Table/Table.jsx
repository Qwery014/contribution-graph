import React from 'react';
import "./Table.scss";
import TableMonths from './Cells/TableMonths';
import TableGraph from './Cells/TableGraph';
import { colors } from '../../helpers/consts';

const Table = () => {
  return (
    <div className='table'>
      <div className="container">
        <TableMonths />
        <TableGraph />
        <div className="table__hint">
          <div className="table__hint_text">
            Меньше
          </div>
          <div className="table__hint_blocks">
            <div className="table__hint_blocks-item" style={{ backgroundColor: colors[0] }}>
              <div className="table__graph_tooltip">
                <p>No contributions</p>
                <div className="table__graph_tooltip-corner"></div>
              </div>
            </div>
            <div className="table__hint_blocks-item" style={{ backgroundColor: colors[1] }}>
              <div className="table__graph_tooltip">
                <p>1-9 contributions</p>
                <div className="table__graph_tooltip-corner"></div>
              </div>
            </div>
            <div className="table__hint_blocks-item" style={{ backgroundColor: colors[2] }}>
              <div className="table__graph_tooltip">
                <p>10-19 contributions</p>
                <div className="table__graph_tooltip-corner"></div>
              </div>
            </div>
            <div className="table__hint_blocks-item" style={{ backgroundColor: colors[3] }}>
              <div className="table__graph_tooltip">
                <p>20-29 contributions</p>
                <div className="table__graph_tooltip-corner"></div>
              </div>
            </div>
            <div className="table__hint_blocks-item" style={{ backgroundColor: colors[4] }}>
              <div className="table__graph_tooltip">
                <p>30+ contributions</p>
                <div className="table__graph_tooltip-corner"></div>
              </div>
            </div>
          </div>
          <div className="table__hint_text">
            Больше
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;