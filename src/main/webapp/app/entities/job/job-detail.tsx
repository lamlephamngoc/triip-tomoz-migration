import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './job.reducer';
import { IJob } from 'app/shared/model/job.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IJobDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class JobDetail extends React.Component<IJobDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { jobEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            Job [<b>{jobEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="address">Address</span>
            </dt>
            <dd>{jobEntity.address}</dd>
            <dt>
              <span id="callback">Callback</span>
            </dt>
            <dd>{jobEntity.callback}</dd>
            <dt>
              <span id="network">Network</span>
            </dt>
            <dd>{jobEntity.network}</dd>
            <dt>
              <span id="contractAddress">Contract Address</span>
            </dt>
            <dd>{jobEntity.contractAddress}</dd>
            <dt>
              <span id="blockNumber">Block Number</span>
            </dt>
            <dd>{jobEntity.blockNumber}</dd>
            <dt>
              <span id="errorDescription">Error Description</span>
            </dt>
            <dd>{jobEntity.errorDescription}</dd>
          </dl>
          <Button tag={Link} to="/entity/job" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity/job/${jobEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ job }: IRootState) => ({
  jobEntity: job.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobDetail);
