import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  input: {
    display: 'block',
    width: '100%',
    border: '1px solid #bbadad',
    borderRadius: '4px',
    height: 50,
    marginTop: '20px'
  },
  containerButton: {
    display: 'block',
    marginTop: '20px'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentForm: {
    width: '50%',
    padding: 30,
    border: '1px solid #bbadad',
    borderRadius: 10
  },
  contentButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35
  }
}));