import { Link } from 'gatsby'
import React from 'react'
import { Menu, Icon, Typography, Row, Col } from 'antd'
const { SubMenu } = Menu;
const slug = require('slug')

export default (props) => {
  const codingPosts = props.data.filter(({ node }) => node.frontmatter.categories.includes("Coding"))
  const sidePosts = props.data.filter(({ node }) => node.frontmatter.categories.includes("Chuyện bên lề"))
  const codingList = Array.from(new Set(Array.from(codingPosts.map(({ node }) => node.frontmatter.categories)).reduce((a, b) => a.concat(b), [])))
  const sideList = Array.from(new Set(Array.from(sidePosts.map(({ node }) => node.frontmatter.categories)).reduce((a, b) => a.concat(b), [])))
  codingList.splice(codingList.indexOf("Coding"), 1)
  sideList.splice(sideList.indexOf("Chuyện bên lề"), 1)

  const createMenuItems = (list) => {
    return list.map((item) => {
      const path = `/category/${slug(item).toLowerCase()}`
      return <Menu.Item ><Link to={path}>{item}</Link></Menu.Item>
    }
    )
  }

  const createCategoryMenus = (name, items) => {
    return (
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Icon type="setting" />
            {name}
          </span>
        }
      >
        {items}
      </SubMenu>
    )

  }
  const codingMenuItems = createMenuItems(codingList)
  const sideMenuItems = createMenuItems(sideList)
  const codingMenu = createCategoryMenus("Coding", codingMenuItems)
  const sideMenu = createCategoryMenus("Chuyện bên lề", sideMenuItems)


  return (
    <React.Fragment>
      <Row style={{ width: '100%', margin: '0 auto', marginBottom: '60px', marginTop: '25px' }}>
        <Col span={7}>
          <Typography > <span style={{ borderBottom: '1px solid lightgray', paddingBottom: '13px' }}>Linh Nguyễn</span></Typography>
        </Col>
        <Col span={17}><Menu mode='horizontal' style={{ textAlign: 'right', fontSize: '1.1em', border: 'none' }}>
          <Menu.Item key='home'>
            <Icon type='home' />
            <Link
              style={{
                display: 'inline-block'
              }}
              to='/'
            >Home </Link>
          </Menu.Item>
          <Menu.Item key='blog'>
            <Icon type='read' />
            <Link
              style={{
                display: 'inline-block'
              }}
              to='/blog/'
            >Blog </Link>
          </Menu.Item>
          {codingMenu}
          {sideMenu}
          <Menu.Item key='alipay' id="resume">
            <Icon type='profile' />
            <a
              style={{
                display: 'inline-block'
              }}
              href='https://linhnguyenviet.github.io/'
            >Resume </a>
          </Menu.Item>
        </Menu></Col>
      </Row>
    </React.Fragment>
  )
}

