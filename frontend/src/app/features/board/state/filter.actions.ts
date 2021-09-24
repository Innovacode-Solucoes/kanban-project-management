import { createAction, props } from '@ngrx/store';


export const setSearchTermFilter = createAction(
  '[Filter] Definir Termo de Pesquisa',
  props<{ searchTerm: string }>()
);

export const toggleUser = createAction(
  '[Filter] Alternar Usuário',
  props<{ userId: string }>()
)

export const toggleOnlyMyIssues = createAction('[Filter] Apenas Minhas Issues');

export const toggleRecentlyUpdated = createAction('[Filter] Atualizados Recentemenet');

export const clearAllFilters = createAction('[Filter] Limpar Tudo');




