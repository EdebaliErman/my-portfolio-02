
import * as yup from 'yup'

export const validation = yup.object().shape({
    user_name: yup.string().required('Please write name.... ! '),
    subject: yup.string().required('Please write subject.... ! '),
    user_mail: yup.string().email('Please write true mail.... ! ').required(' The mail  field is mandatory ... !'),
    message: yup.string().required('Please write message.... ! '),

})

