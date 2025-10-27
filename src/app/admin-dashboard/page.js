import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import DashboardPage from "../../components/pages/dashboard-page";
import { NEXT_AUTH } from '../api/auth/[...nextauth]/route';

export default async function AdminDashboardPage() {
  const session = await getServerSession(NEXT_AUTH);

  if (!session || session.user?.role !== 'admin') {
    redirect('/signin');
  }

  console.log('Admin dashboard access - Session user:', session.user);

  return <DashboardPage />;
}