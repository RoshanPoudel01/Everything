import { useForm } from "react-hook-form";
import SearchBar from "../Components/SearchBar";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import apiCall from "../Helper/Axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// const schema = yup.object().shape({
//   username: yup.string().required("Name is required!!"),
//   // .matches(/^[aA-zZ\s]+$/, "Name cannot contain values other then A-Za-z "),
//   phone: yup.string().required("Phone number is required"),
//   // .matches(/^[0-9\s]+$/, "Phone can only be number value "),
//   // email: yup.string().email().required("E-mail is required!!"),
//   password: yup
//     .string()
//     // .min(8, "Password must be of more than 8 characters")
//     // .max(32, "Password must be of less than 32 characters")
//     .required("Password is required"),
//   // gender: yup.string().required("Please Choose a value"),
//   // fileInput: yup.string().required("Please choose a file"),
// });
const schema = yup.object().shape({
  title: yup.string().required("Name is required!!"),
  // .matches(/^[aA-zZ\s]+$/, "Name cannot contain values other then A-Za-z "),
  reps: yup.string().required("Phone number is required"),
  // .matches(/^[0-9\s]+$/, "Phone can only be number value "),
  // email: yup.string().email().required("E-mail is required!!"),
  load: yup
    .string()
    // .min(8, "Password must be of more than 8 characters")
    // .max(32, "Password must be of less than 32 characters")
    .required("Password is required"),
  // gender: yup.string().required("Please Choose a value"),
  // fileInput: yup.string().required("Please choose a file"),
});

// interface formData {
//   username: string;
//   password: string;
//   email: string;
//   gender: string;
//   phone: string;
//   fileInput: string;
// }

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const handleRegister = async (data: any) => {
    // console.log("first");
    console.log(JSON.stringify(data));
    // const postData = await apiCall.post("api/workouts", JSON.stringify(data));
    // console.log(postData?.data?.response);
    reset();
  };

  return (
    <>
      <SearchBar />

      <Box overflow={"auto"} p={4}>
        <FormControl>
          <SimpleGrid columns={2} spacing={2}>
            <Box>
              <FormLabel>Name</FormLabel>
              <Input
                id="title"
                variant={"outline"}
                {...register("title", { required: true })}
              />
              <Text color="red">{errors.title?.message}</Text>
            </Box>
            {/* <Box>
              <FormLabel>Email</FormLabel>
              <Input
                id="email"
                variant={"outline"}
                type="email"
                {...register("email")}
              />
              <Text color="red">{errors.email?.message}</Text>
            </Box> */}
            <Box>
              <FormLabel>Reps</FormLabel>
              <Input
                id="reps"
                variant={"outline"}
                type="text"
                {...register("reps")}
              />
              <Text color="red">{errors.reps?.message}</Text>
            </Box>
            <Box>
              <FormLabel>Load</FormLabel>
              <Input
                variant={"outline"}
                id="load"
                type="number"
                {...register("load")}
              />
              <Text color="red">{errors.load?.message}</Text>
            </Box>
            {/* <Box>
              <FormLabel>Gender</FormLabel>

              <Select {...register("gender")} placeholder="Select One Value">
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
              </Select>
              <Text color="red">{errors.gender?.message}</Text>
            </Box>
            <Box>
              <FormLabel>File</FormLabel>
              <Input
                type="file"
                {...register("fileInput")}
                variant={"outline"}
              />
              <Text color="red">{errors.fileInput?.message}</Text>
            </Box> */}
            <Button
              onClick={handleSubmit(handleRegister)}
              mt={2}
              maxW={"100px"}
              type="submit"
              colorScheme="blue"
            >
              Submit
            </Button>
          </SimpleGrid>
        </FormControl>
      </Box>
    </>
  );
};

export default ProductForm;
