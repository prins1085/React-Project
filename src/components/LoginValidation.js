import * as Yup from "yup";
import "yup-phone";



export const LoginValidation = Yup.object({
  mobile: Yup.string().matches(/^[0-9]{10}$/,'Invalid mobile number').required("Mobile number is required"),
  role : Yup.string().oneOf(["admin", "user"]).required('Role is required'),
 
});
