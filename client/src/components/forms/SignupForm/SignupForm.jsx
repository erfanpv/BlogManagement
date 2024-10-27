"use client"; 

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/shadcn/Button/Button";
import Input from "@/components/shadcn/Input/Input";
import Checkbox from "@/components/shadcn/Checkbox/Checkbox";
import signupSchema from "@/schemas/signupSchema";
import Link from "next/link";
import { useSignup } from "@/hooks/useAuthQueries";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();

  const { mutate: signup, isLoading } = useSignup(
    (data) => {
      toast.success("Signup successful! You can now log in.");
      router.push("/user/logIn");
    },
    (error) => {
      toast.error(error.response?.data?.message || "An error occurred");

      if (error.response.status == 409) {
        router.push("/user/logIn");
      }
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    await signup(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Full Name */}
      <div className="space-y-2">
        <label className="text-white block">Full Name</label>
        <Input
          type="text"
          className={"w-full"}
          placeholder="Enter Your Full Name"
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className="text-red-500">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email Address */}
      <div className="space-y-2">
        <label className="text-white block">Email Address</label>
        <Input
          type="email"
          className={"w-full"}
          placeholder="Enter Your Email Address"
          {...register("email")}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      {/* Designation */}
      <div className="space-y-2">
        <label className="text-white block">Designation</label>
        <Input
          type="text"
          className={"w-full"}
          placeholder="Enter your Designation"
          {...register("designation")}
        />
        {errors.designation && (
          <p className="text-red-500">{errors.designation.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-2">
        <label className="text-white block">Password</label>
        <Input
          type="password"
          className={"w-full"}
          placeholder="Enter your Password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* Terms Checkbox */}
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" {...register("terms")} />
        <label htmlFor="terms" className="text-gray-300 text-sm">
          I agree with Terms of Use and Privacy Policy
        </label>
        {errors.terms && <p className="text-red-500">{errors.terms.message}</p>}
      </div>

      {/* Sign Up Button */}
      <div className="flex justify-center items-center">
        <Button type="submit" className="lg:w-32" disabled={isLoading}>
          {isLoading ? "Signing Up..." : "Sign Up"}
        </Button>
      </div>

      <div className="text-center text-gray-400">
        <p>
          Already have an account?{" "}
          <Link href="/user/logIn" className="text-yellow-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
