"use client"

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    company: Yup.string().required("Company or brand name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email"),
    campaignInterest: Yup.string().required("Please share your campaign idea"),
    location: Yup.string().required("Please share your target location"),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "Accepting terms is required to continue"
    ),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data, e) => {
    console.log("Straat Africa Contact Form Submitted:", data);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact_form">
      {/* Name */}
      <div className="ptf-form-group">
        <label data-number="01">What's your name?</label>
        <input
          type="text"
          name="name"
          {...register("name")}
          className={`${errors.name ? "is-invalid" : ""}`}
        />
        {errors.name && <div className="invalid-feedback">{errors.name?.message}</div>}
      </div>

      {/* Company */}
      <div className="ptf-form-group">
        <label data-number="02">Your company or brand name</label>
        <input
          type="text"
          name="company"
          {...register("company")}
          className={`${errors.company ? "is-invalid" : ""}`}
        />
        {errors.company && <div className="invalid-feedback">{errors.company?.message}</div>}
      </div>

      {/* Email */}
      <div className="ptf-form-group">
        <label data-number="03">Your email address</label>
        <input
          type="text"
          name="email"
          {...register("email")}
          className={`${errors.email ? "is-invalid" : ""}`}
        />
        {errors.email && <div className="invalid-feedback">{errors.email?.message}</div>}
      </div>

      {/* Campaign Interest */}
      <div className="ptf-form-group">
        <label data-number="04">Tell us about your campaign idea</label>
        <textarea
          name="campaignInterest"
          rows="4"
          {...register("campaignInterest")}
          className={`${errors.campaignInterest ? "is-invalid" : ""}`}
        />
        {errors.campaignInterest && (
          <div className="invalid-feedback">{errors.campaignInterest?.message}</div>
        )}
      </div>

      {/* Target Location */}
      <div className="ptf-form-group">
        <label data-number="05">Which location or township do you want to reach?</label>
        <input
          type="text"
          name="location"
          {...register("location")}
          className={`${errors.location ? "is-invalid" : ""}`}
        />
        {errors.location && (
          <div className="invalid-feedback">{errors.location?.message}</div>
        )}
      </div>

      {/* Accept Terms */}
      <div className="ptf-form-group agreement-checkbox">
        <input
          name="acceptTerms"
          type="checkbox"
          id="acceptTerms"
          {...register("acceptTerms")}
          className={`${errors.acceptTerms ? "is-invalid" : ""}`}
        />
        <label className="ptf-checkbox" htmlFor="acceptTerms">
          <span className="ptf-checkbox__checkmark"></span>I agree to receive updates about Straat Africa's advertising opportunities.
        </label>
        {errors.acceptTerms && (
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
        )}
      </div>

      <div className="ptf-spacer" style={{ "--ptf-xxl": "5rem" }}></div>

      <button className="ptf-submit-button">
        Submit
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 17">
          <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
        </svg>
      </button>
    </form>
  );
};

export default ContactForm;
