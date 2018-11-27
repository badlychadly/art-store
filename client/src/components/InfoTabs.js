import React from 'react';
import { Link } from 'react-router-dom'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
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

  viewButtons = () => {
    // let view = false
    // if (!this.props.logged_in || (this.props.location.pathname === `/products/${this.props.product.id}/edit`) ) {
    //   view = true
    // }
    return (
      <div>
        <Button size="sm" hidden={!this.props.logged_in} color="warning" tag={Link} to={`/products/${this.props.product.id}/edit`} >edit Content</Button>
        <Link to='/'> 
        <Button size="sm" hidden={!this.props.logged_in} onClick={() => this.props.deleteProduct(this.props.product)} color="danger">danger</Button>
                        
           </Link>

      </div>
    )
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
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        {this.viewButtons()}
      </div>
    );
  }
}