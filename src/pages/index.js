import * as React from "react";
import PeriodicTable from "../components/PeriodicTable.jsx";

const index = () => {
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center bg-white p-5">
      {/* <h1 className="text-5xl">Periodic Table of Elements</h1> */}
      <PeriodicTable />
    </main>
  );
};

export default index;
