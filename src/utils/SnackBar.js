import {showMessage} from 'react-native-flash-message';
import {Colors} from '../utils';
const SnackBar = {
  showErrorMsg: (msg, time) => {
    console.log('calling', msg);
    showMessage({
      message: msg,
      type: 'info',
      autoHide: true,
      duration: time,
      position: 'top',
      backgroundColor: Colors.red,
      statusBarHeight: 35,
      titleStyle: {textAlignVertical: 'top'},
      style: {
        alignItems: 'center',
      },
    });
  },
};
export default SnackBar;
