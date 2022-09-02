import { SimpleGrid } from "@chakra-ui/react";
import SpeakerCard from "./SpeakerCard";
import { speakers } from "./_speakersData";

const sortedSpeakers = speakers.sort((a, b) => {
  if (a.sessionTime < b.sessionTime) {
    return -1;
  }
  if (a.sessionTime > b.sessionTime) {
    return 1;
  }
  return 0;
});

const SpeakersGrid = () => (
  <SimpleGrid
    columns={{ base: 1 }}
    spacing={{ base: 4 }}
    alignItems="flex-start"
    justifyItems="center"
  >
    {sortedSpeakers.map(speaker => (
      <SpeakerCard
        key={speaker.sessionTime}
        title={speaker.title}
        nameOne={speaker.nameOne}
        orgOne={speaker.orgOne}
        imageOne={speaker.imageOne}
        nameTwo={speaker.nameTwo}
        orgTwo={speaker.orgTwo}
        imageTwo={speaker.imageTwo}
      />
    ))}
  </SimpleGrid>
);
export default SpeakersGrid;
