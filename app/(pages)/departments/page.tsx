import PageHeader from "@/components/custom/PageHeader";
import Card from "@/components/custom/cards/DepartmentCard";
import { departments } from "@/constants/departments";
import React from "react";

const Departments = () => {
  return (
    <div className="pt-36">
      <PageHeader title="departments" />
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 place-items-center md:mx-10">
        {departments.map((data) => (
          <div key={data.id}>
            <Card icon={<data.icon size={80} />} title={data.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
