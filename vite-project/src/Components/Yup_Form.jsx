import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Col, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";



const FILE_SIZE = 6 * 1024 * 1024;
const RESUME_SIZE = 8 * 1024 * 1024;

const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name required"),

    age: yup
        .number()
        .typeError("Age must be a number")
        .required("Age required")
        .min(18, "Minimum age is 18")
        .max(40, "Maximum age is 40"),

    password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be 6–10 characters")
        .max(10, "Password must be 6–10 characters")
        .matches(/^\S*$/, "Password must not contain spaces"),

    phone: yup.string().matches(/^\+?[1-9]\d{9,10}$/, "Enter a valid phone number")
        .required("Phone number is required."),
    email: yup.string().matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Enter a valid email address")
        .required("Email address is required."),
    cities: yup
        .array()
        .required('Please select cities')
        .length(2, 'You must select exactly 2 cities'),

    country: yup.string().required("Please select the country it's required"),

    state: yup.string().required("Please select the state it's required"),

    address: yup.string().required("Please enter your address, it's required"),

    joiningDate: yup
        .date()
        .typeError("Joining date is required")
        .max(new Date(), "Joining date must be before today")
        .required("Joining date is required"),

    zip: yup.string().matches(/^\+?[1-9]\d{5,5}$/, "Enter valid PIN value")
        .required("Please enter valid Zip/Pin"),
    gender: yup.string().required("Gender is required"),

    hobbies: yup.array().required("Hobbies are required")
        .typeError("Please select at least two hobbies")
        .min(2, "Please select at least two hobbies"),

    profilePicture: yup
        .mixed()
        .test("required", "Profile picture is required", (value) => {
            return value && value.length > 0;
        })
        .test("filetype", "Only JPG, PNG allowed", (value) => {
            if (!value || value.length === 0) return true;
            return ["image/jpeg", "image/png"].includes(value[0].type);
        })
        .test("fileSize", "Max file size is 6MB", (value) => {
            if (!value || value.length === 0) return true;
            return value[0].size <= FILE_SIZE;
        }),

    resume: yup
        .mixed()
        .test("required", "Resume is required", (value) => {
            return value && value.length > 0;
        })
        .test("fileType", "Only PDF or Word documents allowed", (value) => {
            if (!value || value.length === 0) return true;
            return [
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ].includes(value[0].type);
        })
        .test("fileSize", "Max file size is 8MB", (value) => {
            if (!value || value.length === 0) return true;
            return value[0].size <= RESUME_SIZE;
        }),

    terms: yup.boolean().oneOf([true], "You must agree to continue"),
});


function FormExample() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        console.log("Form Data:", data);


        toast.success("Form submitted successfully!");
        reset();
    };

    return (
        <>
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                {/* First & Last Name */}
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            {...register("firstName")}
                            isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.firstName?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            {...register("lastName")}
                            isInvalid={!!errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.lastName?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                {/* AGE  */}
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            type="number"
                            {...register("age")}
                            isInvalid={!!errors.age}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.age?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    {/* Password  */}

                    <Form.Group as={Col} md="6">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            {...register("password")}
                            isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                {/* PHONE  */}
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            {...register("phone")}
                            isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.phone?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    {/* Email  */}

                    <Form.Group as={Col} md="6">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            {...register("email")}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>









                {/* COUNTRY + STATE */}
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Country</Form.Label>
                        <Form.Select {...register("country")} isInvalid={!!errors.country}>
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            {errors.country?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6">
                        <Form.Label>State</Form.Label>
                        <Form.Select {...register("state")} isInvalid={!!errors.state}>
                            <option value="">Select State</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Gurgaon">Gurgaon</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            {errors.state?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                {/* ADDRESS + JOINING DATE */}
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            {...register("address")}
                            isInvalid={!!errors.address}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.address?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6">
                        <Form.Label>Joining Date</Form.Label>
                        <Form.Control
                            type="date"
                            {...register("joiningDate")}
                            isInvalid={!!errors.joiningDate}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.joiningDate?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                {/* ZIP & GENDER */}
                <Row className="mb-3">
                    <Form.Group as={Col} md="3">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control {...register("zip")} isInvalid={!!errors.zip} />
                        <Form.Control.Feedback type="invalid">
                            {errors.zip?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="9">
                        <Form.Label>Gender</Form.Label>
                        <div>
                            <Form.Check
                                inline
                                label="Male"
                                value="male"
                                type="radio"
                                {...register("gender")}
                            />
                            <Form.Check
                                inline
                                label="Female"
                                value="female"
                                type="radio"
                                {...register("gender")}
                            />
                            <Form.Check
                                inline
                                label="Transgender"
                                value="transgender"
                                type="radio"
                                {...register("gender")}
                            />
                        </div>
                        <p className="text-danger">{errors.gender?.message}</p>
                    </Form.Group>
                </Row>

                {/* HOBBIES */}
                <Form.Group className="mb-3">
                    <Form.Label>Hobbies</Form.Label>
                    <div>
                        <Form.Check inline value="gaming" label="Gaming" type="checkbox" {...register("hobbies")} />
                        <Form.Check inline value="reading" label="Reading" type="checkbox" {...register("hobbies")} />
                        <Form.Check inline value="music" label="Music" type="checkbox" {...register("hobbies")} />
                    </div>
                    <p className="text-danger">{errors.hobbies?.message}</p>
                </Form.Group>

                <Form.Group controlId="cities">
                    <Form.Label>Select Cities (Select exactly 2)</Form.Label>
                    <Form.Select
                        multiple
                        {...register('cities')}
                        isInvalid={!!errors.cities}
                    >
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Pune">Pune</option>
                    </Form.Select>

                    <Form.Control.Feedback type="invalid">
                        {errors.cities?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* PROFILE FILE */}
                <Form.Group className="mb-3">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control type="file" {...register("profilePicture")} isInvalid={!!errors.profilePicture} />
                    <p className="text-danger">{errors.profilePicture?.message}</p>
                </Form.Group>

                {/* RESUME */}
                <Form.Group className="mb-3">
                    <Form.Label>Resume</Form.Label>
                    <Form.Control type="file" {...register("resume")} isInvalid={!!errors.resume} />
                    <p className="text-danger">{errors.resume?.message}</p>
                </Form.Group>

                {/* TERMS */}
                <Form.Group className="mb-3">
                    <Form.Check
                        label="Agree to terms & conditions"
                        type="checkbox"
                        {...register("terms")}
                        isInvalid={!!errors.terms}
                    />
                    <p className="text-danger">{errors.terms?.message}</p>
                </Form.Group>

                {/* SUBMIT */}
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Form"}
                </Button>
            </Form>

            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
}

export default FormExample;
