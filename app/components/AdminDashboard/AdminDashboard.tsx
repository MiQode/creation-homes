'use client';

import { useMemo, useState } from 'react';
import {
  LayoutDashboard,
  Home,
  Users,
  Calendar,
  DollarSign,
  MessageSquare,
  Settings,
  Bell,
  Search,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  MapPin,
  Star,
  CheckCircle,
  XCircle,
  Clock,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  MoreVertical,
  Plus,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import {
  AdminStats,
  FormattedBooking,
  RevenueData,
  SafeListing,
  SafeReservation,
  SafeUser,
} from '@/app/types';
import Logo from '../navbar/Logo';

interface AdminDashboardProps {
  // initialBookings: SafeReservation[];
  initialBookings: FormattedBooking[];
  properties?: SafeListing[];
  initialStats: AdminStats | null;
  // initialStats: any;
  // initialRevenueData: any[];
  initialRevenueData: RevenueData[];

  // currentUser: any;
  currentUser?: SafeUser | null;
}

// Mock Data
const mockData = {
  properties: [
    {
      id: 1,
      name: 'Sunset Villa',
      location: 'Malibu, CA',
      rating: 4.8,
      reviews: 124,
      price: 250,
      status: 'active',
      bookings: 45,
    },
    {
      id: 2,
      name: 'Beach House',
      location: 'Miami, FL',
      rating: 4.9,
      reviews: 98,
      price: 340,
      status: 'active',
      bookings: 52,
    },
    {
      id: 3,
      name: 'Mountain Cabin',
      location: 'Aspen, CO',
      rating: 4.7,
      reviews: 76,
      price: 180,
      status: 'active',
      bookings: 38,
    },
    {
      id: 4,
      name: 'City Apartment',
      location: 'New York, NY',
      rating: 4.6,
      reviews: 156,
      price: 220,
      status: 'inactive',
      bookings: 28,
    },
    {
      id: 5,
      name: 'Lake Cottage',
      location: 'Seattle, WA',
      rating: 4.9,
      reviews: 89,
      price: 195,
      status: 'active',
      bookings: 41,
    },
  ],
  users: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'guest',
      joined: '2024-01-15',
      bookings: 12,
      status: 'active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'host',
      joined: '2024-02-20',
      properties: 3,
      status: 'active',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'guest',
      joined: '2024-03-10',
      bookings: 8,
      status: 'active',
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      role: 'host',
      joined: '2024-01-05',
      properties: 5,
      status: 'suspended',
    },
  ],
  messages: [
    {
      id: 1,
      from: 'John Doe',
      subject: 'Question about booking',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 2,
      from: 'Jane Smith',
      subject: 'Property listing help',
      time: '5 hours ago',
      read: true,
    },
    {
      id: 3,
      from: 'Mike Johnson',
      subject: 'Cancellation request',
      time: '1 day ago',
      read: false,
    },
  ],
  revenueData: [
    { month: 'Jan', revenue: 45000 },
    { month: 'Feb', revenue: 52000 },
    { month: 'Mar', revenue: 48000 },
    { month: 'Apr', revenue: 61000 },
    { month: 'May', revenue: 55000 },
    { month: 'Jun', revenue: 67000 },
  ],
};

