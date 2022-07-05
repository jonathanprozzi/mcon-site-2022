import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  Input,
  Textarea,
  Stack,
  FormErrorMessage,
  FormLabel,
  FormControl,
  useToast
} from "@chakra-ui/react";
import { CustomDatePickerButton } from "components/CustomDatePickerButton";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from "react-hook-form";

interface EventSubmissionFormProps {
  onClose: () => void;
}

const EventSubmissionForm = ({ onClose }: EventSubmissionFormProps) => {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [isSending, setSending] = useState(false);
  const toast = useToast();

  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm();

  useEffect(() => {
    setValue("eventStartTime", startTime);
    setValue("eventEndTime", endTime);
  }, []);

  async function onSubmit(values) {
    console.log("values", values);
    setSending(false);

    const res = await fetch("/api/create-event-submission", {
      method: "POST",
      body: JSON.stringify({
        daoName: values.daoName,
        eventTitle: values.eventTitle,
        eventDescription: values.eventDescription,
        eventStartTime: values.eventStartTime,
        eventEndTime: values.eventEndTime,
        organizerTelegramHandle: values.organizerTelegramHandle,
        otherNotes: values.otherNotes
      }),
      headers: {
        "Content-type": "application/json"
      }
    });

    const apiResponse = await res.json();
    if (apiResponse) {
      toast({
        title: "Request Sent",
        description: "Your request has been sent",
        status: "success",
        duration: 3000,
        isClosable: true
      });
      setSending(false);
      onClose();
    }
  }

  return (
    <Box as="section">
      <Box bg="primaryRed" marginX="auto">
        <Box color="primaryRed" fontFamily="Dagheest">
          <Box bgColor="primaryNeon" padding={6}>
            MCON 2022 will have side events for participants to join. If
            you&apos;re interested in submitting a side event for consideration,
            fill out this form.
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack marginTop={6}>
                <FormControl isInvalid={errors.name}>
                  <FormLabel htmlFor="daoName">DAO Name</FormLabel>
                  <Input
                    id="daoName"
                    aria-label="Enter your DAO's name"
                    placeholder="DAO Name"
                    variant="filled"
                    {...register("daoName", {
                      required: "DAO name is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length should be 2"
                      }
                    })}
                  />
                  <FormErrorMessage>
                    {errors.daoName && errors.daoName.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.eventTitle}>
                  <FormLabel htmlFor="eventTitle">Event Title</FormLabel>
                  <Input
                    id="eventTitle"
                    aria-label="Enter your event title"
                    placeholder="Event title"
                    variant="filled"
                    {...register("eventTitle", {
                      required: "Your event title is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length should be 4 characters"
                      }
                    })}
                  />
                  <FormErrorMessage>
                    {errors.eventTitle && errors.eventTitle.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.eventDescription}>
                  <FormLabel htmlFor="eventDescription">
                    Event Description
                  </FormLabel>
                  <Textarea
                    id="eventDescription"
                    aria-label="Enter your event description"
                    placeholder="Event description"
                    variant="filled"
                    {...register("eventDescription", {
                      required: "Your event description is required",
                      minLength: {
                        value: 2,
                        message: "Minimum length should be 2 characters"
                      }
                    })}
                  />
                  <FormErrorMessage>
                    {errors.eventDescription && errors.eventDescription.message}
                  </FormErrorMessage>
                </FormControl>
                <Flex direction={{ base: "column" }}>
                  <FormControl isInvalid={errors.eventStartTime}>
                    <FormLabel htmlFor="eventStartTime">
                      Event Start Time
                    </FormLabel>
                    <Controller
                      name="eventStartTime"
                      control={control}
                      shouldUnregister={false}
                      render={({ field }) => (
                        <ReactDatePicker
                          {...field}
                          showTimeSelect
                          timeFormat="hh:mm"
                          timeIntervals={30}
                          dateFormat="yyyy/MM/dd hh:mm aa"
                          onChange={date => field.onChange(date)}
                          selected={field.value}
                          customInput={<CustomDatePickerButton />}
                        />
                      )}
                    />
                    <FormErrorMessage>
                      {errors.eventStartTime && errors.eventStartTime.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.eventEndTime}>
                    <FormLabel htmlFor="eventEndTime">Event End Time</FormLabel>
                    <Controller
                      name="eventEndTime"
                      control={control}
                      shouldUnregister={false}
                      render={({ field }) => (
                        <ReactDatePicker
                          {...field}
                          showTimeSelect
                          timeFormat="hh:mm"
                          timeIntervals={30}
                          dateFormat="yyyy/MM/dd hh:mm aa"
                          onChange={date => field.onChange(date)}
                          selected={field.value}
                          customInput={<CustomDatePickerButton />}
                        />
                      )}
                    />
                    <FormErrorMessage>
                      {errors.eventEndTime && errors.eventEndTime.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
                <FormControl isInvalid={errors.organizerTelegramHandle}>
                  <FormLabel htmlFor="organizerTelegramHandle">
                    Organizer&apos;s Telegram Handle
                  </FormLabel>
                  <Input
                    id="organizerTelegramHandle"
                    aria-label="Enter the event organizer's Telegram handle"
                    placeholder="Telegram Handle"
                    variant="filled"
                    {...register("organizerTelegramHandle", {
                      required: "Telegram Handle is required",
                      minLength: {
                        value: 2,
                        message:
                          "Minimum length should be at least 2 characters"
                      }
                    })}
                  />
                  <FormErrorMessage>
                    {errors.organizerTelegramHandle &&
                      errors.organizerTelegramHandle.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.otherNotes}>
                  <FormLabel htmlFor="otherNotes">Other Notes</FormLabel>
                  <Textarea
                    id="otherNotes"
                    aria-label="Enter any other notes"
                    placeholder="Any other notes"
                    variant="filled"
                    {...register("otherNotes")}
                  />
                  <FormErrorMessage>
                    {errors.otherNotes && errors.otherNotes.message}
                  </FormErrorMessage>
                </FormControl>
                <Button
                  isLoading={isSubmitting}
                  type="submit"
                  borderRadius="none"
                  paddingY={2}
                  paddingX={2}
                  transition="all ease-in-out .25s"
                  color="primaryNeon"
                  bgColor="black"
                  fontFamily="Dagheest"
                  border="2px solid"
                  borderColor="primaryNeon"
                  width="100%"
                  minWidth="10rem"
                  _hover={{
                    bgColor: "black",
                    color: "primaryRed",
                    border: "2px solid",
                    borderColor: "primaryRed"
                  }}
                >
                  Submit Event
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EventSubmissionForm;
