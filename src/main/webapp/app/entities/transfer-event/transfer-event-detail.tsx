import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './transfer-event.reducer';
import { ITransferEvent } from 'app/shared/model/transfer-event.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITransferEventDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class TransferEventDetail extends React.Component<ITransferEventDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { transferEventEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            TransferEvent [<b>{transferEventEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="fromAddress">From Address</span>
            </dt>
            <dd>{transferEventEntity.fromAddress}</dd>
            <dt>
              <span id="toAddress">To Address</span>
            </dt>
            <dd>{transferEventEntity.toAddress}</dd>
            <dt>
              <span id="value">Value</span>
            </dt>
            <dd>{transferEventEntity.value}</dd>
            <dt>Transaction</dt>
            <dd>{transferEventEntity.transactionId ? transferEventEntity.transactionId : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/transfer-event" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity/transfer-event/${transferEventEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ transferEvent }: IRootState) => ({
  transferEventEntity: transferEvent.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransferEventDetail);
