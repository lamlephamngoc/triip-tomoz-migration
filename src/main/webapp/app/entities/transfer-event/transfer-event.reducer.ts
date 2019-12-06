import axios from 'axios';
import {
  parseHeaderForLinks,
  loadMoreDataWhenScrolled,
  ICrudGetAction,
  ICrudGetAllAction,
  ICrudPutAction,
  ICrudDeleteAction
} from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITransferEvent, defaultValue } from 'app/shared/model/transfer-event.model';

export const ACTION_TYPES = {
  FETCH_TRANSFEREVENT_LIST: 'transferEvent/FETCH_TRANSFEREVENT_LIST',
  FETCH_TRANSFEREVENT: 'transferEvent/FETCH_TRANSFEREVENT',
  CREATE_TRANSFEREVENT: 'transferEvent/CREATE_TRANSFEREVENT',
  UPDATE_TRANSFEREVENT: 'transferEvent/UPDATE_TRANSFEREVENT',
  DELETE_TRANSFEREVENT: 'transferEvent/DELETE_TRANSFEREVENT',
  RESET: 'transferEvent/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ITransferEvent>,
  entity: defaultValue,
  links: { next: 0 },
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type TransferEventState = Readonly<typeof initialState>;

// Reducer

export default (state: TransferEventState = initialState, action): TransferEventState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TRANSFEREVENT_LIST):
    case REQUEST(ACTION_TYPES.FETCH_TRANSFEREVENT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_TRANSFEREVENT):
    case REQUEST(ACTION_TYPES.UPDATE_TRANSFEREVENT):
    case REQUEST(ACTION_TYPES.DELETE_TRANSFEREVENT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_TRANSFEREVENT_LIST):
    case FAILURE(ACTION_TYPES.FETCH_TRANSFEREVENT):
    case FAILURE(ACTION_TYPES.CREATE_TRANSFEREVENT):
    case FAILURE(ACTION_TYPES.UPDATE_TRANSFEREVENT):
    case FAILURE(ACTION_TYPES.DELETE_TRANSFEREVENT):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_TRANSFEREVENT_LIST):
      const links = parseHeaderForLinks(action.payload.headers.link);
      return {
        ...state,
        links,
        loading: false,
        totalItems: action.payload.headers['x-total-count'],
        entities: loadMoreDataWhenScrolled(state.entities, action.payload.data, links)
      };
    case SUCCESS(ACTION_TYPES.FETCH_TRANSFEREVENT):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_TRANSFEREVENT):
    case SUCCESS(ACTION_TYPES.UPDATE_TRANSFEREVENT):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_TRANSFEREVENT):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {}
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'api/transfer-events';

// Actions

export const getEntities: ICrudGetAllAction<ITransferEvent> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_TRANSFEREVENT_LIST,
    payload: axios.get<ITransferEvent>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getEntity: ICrudGetAction<ITransferEvent> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TRANSFEREVENT,
    payload: axios.get<ITransferEvent>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ITransferEvent> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_TRANSFEREVENT,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const updateEntity: ICrudPutAction<ITransferEvent> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_TRANSFEREVENT,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ITransferEvent> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_TRANSFEREVENT,
    payload: axios.delete(requestUrl)
  });
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
