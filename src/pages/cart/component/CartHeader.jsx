import React, { Component } from 'react'
import { PageHeader, Menu, Dropdown, Icon, Button, Typography} from 'antd';
import "../../../assets/css/cart/cartHeader.css"

const { Paragraph } = Typography;
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const DropdownMenu = () => {
  return (
    <Dropdown key="more" overlay={menu}>
      <Button>
        <Icon
          type="ellipsis"
          style={{
            fontSize: 20,
            verticalAlign: 'top',
          }}
        />
      </Button>
    </Dropdown>
  );
};
export default class CartHeader extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#fff"}}>
        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)',
          }}
          onBack={() => null}
          title="购物车"
          extra={[
            <DropdownMenu key="more" />
          ]}
        >
        </PageHeader>
        <div style={{width:"100%",textAlign:"center",height:"46px",borderBottom:"1px solid #d8d8d8"}}>
          <p>
            <Button className="login-btn">登录</Button>
            后，您可以同步电脑和手机购物车中的商品
          </p>
        </div>
      </div>
    )
  }
}
