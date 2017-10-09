import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';

class RestrictedPage extends Component {
  render() {
    return (
      <Grid>
        <PageHeader>
          Restricted page
        </PageHeader>
        <Row className="show-grid">
          <Col xs={12}>
            This restricted page is available only for users with ACCESS_ADMIN permission.
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default RestrictedPage;
