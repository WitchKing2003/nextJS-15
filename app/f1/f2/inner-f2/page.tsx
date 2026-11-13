import Link from "next/link";

export default function InterceptedF5() {
  return (
    <>
      <h1>F2 page</h1>;
      <div className="">
        <Link href={"/f4"}>F4</Link>
      </div>
      ;
    </>
  );
}
