export const styles = {
  container: {
    maxWidth: '100%',
    overflowX: 'auto',
    paddingBottom: '8px',
    paddingTop: '2.4px',
    paddingLeft: '8px',
    paddingRight: '8px',
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
  error: theme => ({
    color: theme.error,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  })
};