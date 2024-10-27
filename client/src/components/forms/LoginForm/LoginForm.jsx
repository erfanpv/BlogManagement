"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/shadcn/Button/Button";
import Input from "@/components/shadcn/Input/Input";
import Checkbox from "@/components/shadcn/Checkbox/Checkbox";
import baseLoginSchema from "@/schemas/baseLoginSchema";
import { z } from "zod";
import { useUserLogin } from "@/hooks/useAuthQueries";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const userLoginSchema = baseLoginSchema.extend({
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
});

const LoginForm = () => {
  const router = useRouter();
  const { mutate: loginUser, isLoading } = useUserLogin(); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userLoginSchema),
  });

  const onSubmit = (data) => {
    loginUser(data, {
      onSuccess: () => {
        toast.success("Login successful! Redirecting...");
        router.push("/"); 
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || "Login failed");
        if (error.response.status == 404) {
          router.push("/user/signup");
        }
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-white">
          Email Address
        </label>
        <Input
          type="email"
          id="email"
          className="w-full"
          placeholder="Enter Your Email Address"
          {...register("email")}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <label htmlFor="password" className="block text-white">
          Password
        </label>
        <Input
          type="password"
          id="password"
          className="w-full"
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
        <label htmlFor="terms" className="ml-2 text-white text-sm">
          I agree with Terms of Use and Privacy Policy
        </label>
        {errors.terms && <p className="text-red-500">{errors.terms.message}</p>}
      </div>

      {/* Login Button */}
      <div className="flex justify-center items-center">
        <Button type="submit" className="lg:w-32" disabled={isLoading}>
          {isLoading ? "Logging In..." : "Log In"}
        </Button>
      </div>

      <div className="text-center space-y-2">
        <p className="text-gray-400">or</p>
        <p className="text-gray-400">
          Don't have an account yet?{" "}
          <Link href="/user/signup" className="text-yellow-400 hover:underline">
            Register Here
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
