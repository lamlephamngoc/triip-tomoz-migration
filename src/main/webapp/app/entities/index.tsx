import React from 'react';
import { Switch } from 'react-router-dom';

// tslint:disable-next-line:no-unused-variable
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Transaction from './transaction';
import TransferEvent from './transfer-event';
import Job from './job';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}/transaction`} component={Transaction} />
      <ErrorBoundaryRoute path={`${match.url}/transfer-event`} component={TransferEvent} />
      <ErrorBoundaryRoute path={`${match.url}/job`} component={Job} />
      {/* jhipster-needle-add-route-path - JHipster will routes here */}
    </Switch>
  </div>
);

export default Routes;
