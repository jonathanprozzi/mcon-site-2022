import { SimpleGrid } from "@chakra-ui/react";
import SpeakerCard from "./SpeakerCard";
import { speakers } from "./_speakersData";

const SpeakersGrid = () => (
  <SimpleGrid
    columns={{ base: 1, md: 2 }}
    spacing={{ base: "4", md: "12", lg: "16" }}
    margin={12}
    alignItems="flex-start"
    justifyItems="center"
  >
    {speakers.map(speaker => (
      <SpeakerCard
        key={speaker.name}
        name={speaker.name}
        image={speaker.image}
        organization={speaker.organization}
      />
    ))}
  </SimpleGrid>
);
export default SpeakersGrid;
