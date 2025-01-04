
export const styles = {
  container: {
    maxWidth: '100%',
    overflowX: 'auto',
    padding: '8px',
    borderRadius: '6px'
  },
  graphWrapper: {
    display: 'inline-flex',
    flexDirection: 'column',
    gap: '4px'
  },
  row: {
    display: 'flex',
    gap: '4px'
  },
  square: {
    width: '12px',
    height: '12px',
    borderRadius: '2px',
    transition: 'background-color 0.2s ease'
  },
  loading: theme => ({
    color: theme.loading
  }),
  error: theme => ({
    color: theme.error
  })
};