const AdminDashboard = ({
  initialBookings,
  properties,
  initialStats,
  initialRevenueData,
  currentUser,
}: AdminDashboardProps) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  const [loading, setLoading] = useState(true);

  const [recentBookings] = useState<FormattedBooking[]>(initialBookings);
  const [stats] = useState<AdminStats | null>(initialStats);
  const [revenueData] = useState<RevenueData[]>(initialRevenueData);

  // Format stats for display
  const formattedStats = useMemo(() => {
    if (!stats) return [];
    return [
      {
        id: 1,
        label: 'Total Revenue',
        value: `UGX ${stats.revenue.value.toLocaleString()}`,
        change: `${stats.revenue.change >= 0 ? '+' : ''}${
          stats.revenue.change
        }%`,
        trend: stats.revenue.trend,
        icon: DollarSign,
        color: 'blue',
      },
      {
        id: 2,
        label: 'Active Listings',
        value: stats.listings.value.toString(),
        change: `${stats.listings.change >= 0 ? '+' : ''}${
          stats.listings.change
        }%`,
        trend: stats.listings.trend,
        icon: Home,
        color: 'purple',
      },
      {
        id: 3,
        label: 'Total Bookings',
        value: stats.bookings.value.toString(),
        change: `${stats.bookings.change >= 0 ? '+' : ''}${
          stats.bookings.change
        }%`,
        trend: stats.bookings.trend,
        icon: Calendar,
        color: 'green',
      },
      {
        id: 4,
        label: 'Active Users',
        value: stats.users.value.toString(),
        change: `${stats.users.change >= 0 ? '+' : ''}${stats.users.change}%`,
        trend: stats.users.trend,
        icon: Users,
        color: 'orange',
      },
    ];
  }, [stats]);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    // { id: 'properties', label: 'Properties', icon: Home },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    // { id: 'users', label: 'Users', icon: Users },
    // { id: 'revenue', label: 'Revenue', icon: DollarSign },
    // { id: 'messages', label: 'Messages', icon: MessageSquare, badge: 3 },
    // { id: 'settings', label: 'Settings', icon: Settings },
  ];

  type BookingStatus =
    | 'confirmed'
    | 'pending'
    | 'cancelled'
    | 'active'
    | 'inactive'
    | 'suspended';

  const statusColors: Record<BookingStatus, string> = {
    confirmed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    cancelled: 'bg-red-100 text-red-800',
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-gray-100 text-gray-800',
    suspended: 'bg-red-100 text-red-800',
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {formattedStats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-lg bg-${stat.color}-100 flex items-center justify-center`}
              >
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <div
                className={`flex items-center gap-1 text-sm font-semibold ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                {stat.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Charts and Recent Activity */}

      {/* Recent Bookings */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Recent Bookings</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Guest
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Property
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Check In
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Check Out
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Amount
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {booking.guest}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {booking.property}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {new Date(booking.checkIn).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {/* {booking.checkOut} */}
                    {new Date(booking.checkOut).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 text-sm font-semibold text-gray-900">
                    {booking.amount.toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        statusColors[booking.status]
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderProperties = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Properties Management
        </h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-5 h-5" />
          Add Property
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search properties..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="w-5 h-5" />
          Filter
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Download className="w-5 h-5" />
          Export
        </button>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockData.properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500" />
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {property.name}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {property.location}
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    statusColors[property.status]
                  }`}
                >
                  {property.status}
                </span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-gray-900">
                    {property.rating}
                  </span>
                  <span className="text-sm text-gray-600">
                    ({property.reviews})
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  {property.bookings} bookings
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <span className="text-2xl font-bold text-gray-900">
                    ${property.price}
                  </span>
                  <span className="text-sm text-gray-600">/night</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Users Management</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">
                  User
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">
                  Role
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">
                  Joined
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">
                  Activity
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">
                  Status
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {mockData.users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-600">{user.email}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    {user.joined}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900">
                    {user.bookings && `${user.bookings} bookings`}
                    {user.properties && `${user.properties} properties`}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        statusColors[user.status]
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'properties':
        return renderProperties();
      case 'users':
        return renderUsers();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 bg-white border-r border-gray-200`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          {/* <div className="h-20 flex items-center px-6 border-b border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900">
              HotelLux
            </span>
          </div> */}
          <div className="logo widget-title mx-4 mt-4 mb-8">
            <Logo />
          </div>

          {/* Menu */}
          <nav className="flex-1 overflow-y-auto py-6 px-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 mb-2 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
              <div className="flex-1">
                <div className="font-semibold text-gray-900 text-sm">
                  Admin User
                </div>
                <div className="text-xs text-gray-600">admin@hotellux.com</div>
              </div>
            </div>
            <button className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              <LogOut className="w-4 h-4" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="h-full px-4 sm:px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                {sidebarOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>This Year</option>
              </select>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-4 sm:p-6 lg:p-8">{renderContent()}</main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
