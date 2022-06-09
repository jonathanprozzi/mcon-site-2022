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
  const { contactName } = req.body;
  const { contactEmail } = req.body;

  try {
    const airtableRecord = await eventSubmissionsTable.create({
      Name: contactName,
      Email: contactEmail
    });

    res.status(200).json({
      msg: "went through!",
      airtableRecord
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      err: "Something went wrong with creating the request."
    });
  }
};

export default createEventSubmission;
