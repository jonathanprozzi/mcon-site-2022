import { NextApiHandler } from "next";
import { eventSubmissionsTable } from "../../libs/airtable";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb"
    }
  }
};

const createEventSubmission: NextApiHandler = async (req, res) => {
  const {
    daoName,
    eventTitle,
    eventDescription,
    eventStartTime,
    eventEndTime,
    organizerTelegramHandle,
    otherNotes
  } = req.body;

  try {
    const airtableRecord = await eventSubmissionsTable.create({
      "DAO Name": daoName,
      "Event Title": eventTitle,
      "Event Description": eventDescription,
      "Event Start Time": eventStartTime,
      "Event End Time": eventEndTime,
      "Organizer Telegram Handle": organizerTelegramHandle,
      "Other Notes": otherNotes
    });

    res.status(200).json({
      msg: "Success.",
      airtableRecord
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      err: "Something went wrong with submitting the event."
    });
  }
};

export default createEventSubmission;
