"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/shadcn/Button/Button";
import Input from "@/components/shadcn/Input/Input";
import baseLoginSchema from "@/schemas/baseLoginSchema";
import { useAdminLogin } from "@/hooks/useAuthQueries";

const adminLoginSchema = baseLoginSchema;

const AdminLogin = () => {
  const { mutate: loginAdmin, isLoading } = useAdminLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(adminLoginSchema),
  });

  const onSubmit = (data) => {
    loginAdmin(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-white text-sm">
          Email
        </label>
        <Input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <label htmlFor="password" className="block text-white text-sm">
          Password
        </label>
        <Input
          type="password"
          id="password"
          placeholder="••••••••••"
          className="w-full"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
        <div className="flex justify-end">
          <a href="#" className="text-yellow-400 text-sm hover:underline">
            Forgot password
          </a>
        </div>
      </div>

      {/* Sign In Button */}
      <div className="flex justify-center items-center">
        <Button type="submit" className="w-32" disabled={isLoading}>
          {isLoading ? "Sign in..." : "Sign in"}
        </Button>
      </div>

      <p className="text-center text-gray-400 text-sm">
        Don't have an account?{" "}
        <a href="#" className="text-yellow-400 hover:underline">
          Sign up
        </a>
      </p>
    </form>
  );
};

export default AdminLogin;
