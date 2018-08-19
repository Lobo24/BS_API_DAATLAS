import React from 'react';
import { Link } from 'react-router-dom'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import DetailCont from './../countryDetail/detailCont/';
import Provinces from './../countryDetail/provinces/';

export default class Tabs extends React.Component {
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
  extractId = (url) => {
    const index = url.lastIndexOf('/') + 1;
    return url.slice(index, url.length)
  }
  render() {

    var { country } = this.props;

    return (
      <div className='container'>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>
              <p className='tabs-nav-text'>Country</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <p className='tabs-nav-text'>Provinces</p>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <DetailCont country={country} />
          </TabPane>
          <TabPane tabId="2">
            <Provinces provinces={country.provinces} />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}