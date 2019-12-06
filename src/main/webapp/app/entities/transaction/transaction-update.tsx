import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ITransferEvent } from 'app/shared/model/transfer-event.model';
import { getEntities as getTransferEvents } from 'app/entities/transfer-event/transfer-event.reducer';
import { getEntity, updateEntity, createEntity, reset } from './transaction.reducer';
import { ITransaction } from 'app/shared/model/transaction.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ITransactionUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface ITransactionUpdateState {
  isNew: boolean;
  transferEventId: string;
}

export class TransactionUpdate extends React.Component<ITransactionUpdateProps, ITransactionUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      transferEventId: '0',
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.updateSuccess !== this.props.updateSuccess && nextProps.updateSuccess) {
      this.handleClose();
    }
  }

  componentDidMount() {
    if (!this.state.isNew) {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getTransferEvents();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { transactionEntity } = this.props;
      const entity = {
        ...transactionEntity,
        ...values
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/entity/transaction');
  };

  render() {
    const { transactionEntity, transferEvents, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="triipChainnetApp.transaction.home.createOrEditLabel">Create or edit a Transaction</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : transactionEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">ID</Label>
                    <AvInput id="transaction-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="hashLabel" for="hash">
                    Hash
                  </Label>
                  <AvField id="transaction-hash" type="text" name="hash" />
                </AvGroup>
                <AvGroup>
                  <Label id="networkLabel">Network</Label>
                  <AvInput
                    id="transaction-network"
                    type="select"
                    className="form-control"
                    name="network"
                    value={(!isNew && transactionEntity.network) || 'MAINNET'}
                  >
                    <option value="MAINNET">MAINNET</option>
                    <option value="ROPSTEN">ROPSTEN</option>
                    <option value="RINKEBY">RINKEBY</option>
                    <option value="TOMO_TESTNET">TOMO_TESTNET</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="blockNumberLabel" for="blockNumber">
                    Block Number
                  </Label>
                  <AvField id="transaction-blockNumber" type="string" className="form-control" name="blockNumber" />
                </AvGroup>
                <AvGroup>
                  <Label id="fromAddressLabel" for="fromAddress">
                    From Address
                  </Label>
                  <AvField id="transaction-fromAddress" type="text" name="fromAddress" />
                </AvGroup>
                <AvGroup>
                  <Label id="toAddressLabel" for="toAddress">
                    To Address
                  </Label>
                  <AvField id="transaction-toAddress" type="text" name="toAddress" />
                </AvGroup>
                <AvGroup>
                  <Label id="valueLabel" for="value">
                    Value
                  </Label>
                  <AvField id="transaction-value" type="text" name="value" />
                </AvGroup>
                <AvGroup>
                  <Label id="gasUsedLabel" for="gasUsed">
                    Gas Used
                  </Label>
                  <AvField id="transaction-gasUsed" type="text" name="gasUsed" />
                </AvGroup>
                <AvGroup>
                  <Label id="gasPriceLabel" for="gasPrice">
                    Gas Price
                  </Label>
                  <AvField id="transaction-gasPrice" type="text" name="gasPrice" />
                </AvGroup>
                <AvGroup>
                  <Label for="transferEvent.id">Transfer Event</Label>
                  <AvInput id="transaction-transferEvent" type="select" className="form-control" name="transferEventId">
                    <option value="" key="0" />
                    {transferEvents
                      ? transferEvents.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/transaction" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />
                  &nbsp;
                  <span className="d-none d-md-inline">Back</span>
                </Button>
                &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                  <FontAwesomeIcon icon="save" />
                  &nbsp; Save
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  transferEvents: storeState.transferEvent.entities,
  transactionEntity: storeState.transaction.entity,
  loading: storeState.transaction.loading,
  updating: storeState.transaction.updating,
  updateSuccess: storeState.transaction.updateSuccess
});

const mapDispatchToProps = {
  getTransferEvents,
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionUpdate);
