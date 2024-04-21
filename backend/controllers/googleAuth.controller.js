// const { OAuth2Client } = require("google-auth-library");
const { google } = require("googleapis");

const { getEvent } = require("../controllers/event.controller.js");
const Event = require("../models/event.model.js");

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://dreamy-concha-20d2a1.netlify.app"
);

// const oAuth2Client = new OAuth2Client(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET,
//   "http://localhost:5173"
// );

exports.getToken = async (req, res) => {
  try {
    console.log("in controller");
    const { code } = req.body;
    console.log(req.body);

    const { tokens } = await oAuth2Client.getToken(code);

    const { refresh_token } = tokens;
    console.log(refresh_token, "refreshToken");

    const { id } = req.params;
    const event = await Event.findById(id).populate("attending");
    console.log(event);

    const createEvent = {
      summary: event.title,
      location: event.location,
      description: event.description,
      start: {
        dateTime: event.startDate,
      },
      end: {
        dateTime: event.endDate,
      },
      // attendees: [
      //   { email: "lpage@example.com" },
      //   { email: "sbrin@example.com" },
      // ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 15 },
        ],
      },
    };

    oAuth2Client.setCredentials({ refresh_token: refresh_token });
    const calendar = google.calendar("v3");
    const response = await calendar.events.insert({
      calendarId: "primary",
      auth: oAuth2Client,
      requestBody: createEvent,
    });

    console.log(response.data);
    res.status(200).send("event added to calendar");
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};
