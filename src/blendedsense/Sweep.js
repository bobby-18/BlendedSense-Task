import React,{useState} from 'react'
import SweepTable from'./SweepTable'
import { Button, Modal } from "antd";
import { Dropdown } from "antd";
import { Card } from "antd";

const items = [
  {
    key: "1",
    label: <button>capture content</button>,
  },
  {
    key: "2",
    label: <button>Meeting</button>,
  },
  {
    key: "3",
    label: <button>Commute</button>,
  },
];
function Sweepblocks() {
    const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
      <div>
        <div className="input_sweep">
          <div>
          {/* <CustomizedDialogs/> */}
            <Modal
              centered
              open={modal2Open}
              onOk={() => setModal2Open(false)}
              onCancel={() => setModal2Open(false)}
            >
              <Card
                title="Sweep Block Details"
                bordered={false}
                style={{
                  width: 300,
                }}
              >
                <p>Type</p>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottomLeft"
                  arrow
                >
                  <Button>capture content</Button>
                </Dropdown>
              </Card>
            </Modal>
          </div>
        </div>
        <SweepTable />
      </div>
    </>
  );
}

export default Sweepblocks
