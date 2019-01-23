import React from 'react';
// import { Link } from 'react-router-dom'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class InfoTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }


  render() {
    return (
      <div className="bg-white">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              style={{cursor:'pointer'}}
              onClick={() => { this.toggle('1'); }}
            >
              Original
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              style={{cursor:'pointer'}}
              onClick={() => { this.toggle('2'); }}
            >
              Prints
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h5>{this.props.product.name}</h5>
                <p>Price: {this.props.product.price}</p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h5>{!!this.props.product.prints ? "available" : "unavailable"}</h5>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}