import React, { useState } from 'react';

import {  Layout } from 'antd';
const {  Sider } = Layout;


const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      
      </Sider>
      <Layout >
        
        
       
      </Layout>
    </Layout>
  );
};
export default App;