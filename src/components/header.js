import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Menu, Icon, Typography, Row, Col } from 'antd';
const { Text } = Typography;

const Header = (props) => (
  <>
    <Row style={{ width: '100%', margin: '0 auto', marginBottom: "20px", marginTop: "25px" }}>
      <Col span={12}>
        <Typography > <span style={{ borderBottom: '1px solid lightgray', paddingBottom: '13px' }}>Linh Nguyễn</span></Typography>
      </Col>
      <Col span={12}><Menu mode="horizontal" style={{ textAlign: "right", fontSize: "1.1em", border: "none" }}>
        <Menu.Item key="home">
          <Icon type="home" />
          <Link
            style={{
              display: 'inline-block'
            }}
            to="/"
          >Home </Link>
        </Menu.Item>
        <Menu.Item key="blog">
          <Icon type="read" />
          <Link
            style={{
              display: 'inline-block'
            }}
            to="/blog/"
          >Blog </Link>
        </Menu.Item>
        <Menu.Item key="alipay">
          <Icon type="profile" />
          <a
            style={{
              display: 'inline-block'
            }}
            href="https://linhnguyenviet.github.io/"
          >Resume </a>
        </Menu.Item>
      </Menu></Col>
    </Row>
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
