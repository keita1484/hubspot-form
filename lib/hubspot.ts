import axios from 'axios'

export const submitHubspotForm = async (email: string, firstname: string, lastname: string, msg: string) => {
  const portalId = '20536962'
  const formId = '23c091f6-32ab-4d82-ac44-24005e743ac2'
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