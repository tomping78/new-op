import React from 'react';
import { useState } from 'react';
import { Button, Drawer, Tooltip } from 'antd';
import styled from 'styled-components';


const ToolBox = styled(Tooltip)`
  > .ant-tooltip-inner {
    font-size: 20px;
  }
`
const DrawerBox = styled(Drawer)`
  .ant-drawer-header {
    background:#ccc ;
  }
  .ant-drawer-body p {
    font-weight: bold;
    border-bottom:1px dotted #ccc;
    &:hover {
      background:#ccc;
    }
  }
`

function CarDraw(props) {

    const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

    return (
        <>
            <ToolBox title="prompt text">
                <Button type="primary" onClick={showDrawer} >
                    Open
                </Button>
            </ToolBox>
            <DrawerBox title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </DrawerBox>
        </>
    );
}

export default CarDraw;