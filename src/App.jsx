import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./Components/admin/contexts/theme-context";

import Layout from "./Components/admin/routes/layout";
import DashboardPage from "./Components/admin/routes/dashboard/page";
import UserManagememt from "./Components/admin/UserManagememt";

function App() {
    const router = createBrowserRouter([
        {
            path: "/admin",
            element: <Layout />,
            children: [
                { index: true, element: <DashboardPage /> },
                { path: "usermanagement", element: <UserManagememt /> },
                { path: "analytics", element: <h1 className="title">Analytics</h1> },
                { path: "reports", element: <h1 className="title">Reports</h1> },
                { path: "customers", element: <h1 className="title">Customers</h1> },
                { path: "new-customer", element: <h1 className="title">New Customer</h1> },
                { path: "verified-customers", element: <h1 className="title">Verified Customers</h1> },
                { path: "products", element: <h1 className="title">Products</h1> },
                { path: "new-product", element: <h1 className="title">New Product</h1> },
                { path: "inventory", element: <h1 className="title">Inventory</h1> },
                { path: "settings", element: <h1 className="title">Settings</h1> },
            ],
        },
    ]);
    

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
