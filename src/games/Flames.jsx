import { React, useState } from "react";
import "../sass/flames.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../components/Input";
import Container from "@material-ui/core/Container/Container";
import Box from "@material-ui/core/Box/Box";
import Typography from "@material-ui/core/Typography/Typography";
import { flamesResult } from "../services/flamesResult";
import CommonButton from "../components/Button";
import db from '../firebase'

const Flames = () => {
  const [result, setResult] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      firstname: "",
      secondname: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .required("Name is Required")
        .min(3, "Atleat 3 characters.")
        .max(15, "Not more than 15 letters.")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets."),
      firstname: Yup.string()
        .trim()
        .required("First name is Required")
        .min(3, "Atleat 3 characters.")
        .max(15, "Not more than 15 letters.")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets."),
      secondname: Yup.string()
        .trim()
        .required("Second name is Required")
        .min(3, "Atleat 3 characters.")
        .max(15, "Not more than 15 letters.")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets."),
    }),
    onSubmit: (names) => {
      setResult(flamesResult(names));
      db.collection('namesData').add({
        name: names.name,
        firstname: names.firstname,
        secondname: names.secondname,
        result: result,
      });
    },
  });

  const { name, firstname, secondname } = formik.errors;

  return (
    <Container maxWidth="xs" className="flames-container">
      <Box
        className="flames-box"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box>
          <Typography variant="h3">Flames</Typography>
          <Typography variant="overline">Know Your Relationship</Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Input
                label="Your Name"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                formik={formik}
                color="primary"
                className="flames-name"
              />
              <Typography variant="caption" align="left">
                {name ? name : null}
              </Typography>
            </Box>

            <Box display="flex" flexDirection="column" alignItems="center">
              <Input
                label="First Name"
                id="firstname"
                name="firstname"
                placeholder="Enter Your Firstname"
                formik={formik}
                color="primary"
                className="flames-firstname"
              />
              <Typography variant="caption" align="left">
                {firstname ? firstname : null}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Input
                label="Second Name"
                id="secondname"
                name="secondname"
                placeholder="Enter Your Secondname"
                formik={formik}
                color="secondary"
                className="flames-secondname"
              />
              <Typography variant="caption" align="left">
                {secondname ? secondname : null}
              </Typography>
            </Box>
            <CommonButton type="submit" text="FLAMES" />
            <Typography className="flames-result-display">{result}</Typography>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Flames;
