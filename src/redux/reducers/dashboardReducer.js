import { ADD_WIDGET, REMOVE_WIDGET } from '../types';
import initialData from '../../data/initialData.json';

const initialState = initialData;

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id == action.payload.categoryId
            ? {
                ...category,
                widgets: [...category.widgets, action.payload.widget],
              }
            : category
        ),
      };

    case REMOVE_WIDGET:
      console.log('Remove action received:', action);
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(
                  (widget) => widget.id !== action.payload.widgetId
                ),
              }
            : category
        ),
      };

    default:
      return state;
  }
};

export default dashboardReducer;
