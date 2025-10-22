'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar({ isCollapsed = false, userRole = 'student' }) {
  const pathname = usePathname();
  
  const menuItems = {
    student: [
      { href: '/dashboard', label: 'Dashboard', icon: '📊' },
      { href: '/courses', label: 'My Courses', icon: '📚' },
      { href: '/progress', label: 'Progress', icon: '📈' },
      { href: '/profile', label: 'Profile', icon: '👤' }
    ],
    instructor: [
      { href: '/dashboard', label: 'Dashboard', icon: '📊' },
      { href: '/courses', label: 'My Courses', icon: '📚' },
      { href: '/create-course', label: 'Create Course', icon: '➕' },
      { href: '/students', label: 'Students', icon: '👥' },
      { href: '/analytics', label: 'Analytics', icon: '📈' }
    ],
    admin: [
      { href: '/dashboard', label: 'Dashboard', icon: '📊' },
      { href: '/users', label: 'Users', icon: '👥' },
      { href: '/courses', label: 'All Courses', icon: '📚' },
      { href: '/analytics', label: 'Analytics', icon: '📈' },
      { href: '/settings', label: 'Settings', icon: '⚙️' }
    ]
  };
  
  const items = menuItems[userRole] || menuItems.student;
  
  return (
    <aside className={`bg-white border-r border-gray-200 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4">
        <nav className="space-y-2">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {!isCollapsed && (
                  <span className="ml-3 font-medium">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}