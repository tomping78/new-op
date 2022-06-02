import React from 'react';
import { useState } from 'react';
import { Button, Drawer, Tooltip } from 'antd';


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
            <Tooltip title="prompt text">
                <Button type="primary" onClick={showDrawer} >
                    Open
                </Button>
            </Tooltip>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
}

export default CarDraw;