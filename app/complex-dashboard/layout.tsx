import Notifications from "./@notifications/page";
import RevenueMetrics from "./@revenuemetrics/page";
import UserAnlytics from "./@useranlytics/page";

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div className="">{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex-1">{users}</div>
          <div className="flex-1">{revenue}</div>
        </div>
        <div className="flex flex-1">
          <div className="flex-1">{notifications}</div>
        </div>
      </div>
    </>
  );
}
