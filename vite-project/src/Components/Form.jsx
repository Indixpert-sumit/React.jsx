import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Col, Row, InputGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function FormExample() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
  });


        // Console Form data
  const onSubmit = async (data) => {
     console.log("Form Data:", data);
  

    toast.info('Submitting...');
    await new Promise((r) => setTimeout(r, 2000));
    toast.success('Form submitted successfully!');
    reset();
  };

  const validatePassword = (value) => {
    if (!value) return 'Password is required';
    if (value.length < 6 || value.length > 10)
      return 'Password must be 6-10 characters';
    if (/\s/.test(value)) return 'Password must not contain spaces';
    return true;
  };

  const validateCities = (value) => {

    if (!value || value.length < 2) return 'Select at least two cities';
    <div><option value="">Select country</option>
      <option value="India">India</option>
      <option value="USA">USA</option></div>
    return true;
  };

  const validateJoiningDate = (value) => {
    if (!value) return 'Joining date is required';
    const selectedDate = new Date(value);
    const today = new Date();
    if (selectedDate >= today) return 'Joining date must be before today';
    return true;
  };

  const validateHobbies = (value) => {
    if (!value || value.length < 2) return 'Select at least two hobbies';
    return true;
  };

  const validateProfilePicture = (files) => {
    if (!files || files.length === 0) return 'Profile picture is required';
    const file = files[0];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.type))
      return 'Only JPG, PNG ';
    if (file.size > 6 * 1024 * 1024) return 'Max file size is 6MB';
    return true;
  };

  const validateResume = (files) => {
    if (!files || files.length === 0) return 'Resume is required';
    const file = files[0];
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (!allowedTypes.includes(file.type))
      return 'Only PDF or Word documents are allowed';
    if (file.size > 8 * 1024 * 1024) return 'Max file size is 8MB';
    return true;
  };

  return (
    <>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              {...register('firstName', { required: 'First name required' })}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              {...register('lastName', { required: 'Last name required' })}
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              {...register('age', {
                required: 'Age required',
                min: { value: 18, message: 'Minimum age is 18' },
                max: { value: 40, message: 'Maximum age is 40' },
              })}
              isInvalid={!!errors.age}
            />
            <Form.Control.Feedback type="invalid">
              {errors.age?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register('password', { validate: validatePassword })}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Phone Number"
              {...register('phone', { required: 'Phone number required' })}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email Address"
              {...register('email', { required: 'Email required' })}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="country">
            <Form.Label>Select Country</Form.Label>
            <Form.Select
              {...register('country', { required: 'Country is required' })}
              isInvalid={!!errors.country}
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.country?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="state">
            <Form.Label>Select State</Form.Label>
            <Form.Select
              {...register('state', { required: 'State is required' })}
              isInvalid={!!errors.state}
            >
              <option value="">Select State</option>
              <option value="Delhi">Delhi</option>
              <option value="Gurgaon">Gurgaon</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.state?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

             {/* Select Cities */}

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="address">
            <Form.Label>Your Complete Address</Form.Label>
            <Form.Control
              rows={3}
              {...register('address', { required: 'Address required' })}
              isInvalid={!!errors.address}
            />
            <Form.Control.Feedback type="invalid">
              {errors.address?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="joiningDate">
            <Form.Label>Joining Date</Form.Label>
            <Form.Control
              type="date"
              {...register('joiningDate', {
                validate: validateJoiningDate,
              })}
              isInvalid={!!errors.joiningDate}
            />
            <Form.Control.Feedback type="invalid">
              {errors.joiningDate?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="zip">
            <Form.Label>Zip/Pin Code</Form.Label>
            <Form.Control
              type="text"
              {...register('zip', { required: 'Zip code required' })}
              isInvalid={!!errors.zip}
            />
            <Form.Control.Feedback type="invalid">
              {errors.zip?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="9" controlId="gender">
            <Form.Label>Gender</Form.Label>
            <div>
              <Form.Check
                inline
                label="Male"
                type="radio"
                value="male"
                {...register('gender', { required: 'Gender required' })}
                isInvalid={!!errors.gender}
                id="gender-male"
              />
              <Form.Check
                inline
                label="Female"
                type="radio"
                value="female"
                {...register('gender', { required: 'Gender required' })}
                isInvalid={!!errors.gender}
                id="gender-female"
              />
              <Form.Check
                inline
                label="Transgender"
                type="radio"
                value="transgender"
                {...register('gender', { required: 'Gender required' })}
                isInvalid={!!errors.gender}
                id="gender-transgender"
              />
            </div>
            <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
              {errors.gender?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="hobbies">
          <Form.Label>Hobbies (select at least two)</Form.Label>
          <div>
            <Form.Check
              inline
              label="Gaming"
              type="checkbox"
              value="drawing"
              {...register('hobbies', { validate: validateHobbies })}
              isInvalid={!!errors.hobbies}
              id="hobby-drawing"
            />
            <Form.Check
              inline
              label="Reading"
              type="checkbox"
              value="singing"
              {...register('hobbies', { validate: validateHobbies })}
              isInvalid={!!errors.hobbies}
              id="hobby-singing"
            />
            <Form.Check
              inline
              label="Song Listening"
              type="checkbox"
              value="dancing"
              {...register('hobbies', { validate: validateHobbies })}
              isInvalid={!!errors.hobbies}
              id="hobby-dancing"
            />
          </div>
          <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
            {errors.hobbies?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="profilePicture">
          <Form.Label>Profile Picture (JPG, PNG, GIF max 6MB)</Form.Label>
          <Form.Control
            type="file"
            {...register('profilePicture', { validate: validateProfilePicture })}
            isInvalid={!!errors.profilePicture}
            accept=".jpg,.jpeg,.png,.gif"
          />
          <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
            {errors.profilePicture?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Resume */}
        <Form.Group className="mb-3" controlId="resume">
          <Form.Label>Resume (PDF or Word max 8MB)</Form.Label>
          <Form.Control
            type="file"
            {...register('resume', { validate: validateResume })}
            isInvalid={!!errors.resume}
            accept=".pdf,.doc,.docx"
          />
          <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
            {errors.resume?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="terms">
          <Form.Check
            type="checkbox"
            label="Agree to terms and conditions"
            {...register('terms', { required: 'You must agree to continue' })}
            isInvalid={!!errors.terms}
          />
          <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
            {errors.terms?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit form'}
        </Button>
      </Form>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
    
  );
}

export default FormExample;
