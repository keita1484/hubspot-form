import axios from 'axios'

export const submitHubspotForm = async (email: string, firstname: string, lastname: string, msg: string) => {
  const portalId = process.env.NEXT_PUBLIC_PORTAL_Id
  const formId = process.env.NEXT_PUBLIC_FORM_Id
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`

  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  try {
    const res = await axios.post (
      url,
      {
        portalId,
        formId,
        fields: [
          {
            name: 'firstname',
            value: firstname,
          },
          {
            name: 'lastname',
            value: lastname,
          },
          {
            name: 'email',
            value: email,
          },
          {
            name: 'message',
            value: msg,
          },
        ],
      },
      config
    );
    return res;
  } catch(err) {
    const errorMessage = err.response.data || err.message;
    return errorMessage
  }
}