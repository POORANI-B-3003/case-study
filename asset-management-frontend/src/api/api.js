// src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

// ================= AUTH =================
export const login = (credentials) => API.post("/auth/login", credentials);
export const registerAdmin = (data) => API.post("/auth/register", { ...data, role: "ADMIN" });
export const registerEmployee = (data) => API.post("/auth/register", { ...data, role: "EMPLOYEE" });


// ================= ADMIN =================
export const getAdminStats = () => API.get("/admin/stats");

// Assets
export const getAssets = () => API.get("/assets");
export const createAsset = (asset) => API.post("/assets", asset);
export const updateAsset = (id, asset) => API.put(`/assets/${id}`, asset);
export const deleteAsset = (id) => API.delete(`/assets/${id}`);

// Employees
export const getEmployees = () => API.get("/employees");
export const createEmployee = (employee) => API.post("/employees", employee);
export const updateEmployee = (id, employee) => API.put(`/employees/${id}`, employee);
export const deleteEmployee = (id) => API.delete(`/employees/${id}`);

// Categories
export const getCategories = () => API.get("/categories");
export const createCategory = (category) => API.post("/categories", category);
export const updateCategory = (id, category) => API.put(`/categories/${id}`, category);
export const deleteCategory = (id) => API.delete(`/categories/${id}`);

// Service Requests (Admin View)
export const getAllRequests = () => API.get("/requests");

// ================= EMPLOYEE =================
export const getEmployeeStats = (id) => API.get(`/employee/stats/${id}`);
export const getAssignedAssets = (id) => API.get(`/assets/assigned/${id}`);
export const raiseServiceRequest = (request) => API.post("/requests", request);
export const getEmployeeRequests = (id) => API.get(`/requests/employee/${id}`);

// ================= OPTIONAL =================
export const getAuditLogs = () => API.get("/audit/logs");

export default API;
