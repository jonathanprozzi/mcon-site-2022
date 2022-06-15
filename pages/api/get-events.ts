import { minifyRecords, eventSubmissionsTable } from "../../libs/airtable";

const getEvents = (req, res) => {
  return new Promise((resolve, reject) => {
    try {
      const airtableData = [];
      eventSubmissionsTable
        .select({
          view: "Approved Events",
          sort: [{ field: "Created At", direction: "desc" }]
        })
        .eachPage(
          (records, fetchNextPage) => {
            records.forEach(record => {
              const recordData = {
                id: record.id,
                fields: record.fields
              };
              airtableData.push(recordData);
            });
            fetchNextPage();
          },
          error => {
            if (error) {
              console.error(error);
              // eslint-disable-next-line prefer-promise-reject-errors
              reject({ error });
              return;
            }
            resolve(airtableData);
            const minifiedRecords = minifyRecords(airtableData);
            res.statusCode = 200;
            res.json(minifiedRecords);
          }
        );
    } catch (err) {
      console.log(err);
      res.statusCode = 500;
      res.json({ msg: "Something went wrong with the resource request." });
    }
  });
};

export default getEvents;
