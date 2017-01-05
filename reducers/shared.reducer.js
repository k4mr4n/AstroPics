export const requestStarted = (state, action) => state.set('fetching', true)
export const requestCompleted = (state, action) => state.set('fetching', false)
