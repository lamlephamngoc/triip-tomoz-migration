import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './transaction.reducer';
import { ITransaction } from 'app/shared/model/transaction.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITransactionDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class TransactionDetail extends React.Component<ITransactionDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { transactionEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            Transaction [<b>{transactionEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="hash">Hash</span>
            </dt>
            <dd>{transactionEntity.hash}</dd>
            <dt>
              <span id="network">Network</span>
            </dt>
            <dd>{transactionEntity.network}</dd>
            <dt>
              <span id="blockNumber">Block Number</span>
            </dt>
            <dd>{transactionEntity.blockNumber}</dd>
            <dt>
              <span id="fromAddress">From Address</span>
            </dt>
            <dd>{transactionEntity.fromAddress}</dd>
            <dt>
              <span id="toAddress">To Address</span>
            </dt>
            <dd>{transactionEntity.toAddress}</dd>
            <dt>
              <span id="value">Value</span>
            </dt>
            <dd>{transactionEntity.value}</dd>
            <dt>
              <span id="gasUsed">Gas Used</span>
            </dt>
            <dd>{transactionEntity.gasUsed}</dd>
            <dt>
              <span id="gasPrice">Gas Price</span>
            </dt>
            <dd>{transactionEntity.gasPrice}</dd>
            <dt>Transfer Event</dt>
            <dd>{transactionEntity.transferEventId ? transactionEntity.transferEventId : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/transaction" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity/transaction/${transactionEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ transaction }: IRootState) => ({
  transactionEntity: transaction.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionDetail);
