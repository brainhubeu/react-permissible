import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';

class Admin extends Component {
  render() {
    return (
      <Grid>
        <PageHeader>Admin view</PageHeader>
        <Row className="show-grid">
          <Col xs={12}>
            {'Only ACCESS_ADMIN-enabled users can visit this page'}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Admin;
