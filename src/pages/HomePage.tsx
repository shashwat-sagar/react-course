import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  CreditCard,
  Award,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Bell,
  Clock,
  Compass,
} from "lucide-react";
import { Button } from "antd";

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const features = [
    {
      icon: <GraduationCap className="w-8 h-8 text-rose-500" />,
      title: "Academics & CGPA Tracker",
      description:
        "Monitor your grades, track individual course progress, and project your CGPA with smart analytical tools.",
      bg: "from-rose-50 to-pink-50",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-indigo-500" />,
      title: "Digital Coursework & Library",
      description:
        "Instant access to digital textbooks, syllabus outlines, uploaded lecture slide decks, and video resources.",
      bg: "from-indigo-50 to-blue-50",
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-500" />,
      title: "Attendance & Schedules",
      description:
        "Stay updated with real-time class attendance percentages, interactive timetables, and exam calendars.",
      bg: "from-emerald-50 to-teal-50",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-amber-500" />,
      title: "Digital Fee & Payments",
      description:
        "Receive instant notifications for pending fees, and execute super secure online payments in a single tap.",
      bg: "from-amber-50 to-orange-50",
    },
  ];

  const stats = [
    {
      value: "15,000+",
      label: "Active Students",
      icon: <Users className="w-5 h-5 text-indigo-600" />,
    },
    {
      value: "98.4%",
      label: "Placement Success",
      icon: <Award className="w-5 h-5 text-rose-600" />,
    },
    {
      value: "120+",
      label: "Partner Institutions",
      icon: <Compass className="w-5 h-5 text-emerald-600" />,
    },
    {
      value: "24/7",
      label: "Self Service Portal",
      icon: <Clock className="w-5 h-5 text-amber-600" />,
    },
  ];

  const announcements = [
    {
      tag: "Exam",
      text: "Semester end practical examination schedule published. Check portal.",
      date: "Today",
    },
    {
      tag: "Academic",
      text: "Registration window for Autumn Elective courses closes on May 30th.",
      date: "2 days ago",
    },
    {
      tag: "Placement",
      text: "Pre-placement training program registrations started for pre-final year.",
      date: "3 days ago",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-tr from-slate-900 via-indigo-950 to-rose-950 py-24 px-6 md:px-12 text-white">
        {/* Abstract Background Blur Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-rose-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Hero Left Content */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-rose-300 text-sm font-medium border border-white/10 mb-2">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Next Gen Academic Management</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Empowering Minds, <br />
              <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Simplifying Campus Life.
              </span>
            </h1>

            <p className="text-slate-300 text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Experience the future of campus governance. Access attendance,
              exams, fees, grades, and interactive schedules in one unified
              premium portal.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link to="/login">
                <Button className="h-12! px-8! rounded-xl! font-bold! text-white! bg-gradient-to-r from-rose-500 to-pink-600! hover:from-rose-600! hover:to-pink-700! border-none! shadow-lg shadow-rose-500/20 flex items-center gap-2 text-base">
                  Access Portal <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/registration">
                <Button className="h-12! px-8! rounded-xl! font-semibold! text-white! bg-white/10! hover:bg-white/20! border-white/20! text-base">
                  Student Registration
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Right Visuals */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-[400px] lg:max-w-none">
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-rose-500 rounded-3xl blur-2xl opacity-20 transform rotate-6 scale-95" />

              {/* Glassmorphic Panel Mockup */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/15 p-6 rounded-3xl shadow-2xl space-y-6 text-slate-100">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-300 font-bold border border-rose-500/30">
                      NS
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Naman Sharma</h3>
                      <p className="text-xs text-slate-400">Roll: 2026CSE045</p>
                    </div>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-0.5 rounded-full font-medium">
                    Active
                  </span>
                </div>

                {/* Timetable Widget */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" /> Next Class Today
                  </h4>
                  <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">
                        Advanced React Architecture
                      </p>
                      <p className="text-xs text-slate-400">
                        Room 402 • 11:30 AM
                      </p>
                    </div>
                    <span className="text-xs text-rose-300 bg-rose-500/10 px-2 py-1 rounded-lg">
                      In 25m
                    </span>
                  </div>
                </div>

                {/* Attendance & Grades Mini Widgets */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                    <p className="text-xs text-slate-400">Attendance</p>
                    <p className="text-lg font-bold text-emerald-400 mt-1">
                      87.5%
                    </p>
                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[87.5%]" />
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                    <p className="text-xs text-slate-400">Current CGPA</p>
                    <p className="text-lg font-bold text-indigo-400 mt-1">
                      9.24 / 10
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-[10px] text-indigo-300">
                      <CheckCircle className="w-3 h-3 text-indigo-400" /> Dean's
                      List
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-12 px-6 shadow-sm border-b border-slate-100 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shadow-inner">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                    {stat.value}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-rose-500 uppercase tracking-widest text-xs font-bold">
            Unmatched Features
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            A Fully Loaded Hub for Academic Success
          </h3>
          <p className="text-slate-500 leading-relaxed font-light">
            No more jumping between disconnected platforms. Get everything you
            need to navigate your college journey seamlessly in one premium
            ecosystem.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              className={`bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
              variants={itemVariants}
              whileHover={{ y: -6 }}
            >
              {/* Card Color Tint Hover Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feat.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10`}
              />

              <div className="space-y-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-sm border border-slate-100">
                  {feat.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-slate-900 transition-colors duration-300">
                  {feat.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {feat.description}
                </p>
              </div>

              <div className="pt-6 flex items-center gap-2 text-slate-900 text-xs font-semibold group-hover:text-rose-600 transition-colors relative z-10">
                <span>Access Utility</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Portal Selection & Notice Board Section */}
      <section className="bg-slate-100/70 border-y border-slate-200/50 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Portal Access panels */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Choose Your Workspace
            </h3>
            <p className="text-slate-500 font-light max-w-xl">
              Log in to your respective dashboard portal to view personalised
              calendars, verify academic structures, and interact with
              administration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Student Portal Option */}
              <motion.div
                className="bg-white border border-slate-200/60 p-6 rounded-2xl hover:border-rose-400 transition duration-300 shadow-sm flex flex-col justify-between"
                whileHover={{ scale: 1.02 }}
              >
                <div>
                  <span className="bg-rose-50 text-rose-600 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Student
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mt-4 mb-2">
                    Student Self Service
                  </h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">
                    Check classes, download assignments, pay semester fees, and
                    inspect digital transcripts.
                  </p>
                </div>
                <Link to="/login/student" className="mt-6">
                  <Button className="w-full! h-10! rounded-lg! font-semibold! text-rose-500! border-rose-200! hover:border-rose-500! hover:bg-rose-50!">
                    Access Student Login
                  </Button>
                </Link>
              </motion.div>

              {/* Faculty Portal Option */}
              <motion.div
                className="bg-white border border-slate-200/60 p-6 rounded-2xl hover:border-indigo-400 transition duration-300 shadow-sm flex flex-col justify-between"
                whileHover={{ scale: 1.02 }}
              >
                <div>
                  <span className="bg-indigo-50 text-indigo-600 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Faculty
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mt-4 mb-2">
                    Faculty & Staff Portal
                  </h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">
                    Log attendance, input student grades, manage course lecture
                    materials, and submit leave reports.
                  </p>
                </div>
                <Link to="/login/faculty" className="mt-6">
                  <Button className="w-full! h-10! rounded-lg! font-semibold! text-indigo-600! border-indigo-200! hover:border-indigo-500! hover:bg-indigo-50!">
                    Access Faculty Login
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Notice Board Widget */}
          <div className="lg:col-span-5 bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-rose-500 animate-bounce" />{" "}
                  Notice Board
                </h3>
                <span className="text-xs text-rose-500 font-bold hover:underline cursor-pointer">
                  View All Notice
                </span>
              </div>

              <div className="space-y-4">
                {announcements.map((ann, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start p-3 rounded-2xl hover:bg-slate-50 transition"
                  >
                    <span
                      className={`text-[10px] uppercase font-extrabold px-2.5 py-1 rounded-full shrink-0 border ${
                        ann.tag === "Exam"
                          ? "bg-amber-50 text-amber-600 border-amber-200"
                          : ann.tag === "Academic"
                            ? "bg-indigo-50 text-indigo-600 border-indigo-200"
                            : "bg-rose-50 text-rose-600 border-rose-200"
                      }`}
                    >
                      {ann.tag}
                    </span>
                    <div className="space-y-1">
                      <p className="text-sm text-slate-700 font-medium leading-snug">
                        {ann.text}
                      </p>
                      <span className="text-[11px] text-slate-400 font-light">
                        {ann.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 mt-6 text-center text-xs text-slate-400">
              Updates occur live in coordination with the University Admin
              registrar.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
