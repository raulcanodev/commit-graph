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
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    minHeight: '100px'
  },
  spinner: {
    display: 'inline-block',
    width: '30px',
    height: '30px',
    position: 'relative'
  },
  error: theme => ({
    color: theme.error,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  })
};