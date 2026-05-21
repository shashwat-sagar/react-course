import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Table,
  message,
  ConfigProvider,
  theme,
  Tag,
  Tooltip,
  Popconfirm,
} from "antd";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiCalendar,
  FiTrash2,
  FiUsers,
  FiSearch,
  FiInfo,
  FiTrendingUp,
  FiGrid,
  FiLayers,
  FiHome,
} from "react-icons/fi";
import dayjs from "dayjs";
import { TiHomeOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const { Option } = Select;

// Sample initial data to make the UI look rich and professional from the start
const INITIAL_STUDENTS = [

];

const Registration = () => {
  const [form] = Form.useForm();

  // State where all student entries will be stored
  const [studentsRecords, setStudentsRecords] = useState<any[]>(INITIAL_STUDENTS);

  // Search and Filter States
  const [searchText, setSearchText] = useState("");
  const [genderFilter, setGenderFilter] = useState("All");

  const onFinish = (values: any) => {
    const newStudent = {
      id: Date.now(),
      ...values,
      dob: values.dob?.format("YYYY-MM-DD"),
    };

    setStudentsRecords((prev) => [...prev, newStudent]);
    message.success("Student registered successfully!");
    form.resetFields();
  };

  const handleDelete = (id: number) => {
    setStudentsRecords((prev) => prev.filter((student) => student.id !== id));
    message.success("Student record deleted successfully!");
  };

  const handleClearAll = () => {
    setStudentsRecords([]);
    message.warning("All student records cleared!");
  };

  // Metrics calculation
  const totalStudents = studentsRecords.length;
  const maleCount = studentsRecords.filter((s) => s.gender === "Male").length;
  const femaleCount = studentsRecords.filter((s) => s.gender === "Female").length;
  const otherCount = studentsRecords.filter((s) => s.gender === "Other").length;

  const latestStudent =
    studentsRecords.length > 0
      ? studentsRecords[studentsRecords.length - 1].name
      : "No students registered yet";

  // Filtered records based on search and gender dropdown
  const filteredRecords = studentsRecords.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchText.toLowerCase()) ||
      student.email.toLowerCase().includes(searchText.toLowerCase()) ||
      student.phone.includes(searchText);

    const matchesGender = genderFilter === "All" || student.gender === genderFilter;

    return matchesSearch && matchesGender;
  });

  const columns = [
    {
      title: "Student",
      dataIndex: "name",
      key: "name",
      render: (text: string) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-semibold flex items-center justify-center text-xs shadow-inner">
            {text.charAt(0).toUpperCase()}
          </div>
          <span className="font-semibold text-slate-700">{text}</span>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text: string) => (
        <a href={`mailto:${text}`} className="text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1.5 text-sm">
          <FiMail size={13} />
          {text}
        </a>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (text: string) => (
        <span className="text-slate-600 text-sm flex items-center gap-1.5">
          <FiPhone size={13} className="text-slate-400" />
          {text}
        </span>
      ),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (gender: string) => {
        let color = "blue";
        if (gender === "Female") color = "magenta";
        else if (gender === "Other") color = "purple";
        return (
          <Tag color={color} className="font-medium rounded-full px-2.5 py-0.5 border-none shadow-xs">
            {gender}
          </Tag>
        );
      },
    },
    {
      title: "DOB",
      dataIndex: "dob",
      key: "dob",
      render: (text: string) => (
        <span className="text-slate-600 text-sm flex items-center gap-1.5">
          <FiCalendar size={13} className="text-slate-400" />
          {text}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <Popconfirm
          title="Delete student record?"
          description="Are you sure you want to remove this student?"
          onConfirm={() => handleDelete(record.id)}
          okText="Yes"
          cancelText="No"
          okButtonProps={{ danger: true }}
        >
          <Tooltip title="Delete Student">
            <Button
              type="text"
              danger
              icon={<FiTrash2 size={16} />}
              className="hover:bg-red-50 p-2 rounded-lg flex items-center justify-center transition-colors"
            />
          </Tooltip>
        </Popconfirm>
      ),
    },
  ];

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: "#4f46e5", // Modern Indigo
          borderRadius: 10,
          fontFamily: "Inter, system-ui, -apple-system, sans-serif",
          colorBgContainer: "#ffffff",
          colorBorder: "#e2e8f0",
          colorTextHeading: "#1e293b", // Slate 800
        },
      }}
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/20 to-violet-50/30 p-4 md:p-8 lg:p-10 font-sans">

        {/* Decorative background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-8">

          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
            <div>
              <div className="flex gap-4">
                <Link to="/" className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-2 shadow-xs border border-indigo-100">
                  <TiHomeOutline size={12} />
                  Go To Home
                </Link>
                <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-2 shadow-xs border border-indigo-100">
                  <FiLayers size={12} />
                  Student Portal
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight leading-none">
                Student Directory <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Dashboard</span>
              </h1>
              <p className="text-slate-500 mt-2 text-sm md:text-base">
                Manage registrations, track enrollment metrics, and filter student directory profiles.
              </p>
            </div>

            {/* Quick Metrics Header Card */}
            <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 p-3 px-5 rounded-2xl shadow-xs flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:border-slate-300">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-200">
                <FiTrendingUp size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Latest Registration</p>
                <p className="text-sm font-bold text-slate-800 truncate max-w-[180px]">
                  {latestStudent}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Form Card */}
            <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-2xl shadow-lg shadow-slate-100/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-slate-300/80">
              <div className="h-2 bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-500" />
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-slate-800">Add New Student</h2>
                  <p className="text-slate-400 text-xs mt-1">Submit enrollment details to register.</p>
                </div>

                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  requiredMark={false}
                  className="space-y-4"
                >
                  <Form.Item
                    label={<span className="text-slate-600 font-semibold text-xs uppercase tracking-wider">Student Name</span>}
                    name="name"
                    rules={[{ required: true, message: "Please enter student name" }]}
                  >
                    <Input
                      prefix={<FiUser className="text-slate-400 mr-1.5" />}
                      placeholder="e.g. Liam Johnson"
                      className="py-2.5 rounded-lg border-slate-200 focus:border-indigo-500 transition-colors"
                    />
                  </Form.Item>

                  <Form.Item
                    label={<span className="text-slate-600 font-semibold text-xs uppercase tracking-wider">Email Address</span>}
                    name="email"
                    rules={[
                      { required: true, message: "Please enter email" },
                      { type: "email", message: "Enter a valid email address" },
                    ]}
                  >
                    <Input
                      prefix={<FiMail className="text-slate-400 mr-1.5" />}
                      placeholder="e.g. liam@example.com"
                      className="py-2.5 rounded-lg border-slate-200 focus:border-indigo-500 transition-colors"
                    />
                  </Form.Item>

                  <Form.Item
                    label={<span className="text-slate-600 font-semibold text-xs uppercase tracking-wider">Phone Number</span>}
                    name="phone"
                    rules={[
                      { required: true, message: "Please enter phone number" },
                      { pattern: /^[+]?[0-9\s-()]{7,15}$/, message: "Please enter a valid phone number" }
                    ]}
                  >
                    <Input
                      prefix={<FiPhone className="text-slate-400 mr-1.5" />}
                      placeholder="e.g. +1 (555) 123-4567"
                      className="py-2.5 rounded-lg border-slate-200 focus:border-indigo-500 transition-colors"
                    />
                  </Form.Item>

                  <div className="grid grid-cols-2 gap-4">
                    <Form.Item
                      label={<span className="text-slate-600 font-semibold text-xs uppercase tracking-wider">Gender</span>}
                      name="gender"
                      rules={[{ required: true, message: "Select gender" }]}
                    >
                      <Select placeholder="Choose" className="w-full" size="large">
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                        <Option value="Other">Other</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item
                      label={<span className="text-slate-600 font-semibold text-xs uppercase tracking-wider">DOB</span>}
                      name="dob"
                      rules={[{ required: true, message: "Select DOB" }]}
                    >
                      <DatePicker
                        style={{ width: "100%" }}
                        placeholder="Select Date"
                        size="large"
                        disabledDate={(current) => current && current > dayjs().endOf("day")}
                      />
                    </Form.Item>
                  </div>

                  <Form.Item className="pt-2 mb-0">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 border-none font-semibold text-sm shadow-md shadow-indigo-100 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <FiUser size={16} />
                      Register Student
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>

            {/* Right Column: Dashboard Metrics + Table Card */}
            <div className="lg:col-span-8 space-y-6">

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                {/* Metric 1 */}
                <div className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-xs transition-all duration-300 hover:shadow-md hover:border-slate-300/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Total Registered</p>
                    <p className="text-3xl font-extrabold text-slate-800 mt-1">{totalStudents}</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <FiUsers size={22} />
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-xs transition-all duration-300 hover:shadow-md hover:border-slate-300/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Male / Female</p>
                    <p className="text-2xl font-extrabold text-slate-800 mt-1">
                      {maleCount} <span className="text-sm font-normal text-slate-300">/</span> {femaleCount}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <FiGrid size={22} />
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-xs transition-all duration-300 hover:shadow-md hover:border-slate-300/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Other Gender</p>
                    <p className="text-3xl font-extrabold text-slate-800 mt-1">{otherCount}</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                    <FiLayers size={22} />
                  </div>
                </div>
              </div>

              {/* Records and Filtering Section */}
              <div className="bg-white border border-slate-200/80 rounded-2xl shadow-lg shadow-slate-100/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-slate-300/80">

                {/* Search & Actions Bar */}
                <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/50">
                  <div className="flex-1 max-w-md">
                    <Input
                      placeholder="Search by student name, email, or phone..."
                      prefix={<FiSearch className="text-slate-400 mr-2" />}
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      className="py-2 rounded-lg border-slate-200 focus:border-indigo-500 w-full bg-white"
                      allowClear
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <Select
                      defaultValue="All"
                      style={{ width: 130 }}
                      onChange={(value) => setGenderFilter(value)}
                      size="large"
                      className="gender-select"
                    >
                      <Option value="All">All Genders</Option>
                      <Option value="Male">Male</Option>
                      <Option value="Female">Female</Option>
                      <Option value="Other">Other</Option>
                    </Select>

                    {studentsRecords.length > 0 && (
                      <Popconfirm
                        title="Clear Directory?"
                        description="Are you sure you want to remove all students? This action cannot be undone."
                        onConfirm={handleClearAll}
                        okText="Yes, Clear All"
                        cancelText="Cancel"
                        okButtonProps={{ danger: true, type: "primary" }}
                      >
                        <Button
                          danger
                          type="dashed"
                          className="hover:border-red-500 hover:text-red-500 rounded-lg h-[40px] px-4 font-medium transition-colors"
                        >
                          Clear All
                        </Button>
                      </Popconfirm>
                    )}
                  </div>
                </div>

                {/* Table Section */}
                <div className="overflow-x-auto p-4 md:p-6">
                  <Table
                    dataSource={filteredRecords}
                    columns={columns}
                    rowKey="id"
                    pagination={{
                      pageSize: 5,
                      showSizeChanger: false,
                      className: "custom-pagination pt-4",
                    }}
                    locale={{
                      emptyText: (
                        <div className="py-12 flex flex-col items-center justify-center text-center">
                          <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center border border-dashed border-slate-300 text-slate-400 mb-3">
                            <FiInfo size={28} />
                          </div>
                          <p className="text-slate-700 font-semibold text-base">No Student Records Found</p>
                          <p className="text-slate-400 text-xs mt-1 max-w-[280px]">
                            {searchText || genderFilter !== "All"
                              ? "Try adjusting your search query or gender filter to find matching profiles."
                              : "Get started by filling out the form on the left to add your first student record."}
                          </p>
                        </div>
                      ),
                    }}
                    className="custom-table"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Registration;