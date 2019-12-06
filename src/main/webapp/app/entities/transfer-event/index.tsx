import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TransferEvent from './transfer-event';
import TransferEventDetail from './transfer-event-detail';
import TransferEventUpdate from './transfer-event-update';
import TransferEventDeleteDialog from './transfer-event-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TransferEventUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TransferEventUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TransferEventDetail} />
      <ErrorBoundaryRoute path={match.url} component={TransferEvent} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={TransferEventDeleteDialog} />
  </>
);

export default Routes;
