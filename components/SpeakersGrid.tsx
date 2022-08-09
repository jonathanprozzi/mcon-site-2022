import { SimpleGrid } from "@chakra-ui/react";
import SpeakerCard from "./SpeakerCard";
import { speakers } from "./_speakersData";

const SpeakersGrid = () => (
  <SimpleGrid
    columns={{ base: 1 }}
    spacing={{ base: "4", md: "12", lg: "16" }}
    margin={12}
    alignItems="flex-start"
    justifyItems="center"
  >
    {speakers.map(speaker => (
      <SpeakerCard
        key={speaker.sessionTime}
        title={speaker.title}
        sessionTime={speaker.sessionTime}
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
