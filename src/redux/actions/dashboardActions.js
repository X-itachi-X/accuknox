import { ADD_WIDGET, REMOVE_WIDGET } from '../types';

export const addWidget = (categoryId, widget) => ({
  type: ADD_WIDGET,
  payload: { categoryId, widget },
});

export const removeWidget = (categoryId, widgetId) => ({
  type: REMOVE_WIDGET,
  payload: { categoryId, widgetId },
});
