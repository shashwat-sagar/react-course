import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Lock,
  Mail,
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Sparkles,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { Button, Input, Checkbox, message, Form } from "antd";
import useAuthStore from "../store/store";
import fakeLogin from "../services/FakeLogin";
import useAppStore from "../store/appStore";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../services/api";

type PortalMode = "student" | "faculty";

const loginUser = async(payload:UserLoginPayload)=>{
    const {data} = await loginApi(payload);
    console.log("data:", data);
    return data.data;
}

const LoginPage = () => {
  const [mode, setMode] = useState<PortalMode>("student");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setStore, isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/auth/dashboard");
    }
  }, [isAuthenticated]);


const {mutate, isPending}=useMutation({
  mutationKey:["login",],   //save cache under this name
  mutationFn:loginUser,
  onSuccess:(data:any)=>{ 
    message.success(data.message)
    const {user, accessToken, refreshToken}=data;
    setStore(user, accessToken, refreshToken)
    console.log("api response:", data);
  },
  onError:(error:any)=>{
    
    message.error(error?.response?.data?.message)
  }
})



  const handleLogin = async (values: any) => {
    const { email, password } = values;
    mutate(values);
   
  };

  return (
    <div className="h-screen bg-slate-950 flex flex-col justify-between relative overflow-hidden font-sans p-6 text-slate-100">
      {/* Background Neon Orbs */}
      <div className="absolute top-[-25%] left-[-10%] w-[550px] h-[550px] rounded-full bg-rose-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[160px] pointer-events-none" />

      {/* Top Header Row */}
      <header className="max-w-7xl mx-auto w-full flex items-center justify-between z-10">
        <Link
          to="/"
          className="flex items-center gap-2 text-slate-400 hover:text-white transition group text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-md">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-sm tracking-tight text-white">
            Student ERP
          </span>
        </div>
      </header>

      {/* Main Form Box Container */}
      <main className="flex-1 flex items-center justify-center py-10 z-10">
        <motion.div
          className="w-full max-w-md bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          {/* Header Description */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-rose-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Unified Gateway Auth </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Sign In to ERP
            </h2>
            <p className="text-slate-400 text-sm font-light">
              Enter your credentials to access your control panel.
            </p>
          </div>

          {/* Portal Switch Tabs */}
          <div className="bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800/60 flex relative">
            {/* Active Highlight Slider */}
            <motion.div
              className={`absolute top-1.5 bottom-1.5 left-1.5 right-1.5 rounded-xl pointer-events-none -z-10`}
              layout
              initial={false}
              animate={{
                width: "calc(50% - 3px)",
                x: mode === "student" ? 0 : "100%",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                background:
                  mode === "student"
                    ? "linear-gradient(to right, #f43f5e, #ec4899)"
                    : "linear-gradient(to right, #6366f1, #3b82f6)",
              }}
            />

            <button
              type="button"
              onClick={() => setMode("student")}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors ${
                mode === "student"
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <UserCheck className="w-4 h-4" /> Student Portal
            </button>

            <button
              type="button"
              onClick={() => setMode("faculty")}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors ${
                mode === "faculty"
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <ShieldCheck className="w-4 h-4" /> Faculty Portal
            </button>
          </div>

          {/* Form Fields using Ant Design Form.Item */}
          <Form
            onFinish={handleLogin}
            layout="vertical"
            requiredMark={false}
            className="space-y-4"
          >
            {/* Email Field */}
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email or roll number!",
                },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
              label={
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  {mode === "student"
                    ? "Email Address / Roll No"
                    : "Institutional Email ID"}
                </span>
              }
              className="mb-0 text-slate-300"
            >
              <Input
                size="large"
                type="text"
                autoComplete="off"
                placeholder={
                  mode === "student"
                    ? "student@example.com"
                    : "faculty@example.com"
                }
                prefix={<Mail className="w-4 h-4 text-slate-500 mr-2" />}
                className="h-12! rounded-xl! bg-slate-950/50! hover:bg-slate-950! focus:bg-slate-950! border-slate-800! hover:border-slate-700! focus:border-rose-500! text-white! placeholder-slate-600!"
              />
            </Form.Item>

            {/* Password Field */}
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
              label={
                <div className="flex justify-between w-full items-center">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Password
                  </span>
                  <a
                    href="#forgot"
                    className="text-xs font-semibold hover:underline text-rose-400"
                  >
                    Forgot Password?
                  </a>
                </div>
              }
              className="mb-0 text-slate-300"
            >
              <Input
                size="large"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="new-password"
                prefix={<Lock className="w-4 h-4 text-slate-500 mr-2" />}
                suffix={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-slate-500 hover:text-slate-300 transition"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                }
                className="h-12! rounded-xl! bg-slate-950/50! hover:bg-slate-950! focus:bg-slate-950! border-slate-800! hover:border-slate-700! focus:border-rose-500! text-white! placeholder-slate-600!"
              />
            </Form.Item>

            {/* Remember Me */}
            <Form.Item name="remember" valuePropName="checked" className="mb-0">
              <Checkbox className="text-slate-400! hover:text-slate-300! text-xs font-light">
                Keep me signed in on this device
              </Checkbox>
            </Form.Item>

            {/* Submit Button */}
            <Button
              htmlType="submit"
              loading={loading}
              className={`w-full! h-12! rounded-xl! font-bold! text-white! border-none! shadow-lg flex items-center justify-center gap-2 text-base transition-all duration-300 ${
                mode === "student"
                  ? "bg-gradient-to-r! from-rose-500 to-pink-600! hover:from-rose-600! hover:to-pink-700! shadow-rose-500/10"
                  : "bg-gradient-to-r! from-indigo-500 to-blue-600! hover:from-indigo-600! hover:to-blue-700! shadow-indigo-500/10"
              }`}
            >
              Sign In to Portal <ArrowRight className="w-4 h-4" />
            </Button>
          </Form>
        </motion.div>
      </main>

      {/* Footer Bottom Fineprint */}
      <footer className="max-w-7xl mx-auto w-full text-center text-xs text-slate-200 font-light z-10 border-t border-slate-800/40 ">
        <p>
          This is a secure campus ERP authentication node. Unauthorized access
          is strictly logged.
        </p>
      </footer>
    </div>
  );
};

export default LoginPage;
