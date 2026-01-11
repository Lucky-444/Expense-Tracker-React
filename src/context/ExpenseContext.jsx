import { createContext, useContext, useEffect, useReducer } from "react";

const ExpenseContext = createContext();

const initialState = {
  expenses: [],
  loading: false,
  error: null,
};

const expenseReducer = (state, action) => {
  switch ((action, type)) {
    case "ADD EXPENSES":
      return { ...state, expenses: [...state.expenses, action.payload] };
    case "DELETE EXPENSES":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload.id
        ),
      };

    case "UPDATE EXPENSES":
      return {
        ...state,
        expenses: state.expense.map((expense) =>
          expense.id === action.payload.id ? action.payload : expense
        ),
      };

    case "SET LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "SET ERROR":
      return {
        ...state,
        err: action.payload,
      };

    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  //save expense to localstorage
  useEffect(() => {
    try {
      localStorage.setItem("expense", JSON.stringify(state.expenses));
    } catch (err) {
      console.log("Failed To store expenses into Local Storage", err);

      dispatch({
        type: "SET ERROR",
        payload: err,
      });
    }
  }, [state.expenses]);

  const value = {
    ...state,
    addExpense: (expense) => {
      const newExpense = {
        ...expense,
        id: crypto.randomUUID(),
      };

      dispatch({
        type: "ADD_EXPENSE",
        payload: newExpense,
      });
    },
    deleteExpense: (id) => {
      dispatch({
        type: "DELETE_EXPENSE",
        payload: { id },
      });
    },
    updateExpense: (expense) => {
      dispatch({ type: "UPDATE_EXPENSE", payload: expense });
    },
  };

  return (
    <ExpenseContext.Provider value={{ value }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => {
  const context = useContext(ExpenseContext);
  if (context === undefined) {
    throw new Error("useExpenses must be used within an ExpenseProvider");
  }
  return context;
};
