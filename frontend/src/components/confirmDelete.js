import { createConfirmation } from 'react-confirm';
import ConfirmDeleteDialog from './ConfirmDeleteDialog';
 
// create confirm function  
const confirmDelete = createConfirmation(ConfirmDeleteDialog);

 
// This is optional. But I recommend to define your confirm function easy to call.
export default function(confirmation, options = {}) {

  // You can pass whatever you want to the component. These arguments will be your Component's props
  return confirmDelete({ confirmation, options });
}

//from https://www.npmjs.com/package/react-confirm