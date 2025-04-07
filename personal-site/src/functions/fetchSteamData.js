//import axios from 'axios';
const axios = require('axios');

export async function handler(event, context) {

  try {
    const response = await axios.get(
      `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/`,
      {
        params: {
          key: 'CD174C363DE6011CE694BBA46D27C37E',
          steamid: '76561198248648080',
          format: 'json',
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
