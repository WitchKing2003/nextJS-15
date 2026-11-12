import { CardCompoent } from "@/components/Card/CardCompoent";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <CardCompoent>
      <div className="">Archived Notifications</div>
      <div className="">
        <Link href="/complex-dashboard">Archived</Link>
      </div>
    </CardCompoent>
  );
}
