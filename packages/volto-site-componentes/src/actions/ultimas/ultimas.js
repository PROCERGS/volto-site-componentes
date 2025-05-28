import { LIST_ULTIMAS } from '../../constants/ActionTypes';

export function listUltimas(endpoint) {
  if (endpoint === 'Padrao') {
    endpoint = '';
  }
  return {
    type: LIST_ULTIMAS,
    request: {
      op: 'get',
      path: `@ultimas_noticias${endpoint ? `?${endpoint}=true` : ''}`,
    },
  };
}
