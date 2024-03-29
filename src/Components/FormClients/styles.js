import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  input: {
    display: 'block',
    width: '100%',
    border: '1px solid #bbadad',
    borderRadius: '4px',
    padding: '18.5px 14px',
    marginTop: '20px'
  },
  containerButton: {
    display: 'block',
    marginTop: '20px'
  },
  inputError: {
    fontSize: 15,
    color: '#ff0000'
  }
}));