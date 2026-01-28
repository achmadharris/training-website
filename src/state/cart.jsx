import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const STORAGE_KEY = 'training_cart_v1'

function safeParse(json, fallback) {
  try {
    const v = JSON.parse(json)
    return v ?? fallback
  } catch {
    return fallback
  }
}

function loadInitialState() {
  if (typeof window === 'undefined') return { items: {} }
  const raw = window.localStorage.getItem(STORAGE_KEY)
  const parsed = safeParse(raw, { items: {} })
  if (!parsed || typeof parsed !== 'object') return { items: {} }
  if (!parsed.items || typeof parsed.items !== 'object') return { items: {} }
  return { items: parsed.items }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { id } = action
      const currentQty = state.items[id] ?? 0
      return { ...state, items: { ...state.items, [id]: currentQty + 1 } }
    }
    case 'SET_QTY': {
      const { id, qty } = action
      const next = { ...state.items }
      if (!qty || qty <= 0) delete next[id]
      else next[id] = qty
      return { ...state, items: next }
    }
    case 'REMOVE': {
      const next = { ...state.items }
      delete next[action.id]
      return { ...state, items: next }
    }
    case 'CLEAR': {
      return { ...state, items: {} }
    }
    default:
      return state
  }
}

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, loadInitialState)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }))
  }, [state.items])

  const api = useMemo(() => {
    const items = state.items
    const itemCount = Object.values(items).reduce((sum, qty) => sum + qty, 0)

    return {
      items,
      itemCount,
      add: (id) => dispatch({ type: 'ADD', id }),
      setQty: (id, qty) => dispatch({ type: 'SET_QTY', id, qty }),
      remove: (id) => dispatch({ type: 'REMOVE', id }),
      clear: () => dispatch({ type: 'CLEAR' }),
    }
  }, [state.items])

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

